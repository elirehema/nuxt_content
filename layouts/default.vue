<template>
  <v-app class="app" dark>
    <v-app-bar color="white" absolute hide-on-scroll dark app>
      <v-toolbar-title to="/">
        <img src="@/assets/img/logo.png" height="100" width="200" alt="Opus" />
      </v-toolbar-title>
      <v-spacer />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <nuxt class="ma-0 pa-0" />
      </v-container>
    </v-main>
    <v-footer-component></v-footer-component>
  </v-app>
</template>

<script>
import FooterComponent from "@/components/global/Footer";
export default {
  components: {
    VFooterComponent: FooterComponent,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      message: null,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style>
.app {
  font-family: "Nunito", sans-serif;
}
</style>
