import * as Utils from 'src/utils';

export interface DonutEntry {
  label: string;
  value: number;
}

export interface DonutOptions {
  entries: DonutEntry[];
  position?: 'left' | 'right' | 'top' | 'bottom';
  title?: string;
}

export const getDonutChart = async (options: DonutOptions) => {
  const { entries, position = 'top', title } = options;

  const data = {
    labels: entries.map((e) => e.label),
    datasets: [
      {
        label: 'Dataset 1',
        data: entries.map((e) => e.value),
        backgroundColor: Object.values(Utils.CHART_COLORS),
        borderWidth: 1,
      },
    ],
  };

  const config = {
    type: 'doughnut',
    data,
    options: {
      legend: { position },
      title: title ? { display: true, text: title } : { display: false },
      plugins: {
        datalabels: { color: 'white', font: { weight: 'bold', size: 14 } },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
