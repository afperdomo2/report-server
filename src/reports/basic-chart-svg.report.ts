import { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as Utils from 'src/utils';

import fs from 'fs';

const svgContent = fs.readFileSync('src/assets/ford.svg', 'utf8');

const generateChartImage = async () => {
  const config = {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [
        {
          label: 'Ventas',
          data: [65, 59, 80, 81, 56, 55],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    },
  };
  return await Utils.chartJsToImage(config);
};

const generateDounutChartImage = async () => {
  const DATA_COUNT = 5;
  const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };
  const data = {
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.numbers(NUMBER_CFG),
        backgroundColor: Object.values(Utils.CHART_COLORS),
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data,
    options: {
      title: { display: true, text: 'Chart.js Doughnut Chart' },
      plugins: { legend: { position: 'top' } },
    },
  };
  return await Utils.chartJsToImage(config);
};

export const getBasicChartSvgReport =
  async (): Promise<TDocumentDefinitions> => {
    const [chartImage, chartDonut] = await Promise.all([
      generateChartImage(),
      generateDounutChartImage(),
    ]);
    return {
      content: [
        {
          svg: svgContent,
          width: 100,
          fit: [100, 100],
        },
        {
          image: chartImage,
          width: 500,
        },
        {
          image: chartDonut,
          width: 500,
        },
      ],
    };
  };
