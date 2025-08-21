import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PAGE_MARGINS } from 'src/constants';
import { DonutOptions, getDonutChart } from './charts/donut.chart';
import { getLineChart } from './charts/line.chart';
import { headerSection } from './sections';
import { getBarChart } from './charts/bar.chart';

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

  const [donutChart, lineChart, barChart1, barChart2] = await Promise.all([
    getDonutChart(donutOptions),
    getLineChart(),
    getBarChart(),
    getBarChart(),
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
        width: 480,
        height: 230,
        alignment: 'center',
        margin: [0, 20, 0, 0],
      },
      {
        margin: [0, 20, 0, 0],
        columnGap: 10,
        columns: [
          {
            image: barChart1,
            width: 250,
            height: 170,
            alignment: 'center',
          },
          {
            image: barChart2,
            width: 250,
            height: 170,
            alignment: 'center',
          },
        ],
      },
    ],
  };
  return docDefinition;
};
