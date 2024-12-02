import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { PAGE_MARGINS } from 'src/constants';
import { headerSection } from './sections/header.section';

export const getCountriesReport = () => {
  const docDefinition: TDocumentDefinitions = {
    header: headerSection({
      title: 'Countries Report',
      subTitle: 'List of countries',
    }),
    pageOrientation: 'landscape',
    pageMargins: PAGE_MARGINS,
    content: [
      {
        layout: 'lightHorizontalLines',
        table: {
          headerRows: 1,
          widths: ['*', 'auto', 100, '*'],
          body: [
            ['Country', 'Capital', 'Population', 'Area (km²)'],
            ['Argentina', 'Buenos Aires', 44938712, 2780400],
            ['Bolivia', 'Sucre', 11673021, 1098581],
            ['Brazil', 'Brasília', 206135893, 8515767],
            ['Chile', 'Santiago', 18191900, 756102],
            ['Colombia', 'Bogotá', 48759958, 1141748],
            ['Ecuador', 'Quito', 16624858, 276841],
            ['Guyana', 'Georgetown', 746900, 214969],
            ['Paraguay', 'Asunción', 6854536, 406752],
            ['Peru', 'Lima', 32165485, 1285216],
            ['Suriname', 'Paramaribo', 541638, 163820],
            ['Uruguay', 'Montevideo', 3480222, 176215],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
            ['Venezuela', 'Caracas', 31028700, 916445],
          ],
        },
      },
    ],
  };
  return docDefinition;
};
