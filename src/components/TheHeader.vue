<template>
  <header>
    <v-app-bar app clipped-left color="#151245" dark>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img alt="EasyJur Logo" class=" mr-2 mb-2" contain src="../assets/easyjur-branca.png" transition="scale-transition" width="120" />
        </router-link>
      </div>
      <v-app-bar-nav-icon @click="chamaStore"> </v-app-bar-nav-icon>
      <v-spacer></v-spacer>

      <v-badge class="mr-5" dot :content="mensagensNaoLidas.length" :value="mensagensNaoLidas.length" color="red" overlap>
        <v-icon @click="fazNada">mdi-bell-outline</v-icon>
      </v-badge>

      <v-badge class="mr-6 " :content="mensagensNaoLidas.length" :value="mensagensNaoLidas.length" color="red" overlap>
        <v-icon @click="fazNada" v-bind="attrs" v-on="on">mdi-email-outline</v-icon>
      </v-badge>

      <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar size="42" @click="fazNada" v-bind="attrs" v-on="on"><img alt="Foto de Perfil" src="../assets/foto-perfil-2.png"/></v-avatar>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="../assets/foto-perfil-2.png" alt="John" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Rafael Laranjo</v-list-item-title>
                <v-list-item-subtitle>CTO da EasyJur</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list>
            <v-list-item>
              <v-list-item-action>
                <v-switch v-model="message" color="#151245"></v-switch>
              </v-list-item-action>
              <v-list-item-title>Permitir mensagens</v-list-item-title>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false" color="#151245">Cancelar</v-btn>
            <v-btn color="#151245" text @click="menu = false">Salvar</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
  </header>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "TheHeader",
  data() {
    return {
      messages: 2,
      message: false,
      menu: false,
      attrs: "",
      on: {},
    };
  },

  methods: {
    ...mapActions(["alternaSidebar"]),
    fazNada() {
      console.log(this.mensagensNaoLidas);
    },
    chamaStore() {
      this.alternaSidebar();
    },
  },
  computed: { ...mapGetters(["mensagensNaoLidas"]) },
};
</script>

<style scoped></style>
