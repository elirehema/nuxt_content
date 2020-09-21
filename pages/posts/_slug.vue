<template>
  <v-container class="ma-2">
    <div class="post">
      <h1>{{ post.title }}</h1>
      <hr />
      <p class="lead">{{ post.description }}</p>
      <p class="lead">{{ formatDate(post.createdAt) }}</p>
      <v-tags :tags="post.tags" />
      <v-img :src="post.image" class="img" alt="Featured image"></v-img>
      <nuxt-content :document="post" />
      <author :author="post.author" />
      <prev-next :prev="prev" :next="next" />
    </div>
  </v-container>
</template>
<script>
import VImg from "~/components/VImg";
import prism from "@/plugins/prism";
export default {
  components: {
    VImg,
  },
  async asyncData({ params, error, $content }) {
    try {
      const postPath = `/posts/${params.slug}`;
      const [post] = await $content("posts", { deep: true })
        .where({ dir: postPath })
        .fetch();
      const [prev, next] = await $content("posts/writing-html-in-content")
        .only(["title", "slug"])
        .sortBy("createdAt", "asc")
        .surround(params.slug)
        .fetch();
      // eslint-disable-next-line no-console
      console.log(prev, next);
      return { post, prev, next };
    } catch (err) {
      error({
        statusCode: 404,
        message: "Page could not be found",
      });
    }
  },
  computed: {
    postInfo() {
      const post = this.post || {};
      const { body, ...rest } = post;
      return rest;
    },
  },
  mounted() {
    prism.highlightAll();
  },
  methods: {
    filterContents() {
      // eslint-disable-next-line no-console
      console.log("Log");
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  head() {
    return {
      title: this.post.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.post.description,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://nuxt-blog.com/" + this.post.dir,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
