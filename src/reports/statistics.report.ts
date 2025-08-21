import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getDonutChart } from './charts/donut.chart';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subtitle?: string;
  topCountries: TopCountry[];
}

export const getStatisticsReport = async (options: ReportOptions) => {
  const entries = options.topCountries.map((country) => ({
    label: country.country,
    value: country.customers,
  }));
  const donutOptions = { entries, title: 'Top Countries' };
  const donutChart = await getDonutChart(donutOptions);
  const docDefinition: TDocumentDefinitions = {
    content: [{ image: donutChart, width: 500 }],
  };
  return docDefinition;
};
