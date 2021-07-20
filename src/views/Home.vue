<template>
  <div>
    <v-row>
      <v-col class="md-2">
        <h1 class="titulo">DASHBOARD</h1>
      </v-col>
      <v-spacer class=" md-8"> </v-spacer>
      <v-col class="md-2 .d-md">
        <v-breadcrumbs class="rotas .d-md" :items="items" large></v-breadcrumbs>
      </v-col>
    </v-row>

    <v-row>
      <v-col md="9">
        <v-row class="">
          <v-col cols="12" sm="6" md="4" lg="4">
            <v-card class=" d-flex pa-2 card-tip ">
              <v-progress-circular :value="80" :size="100" :width="10" color="#201899">
                80%
              </v-progress-circular>
              <div class="d-flex-column  texto-tip">
                <p>Disponível em Caixa</p>
                <p class="valor-tip">R$97.500</p>
              </div>
              <v-img class=".d-none .d-sm-flex" max-width="90" min-width="85" src="../assets/icones/cifrao.svg"></v-img>
            </v-card>
          </v-col>

          <v-col cols="12" sm="6" md="4" lg="4">
            <v-card class=" d-flex pa-2 card-tip justify-space-between">
              <v-progress-circular :value="55" :size="100" :width="10" color="#201899">
                55%
              </v-progress-circular>
              <div class="d-flex-column  texto-tip">
                <p>Processos ativos</p>
                <p class="valor-tip">7</p>
              </div>
              <v-img class=".d-none .d-sm-flex" max-width="90" min-width="85" src="../assets/icones/gavel.svg"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="4" lg="4">
            <v-card class=" d-flex pa-2 card-tip">
              <v-progress-circular :value="62" :size="100" :width="10" color="#201899">
                62%
              </v-progress-circular>
              <div class="d-flex-column texto-tip">
                <p>Contratos em vigência</p>
                <p class="valor-tip">652</p>
              </div>
              <v-img class=".d-none .d-sm-flex" max-width="90" min-width="85" src="../assets/icones/contrato.svg"></v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-row class="mt-lg-11">
          <v-col cols="12" sm="" md="4" lg="4" v-for="index in 3" :key="index">
            <GraficoDonut :dados="dadosDonut[index - 1]" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <AgendaHoje />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="6">
        <GraficoLinha :dados="dadosLinha[0]" />
      </v-col>
      <v-col cols="12" md="6">
        <GraficoLinha :dados="dadosLinha[1]" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="" md="4" lg="3" v-for="index in 4" :key="index">
        <GraficoDonut :dados="dadosDonut[index + 2]" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import GraficoDonut from "../components/GraficoDonut.vue";
import GraficoLinha from "../components/GraficoLinha.vue";
import AgendaHoje from "../components/AgendaHoje.vue";
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          text: "EasyJur",
          disabled: true,
          href: "/home",
        },
        {
          text: "Dashboard",
          disabled: false,
          href: "/home",
        },
      ],

      dadosDonut: [
        {
          id: "donut01",
          nome: "NOVOS NEGÓCIOS",
          data: {
            labels: ["Briefing  ", "Proposta  ", "Fechado  "],
            datasets: [
              {
                label: "Dataset 1",
                data: [25000, 12500, 62500],
                backgroundColor: ["#201899", "#fcdc4b", "#d9250e"],
              },
            ],
          },
        },
        {
          id: "donut02",
          nome: "TIMESHEET CLIENTE ",
          data: {
            labels: ["Techno", "JurTechs", "AdvJur"],
            datasets: [
              {
                label: "Dataset 1",
                data: [35000, 23250, 41750],
                backgroundColor: ["#201899", "#fcdc4b", "#d9250e"],
              },
            ],
          },
        },
        {
          id: "donut03",
          nome: "DESPESAS CLIENTE",
          data: {
            labels: ["Techno", "TechsJur", "JurAdv"],
            datasets: [
              {
                label: "Dataset 1",
                data: [10000, 3000, 4500],
                backgroundColor: ["#201899", "#fcdc4b", "#d9250e"],
              },
            ],
          },
        },
        {
          id: "donut04",
          nome: "PERFORMANCE EVENTOS",
          data: {
            labels: ["Concluído", "Atrasado", "Outro"],
            datasets: [
              {
                label: "Dataset 1",
                data: [5400, 2100, 900],
                backgroundColor: ["#201899", "#fcdc4b", "#d9250e"],
              },
            ],
          },
        },
        {
          id: "donut05",
          nome: "CONTRATOS POR STATUS",
          data: {
            labels: ["Vigente", "Encerrado", "Outro"],
            datasets: [
              {
                label: "Dataset 1",
                data: [450, 230, 70],
                backgroundColor: ["#201899", "#fcdc4b", "#d9250e"],
              },
            ],
          },
        },
        {
          id: "donut06",
          nome: "FATURAMENTO AREA",
          data: {
            labels: ["Comercial", "Empresarial"],
            datasets: [
              {
                label: "Dataset 1",
                data: [70000, 30000],
                backgroundColor: ["#201899", "#d9250e"],
              },
            ],
          },
        },
        {
          id: "donut07",
          nome: "PESSOAS TIPO",
          data: {
            labels: ["Pessoa 1", "Pessoa 2", "Pessoa 3"],
            datasets: [
              {
                label: "Dataset 1",
                data: [10000, 3000, 4500],
                backgroundColor: ["#201899", "#fcdc4b", "#d9250e"],
              },
            ],
          },
        },
      ],
      dadosLinha: [
        {
          id: "linha01",
          nome: "FATURAMENTO 2021",
          data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
              {
                label: "Receitas",
                data: [0, 100000, 150000, 120000, 126000, 160000, 115000, 170000, 120000, 135000, 185500, 140000],
                borderColor: "rgb(43,33,200)",
                backgroundColor: "rgb(43,33,200)",
                tension: 0.2,
              },
              {
                label: "Despesas",
                data: [0, 15000, 10000, 12000, 20000, 14500, 26000, 52000, 57000, 34000, 29000, 34000],
                borderColor: "rgb(191, 13, 0)",
                backgroundColor: "rgb(191, 13, 0)",
                tension: 0.2,
              },
            ],
          },
        },
        {
          id: "linha02",
          nome: "FLUXO DE CAIXA",
          data: {
            labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
            datasets: [
              {
                label: "Receitas",
                data: [0, 100000, 150000, 172000, 220000, 190000, 260000, 280000, 322000, 245000, 232000, 250000],
                borderColor: "rgb(43,33,200)",
                backgroundColor: "rgb(43,33,200)",
                tension: 0.2,
              },
              {
                label: "Despesas",
                data: [0, 20000, 35000, 40000, 45000, 30000, 26000, 52000, 57000, 43000, 29000, 34000],
                borderColor: "rgb(191, 13, 0)",
                backgroundColor: "rgb(191, 13, 0)",
                tension: 0.2,
              },
            ],
          },
        },
      ],
    };
  },
  methods: {},
  components: {
    GraficoDonut,
    GraficoLinha,
    AgendaHoje,
  },
};
</script>
<style scoped>
.titulo {
  color: #151245;
  font-size: 1.6rem;
}
.titulo-agenda {
  font-size: 14px;
}

.texto-tip {
  line-height: 15px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  color: #151245;
  justify-content: space-between;
}
.card-tip {
  justify-content: space-between;
}
.valor-tip {
  font-size: 1.3rem;
}
</style>
