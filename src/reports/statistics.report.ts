import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PAGE_MARGINS } from 'src/constants';
import { DonutOptions, getDonutChart } from './charts/donut.chart';
import { getLineChart } from './charts/line.chart';
import { headerSection } from './sections';

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
  const donutOptions: DonutOptions = {
    position: 'left',
    entries: options.topCountries.map((c) => ({
      label: c.country,
      value: c.customers,
    })),
  };

  const [donutChart, lineChart] = await Promise.all([
    getDonutChart(donutOptions),
    getLineChart(),
  ]);

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
      {
        image: lineChart,
        width: 450,
        height: 200,
        alignment: 'center',
        margin: [0, 20, 0, 0],
      },
    ],
  };
  return docDefinition;
};
