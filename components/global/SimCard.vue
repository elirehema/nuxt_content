<template>
  <div class="post">
    <v-img :src="post.image" class="img" alt="Cat"></v-img>
    <div class="content">
      <v-tags :tags="post.tags" />
      <h3 class="heading">{{ post.title.slice(0, 40) }}</h3>
      <v-divider></v-divider>
      <p>{{ post.description.slice(0, 200) }}</p>

      <nuxt-link :to="post.dir">Read more</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border-radius: 8px;
  box-shadow: 1px 1px 10px 0 rgba(32, 33, 36, 0.1);
  padding: 0px 0px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
}
.img {
  width: 100%;
  min-width: 200px;
  margin-right: 10px;
  padding: 0;
  position: relative;
  height: 300px;
}
.img /deep/ img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.heading {
  margin-bottom: 5px;
}
.content {
  padding: 10px 8px;
}
</style>
