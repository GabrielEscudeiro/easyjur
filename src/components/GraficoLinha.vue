<template>
  <div>
    <h3 class="mb-3">{{ dados.nome }}</h3>
    <v-card class="background d-flex flex-row " min-width="290">
      <canvas class="pa-auto" :id="dados.id" width="300" height="150">O browser não oferece suporte para Canvas, necessário para exibir o gráfico</canvas>
    </v-card>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "GraficoLinha",
  props: ["dados"],
  data() {
    return {
      dadosGrafico: {
        type: "line",
        data: this.dados.data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                font: {
                  family: "'Roboto', 'sans-serif'",
                },
              },
            },
            title: {
              display: false,
              text: this.dados.nome,
            },
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                },
              },
            ],
          },
        },
      },
    };
  },
  methods: {},
  computed: {},
  mounted() {
    const ctxLi = document.getElementById(this.dados.id);
    new Chart(ctxLi, this.dadosGrafico);
  },
};
</script>

<style scoped>
.background {
  background: #ffffff;
  padding: 10px;
  max-width: 100%;
  height: auto;
}
.valor-legenda {
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}
</style>
