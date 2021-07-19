export const dadosGrafico = {
  type: "doughnut",
  data: {
    labels: ["Briefing", "Proposta", "Fechado"],
    datasets: [
      {
        label: "Dataset 1",
        data: [60000, 30000, 10000],
        backgroundColor: ["#36a2eb", "#ffcd56", "#ff6384"],
      },
    ],
  },
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
        text: "NOVOS NEGÓCIOS(LCRM)",
      },
    },
  },
};

export default dadosGrafico;
