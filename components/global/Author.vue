<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Author</div>
        <v-list-item-title class="headline mb-1">{{
          author.name
        }}</v-list-item-title>
        <v-list-item-subtitle>{{ author.bio }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img
          class="elevation-6"
          alt="Profile Picture"
          :src="author.image"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  props: {
    author: {
      type: Object,
      required: true,
    },
  },
};
</script>
