<template>
  <div class="teste">
    <v-navigation-drawer app :v-model="null" class="rounded-border" :mini-variant="sidebar" clipped flat dark color="#151245">
      <v-list>
        <v-list-item class="pr-0" v-for="(aba, index) in listaAbas" :key="index" :to="aba.route">
          <v-list-item-icon>
            <v-icon class="">{{ aba.icone }}</v-icon></v-list-item-icon
          >
          <v-list-item-title class="titulo-navbar">{{ aba.nome }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BarraLateral",
  data() {
    return {
      listaAbas: [
        {
          nome: "Dashboard",
          route: "/",
          icone: "mdi-home-variant-outline",
        },
        {
          nome: "Agenda",
          route: "/agenda",
          icone: "mdi-calendar",
        },
        {
          nome: "Pessoas",
          route: "/pessoas",
          icone: "mdi-account-group-outline",
        },
        {
          nome: "Novos Negócios",
          route: "/novos-negocios",
          icone: "mdi-handshake-outline",
        },
        {
          nome: "Processos e Casos",
          route: "/processos-e-casos",
          icone: "mdi-scale-balance",
        },
        {
          nome: "Movimentações",
          route: "/movimentacoes",
          icone: "mdi-pulse",
        },
        {
          nome: "Projetos Consultivos",
          route: "/projetos-consultivos",
          icone: "mdi-briefcase-variant-outline",
        },
        {
          nome: "Documentos Jurídicos",
          route: "/documentos-juridicos",
          icone: "mdi-file-document-multiple-outline",
        },
        {
          nome: "Despesas e Suprimentos",
          route: "/despesas-e-suprimentos",
          icone: "mdi-cart-minus",
        },
        {
          nome: "Financeiro e Contratos",
          route: "/financeiro-e-contratos",
          icone: "mdi-currency-usd",
        },
        {
          nome: "Legal Analytics",
          route: "/legal-analytics",
          icone: "mdi-chart-areaspline",
        },
        {
          nome: "Gestão Estratégica",
          route: "/gestao-estrategica",
          icone: "mdi-home-variant-outline",
        },
        {
          nome: "Configurações",
          route: "/configuracoes",
          icone: "mdi-cog-outline",
        },
        {
          nome: "FAQ e Treinamento",
          route: "/faq",
          icone: "mdi-help-circle-outline",
        },
      ],
    };
  },
  computed: {
    ...mapState(["sidebar"]),
  },
};
</script>

<style scoped>
.rounded-border {
  background: linear-gradient(0deg, rgba(21, 18, 69, 1) 1%, rgba(67, 66, 78, 1) 49%, rgba(21, 18, 69, 1) 100%);
}
.titulo-navbar {
  font-size: 14px;
}
.teste {
  position: relative;
}
.botaoTeste {
  position: absolute;
  left: 100px;
}
</style>
