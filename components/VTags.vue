<template>
  <p class="tags">
    <span v-for="tag in tags" :key="tag" class="tag">
      <nuxt-link :to="`/tags/${tag}`">{{ tag }}</nuxt-link
      >&nbsp;
    </span>
  </p>
</template>

<script lang="js">
export default {
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.tag a {
  box-shadow: -8px 15px 26px -14px #3dc21b;
  background: linear-gradient(to bottom, #00695c 5%, #5cbf2a 100%);
  background-color: #d4b760;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 12px;
  padding: 0px 9px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.myButton {
  box-shadow: -8px 15px 26px -14px #3dc21b;
  background: linear-gradient(to bottom, #44c767 5%, #5cbf2a 100%);
  background-color: #44c767;
  border-radius: 42px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 14px;
  padding: 7px 13px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
}
.myButton:hover {
  background: linear-gradient(to bottom, #5cbf2a 5%, #44c767 100%);
  background-color: #5cbf2a;
}
.myButton:active {
  position: relative;
  top: 1px;
}
</style>
