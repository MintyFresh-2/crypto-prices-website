const config = {
  type: "scatter",
  options: {
    responsive: false,
    showLine: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      xAxes: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
      yAxes: {
        ticks: {
          font: {
            family: "monospace",
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
      line: {
        borderWidth: 1,
      },
    },
  },
};
