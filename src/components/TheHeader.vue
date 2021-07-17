<template>
  <header>
    <v-app-bar app clipped-left color="#151245" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img alt="EasyJur Logo" class=" mr-2 mb-2" contain src="../assets/easyjur-branca.png" transition="scale-transition" width="120" />
        </router-link>
      </div>
      <v-app-bar-nav-icon @click="alternaSidebar"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-badge class="mr-5" dot :content="mensagensNaoLidas.length" :value="mensagensNaoLidas.length" color="red" overlap>
        <v-icon @click="fazNada">mdi-bell-outline</v-icon>
      </v-badge>
      <v-badge class="mr-6 " :content="mensagensNaoLidas.length" :value="mensagensNaoLidas.length" color="red" overlap>
        <v-icon @click="fazNada">mdi-email-outline</v-icon>
      </v-badge>
      <v-avatar size="42" @click="fazNada"><img alt="Foto de Perfil" src="../assets/foto-perfil-2.png"/></v-avatar>
    </v-app-bar>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "TheHeader",
  data() {
    return {
      messages: 2,
    };
  },

  methods: {
    fazNada() {
      console.log(this.mensagensNaoLidas);
    },
  },
  computed: { ...mapGetters(["mensagensNaoLidas"]), ...mapActions(["alternaSidebar"]) },
};
</script>

<style scoped></style>
