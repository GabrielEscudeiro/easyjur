<template>
  <v-card class="mx-auto" width="100%">
    <v-toolbar color="#151245" dark>
      <v-row>
        <v-col cols="1">
          <v-toolbar-title>Selecão</v-toolbar-title>
        </v-col>
        <v-col cols="1">
          <v-toolbar-title>Responsáveis</v-toolbar-title>
        </v-col>
        <v-col cols="2">
          <v-toolbar-title>Cliente</v-toolbar-title>
        </v-col>
        <v-col cols="5">
          <v-toolbar-title>Descrição</v-toolbar-title>
        </v-col>
        <v-col cols="2">
          <v-toolbar-title>Status</v-toolbar-title>
        </v-col>
      </v-row>
    </v-toolbar>

    <v-list three-line>
      <v-list-item-group v-model="selected" active-class="indigo--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{}">
              <v-row>
                <v-col cols="1">
                  <v-checkbox color="indigo darken-3" hide-details></v-checkbox>
                </v-col>
                <v-col cols="1">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.title"></v-list-item-title>
                  </v-list-item-content>
                </v-col>
                <v-col cols="2">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.cliente"></v-list-item-title>
                  </v-list-item-content>
                </v-col>

                <v-col cols="5">
                  <v-list-item-content>
                    <v-list-item-subtitle class="text--primary font-weight-bold" v-text="item.headline"></v-list-item-subtitle>

                    <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
                <v-col cols="1" class="ma-auto">
                  <v-list-item-action>
                    <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                    <v-icon v-if="item.status === 'ok'" color="#007c00">
                      mdi-alarm-check
                    </v-icon>

                    <v-icon v-else-if="item.status === 'atrasado'" color="red darken-1">
                      mdi-alarm-snooze
                    </v-icon>
                    <v-icon v-else color="yellow darken-3">
                      mdi-clock-alert-outline
                    </v-icon>
                  </v-list-item-action>
                </v-col>
                <v-col cols="1" class="ma-auto">
                  <v-icon>
                    mdi-trash-can-outline
                  </v-icon>
                </v-col>
              </v-row>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <div class="text-center">
      <v-pagination v-model="pagina" :length="6" color="indigo darken-4"></v-pagination>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "AgendaLista",
  data() {
    return {
      pagina: 1,
      selected: [2],
      items: [
        {
          action: "HOJE",
          headline: "Reunião com cliente",
          subtitle: `Reunião com o cliente da empresa X que gostaria de um sistema robusto. Para a reunião, verificar o documento enviado pelo solicitante`,
          title: "Rafael Laranjo",
          cliente: "EasyJur",
          status: "ok",
        },
        {
          action: "HOJE",
          headline: "Realizar Testes ",
          subtitle: `Realizar testes na API de distribuição nova para verificar se há erros e bugs presentes`,
          title: "Gabriel, Lucas",
          cliente: "Empresa 1",
          status: "ok",
        },
        {
          action: "HOJE",
          headline: "Executar testes",
          subtitle: "Executar testes para analisar a eficácia do novo método implementado, utilizando o método que a equipe está acostumada",
          title: "José, Rafael",
          cliente: "Empresa 2",
          status: "deadline",
        },
        {
          action: "HOJE",
          headline: "Produzir relatório de testes",
          subtitle: "Detalhar em um relatório completo com detalhes os resultados obtidos. A documentação deve seguir os protocolos",
          title: "Larissa",
          cliente: "Empresa 3",
          status: "atrasado",
        },
        {
          action: "HOJE",
          headline: "Reunião com cliente",
          subtitle: "Reunião com os interessados na avaliação do sistema citado na semana passada",
          title: "Gabriel",
          cliente: "Empresa 4",
          status: "ok",
        },
        {
          action: "HOJE",
          headline: "Reunião com cliente",
          subtitle: "Reunião com os interessados na avaliação do sistema citado na semana passada",
          title: "Gabriel",
          cliente: "EasyJur",
          status: "ok",
        },
        {
          action: "HOJE",
          headline: "Reunião com cliente",
          subtitle: "Reunião com os interessados na avaliação do sistema citado na semana passada",
          title: "Gabriel",
          cliente: "EasyJur",
          status: "ok",
        },
        {
          action: "HOJE",
          headline: "Reunião com cliente",
          subtitle: "Reunião com os interessados na avaliação do sistema citado na semana passada",
          title: "Gabriel",
          cliente: "EasyJur",
          status: "deadline",
        },
      ],
    };
  },
};
</script>

<style></style>
