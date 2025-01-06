import { TDocumentDefinitions } from 'pdfmake/interfaces';
import * as Utils from 'src/utils';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subtitle?: string;
  topCountries: TopCountry[];
}

const generateTopCountriesDonut = (countries: TopCountry[]) => {
  const data = {
    labels: countries.map((country) => country.country),
    datasets: [
      {
        label: 'Dataset 1',
        data: countries.map((country) => country.customers),
        backgroundColor: Object.values(Utils.CHART_COLORS),
        borderWidth: 1,
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data,
    options: {
      legend: { position: 'left' },
      title: { display: true, text: 'Top Countries' },
      plugins: {
        datalabels: { color: 'white', font: { weigth: 'bold', size: 14 } },
      },
    },
  };
  return Utils.chartJsToImage(config);
};

export const getStatisticsReport = async (options: ReportOptions) => {
  const donutChart = await generateTopCountriesDonut(options.topCountries);
  const docDefinition: TDocumentDefinitions = {
    content: [{ image: donutChart, width: 500 }],
  };
  return docDefinition;
};
