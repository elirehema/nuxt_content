<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="blue-grey darken-4">
        <strong class="subheading white--text"
          >Get connected with us on...!</strong
        >

        <v-spacer></v-spacer>

        <v-btn
          v-for="i in icons"
          :key="i.icon"
          class="mx-4"
          dark
          icon
          :href="i.link"
          target="_blank"
        >
          <v-icon size="24px">{{ i.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="blue-grey darken-4 py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vue content</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { icon: "mdi-github", link: "https://github.com/elirehema" },
      { icon: "mdi-facebook", link: "https://web.facebook.com/pelirehema/" },
      { icon: "mdi-twitter", link: "https://twitter.com/elixml" },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/elirehema-paul-3755b4124/",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/elixmli/?hl=en",
      },
    ],
  }),
};
</script>
