<template>
  <v-card>
    <v-list three-line>
      <template v-for="(item, index) in tarefas">
        <v-subheader class="font-weight-bold titulo-agenda" v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

        <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar>
            <v-img src="../assets/foto-perfil-2.png"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title" class="font-weight-bold"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "AgendaHoje",
  data() {
    return {
      tarefas: [
        { header: "AGENDA HOJE" },
        {
          avatar: "../assets/foto-perfil-2.png",
          title: "Reunião com cliente",
          subtitle: `<span class="text--primary">Rafael</span> &mdash; Reunião com o cliente da empresa X que gostaria de um sistema robusto`,
        },
        { divider: true, inset: true },
        {
          avatar: "../assets/foto-perfil-2.png",
          title: "Realizar Testes de API de distribuição",
          subtitle: `<span class="text--primary">Rafael</span> &mdash; Realizar testes na API nova para verificar se há erros e bugs presentes`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Executar testes",
          subtitle: `<span class="text--primary">Lucas</span> &mdash; Executar testes para analisar a eficácia do novo método`,
        },
        { divider: true, inset: true },
        {
          avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Produzir relatório sobre os testes",
          subtitle: `<span class="text--primary">Lucas</span> &mdash; Detalhar em um relatório completo com detalhes os resultados obtidos`,
        },
      ],
    };
  },
};
</script>

<style></style>
