<template>
  <div>
    <h3 class="mb-3">{{ dados.nome }}</h3>
    <v-card class="background ">
      <canvas class="ma-auto" :id="dados.id" width="250" height="190">O browser não oferece suporte para Canvas, necessário para exibir o gráfico</canvas>
    </v-card>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "GraficoDonut",
  data() {
    return {
      dadosGrafico: {
        type: "doughnut",
        data: this.dados.data,
        options: {
          responsive: false,
          plugins: {
            legend: {
              display: true,
              position: "right",
              labels: {
                usePointStyle: true,
                boxWidth: 7,
              },
            },
            title: {
              display: false,
              text: this.dados.nome,
            },
          },
        },
      },
    };
  },
  props: ["dados"],
  methods: {},
  computed: {},
  mounted() {
    const ctx = document.getElementById(this.dados.id);
    new Chart(ctx, this.dadosGrafico);
  },
};
</script>

<style scoped>
.background {
  background: #ffffff;
  padding: 10px;
  max-width: 100%;
  min-width: 290px;
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
