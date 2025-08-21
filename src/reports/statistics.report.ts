import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { DonutOptions, getDonutChart } from './charts/donut.chart';
import { headerSection } from './sections';
import { PAGE_MARGINS } from 'src/constants';

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
  const donutOptions: DonutOptions = { position: 'left', entries };
  const donutChart = await getDonutChart(donutOptions);
  const docDefinition: TDocumentDefinitions = {
    pageMargins: PAGE_MARGINS,
    header: headerSection({
      title: options.title ?? 'Estadísticas de Clientes',
      subTitle: options.subtitle ?? 'Top 10 países con más clientes',
    }),
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: 'Top 10 países con más clientes',
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              { image: donutChart, width: 360 },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['País', 'Clientes'],
                ...options.topCountries.map((c) => [c.country, c.customers]),
              ],
            },
          },
        ],
      },
    ],
  };
  return docDefinition;
};
