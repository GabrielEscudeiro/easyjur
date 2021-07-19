<template>
  <v-app>
    <BarraLateral />
    <TheHeader />

    <v-main class="background">
      <v-container fluid>
        <router-view />
      </v-container>
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
<style>
.background {
  background-color: #f1f5f8;
}
h3 {
  font-size: 16px;
}
.rotas {
  padding: 0;
  text-align: right;
  font-weight: 700;
  justify-content: right;
}
.titulo {
  color: #151245;
  font-size: 1.6rem;
}
</style>
