export const dadosGrafico = {
  type: "line",
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
        text: "FATURAMENTO 2021",
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
};

export default dadosGrafico;
