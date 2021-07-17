<template>
  <v-app>
    <TheHeader />
    <BarraLateral />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import BarraLateral from "@/components/BarraLateral";
export default {
  name: "App",

  data: () => ({
    //
  }),
  components: {
    TheHeader,
    BarraLateral,
  },
};
</script>
