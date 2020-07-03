<template>
  <div class="img">
    <img :src="imgSrc()" :alt="alt" />
  </div>
</template>

<script lang="js">
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  methods: {
    imgSrc() {
      try {
        const { post } = this.$parent;
         // eslint-disable-next-line no-console

        return require(`@/content${post.dir}/img/${this.src}`);
      } catch (error) {
        return null;
      }
    },

  },

};
</script>

<style scoped>
.img {
  border: 0px solid #eee;
  border-radius: 0px;
  padding: 0px;
}
img {
  max-width: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
