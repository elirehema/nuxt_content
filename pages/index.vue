<template>
  <div class="posts">
    <v-app-bar color="white" flat dense>
      <h1>Vue content blog posts</h1>
      <v-spacer />
      <v-text-field
        ref="message"
        v-model="message"
        prepend-icon="mdi-magnify"
        dense
        background-color="gray"
        placeholder="Enter search text ..."
        hide-details
        single-line
        solo-inverted
        clearable
        counter="10"
        @change="filterContents()"
        @click:append-outer="filterContents()"
      ></v-text-field
    ></v-app-bar>
    <v-alert prominent :value="alert" type="error" elevetion="2">
      <v-row align="center">
        <v-col class="grow">
          <strong>
            No blog post with text: <i>{{ message }}</i>
          </strong>
        </v-col>
        <v-col class="shrink">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
            @click="alert = !alert"
          >
            <v-icon dark>mdi-close</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <post-card v-for="post in posts" :key="post.dir" :post="post"></post-card>
  </div>
</template>
<script>
import PostCard from "~/components/PostCard";
export default {
  components: {
    PostCard,
  },
  async asyncData({ params, error, $content }) {
    try {
      const posts = await $content("posts", { deep: true }).fetch();
      return { posts };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  data() {
    return {
      clipped: false,
      alert: false,
      fixed: false,
      message: null,
    };
  },
  methods: {
    async filterContents() {
      try {
        const array = await this.$content("posts", { deep: true })
          .search(this.message)
          .fetch();
        if (array === undefined || array.length === 0) {
          this.alert = true;
        } else {
          this.alert = false;
          this.posts = array;
        }
        return;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log({
          statusCode: 404,
          message: "Page could not be found",
        });
      }
    },
  },
  head() {
    return {
      title: "Nuxt blog",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Cool nuxt blog",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/",
        },
      ],
    };
  },
};
</script>
