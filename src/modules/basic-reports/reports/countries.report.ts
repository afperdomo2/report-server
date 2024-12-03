import { Country } from '@prisma/client';
import { TDocumentDefinitions } from 'pdfmake/interfaces';

import { PAGE_MARGINS } from 'src/constants';
import { headerSection } from './sections/header.section';

export const getCountriesReport = (countries: Country[]) => {
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
          widths: [50, 50, 50, '*', '*', '*'],
          body: [
            ['ID', 'ISO2', 'ISO3', 'Country', 'Continent', 'Local Name'],
            ...countries.map((country) => [
              country.id.toString(),
              country.iso2,
              country.iso3,
              { text: country.name, bold: true },
              country.continent,
              country.localName,
            ]),
          ],
        },
      },
    ],
  };
  return docDefinition;
};
