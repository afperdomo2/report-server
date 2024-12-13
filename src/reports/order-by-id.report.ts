import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { MARGIN_X, PAGE_MARGINS } from 'src/constants';
import { footerSection } from './sections';

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 150,
  height: 50,
  margin: [MARGIN_X - 5, 30],
};

const styles: StyleDictionary = {
  header: { fontSize: 20, bold: true, margin: [0, 0, 0, 15] },
};

export const orderByIdReport = (): TDocumentDefinitions => {
  return {
    styles,
    header: logo,
    footer: footerSection,
    pageMargins: PAGE_MARGINS,
    content: [
      { text: 'Tucan Code', style: 'header' },
      {
        columns: [
          {
            text: [
              'Address: 1234 Elm Street\n',
              'Springfield, IL 62704, USA\n',
              'Phone:  217-555-5555',
            ],
          },
          {
            text: [
              { text: 'Order N° 1234\n', bold: true },
              'Date: 2021-09-01\n',
              'Expected Delivery: 2021-09-01',
            ],
            alignment: 'right',
          },
        ],
      },
      {
        qr: 'https://tucancode.com',
        fit: 80,
        alignment: 'right',
        margin: [0, 10],
      },
      {
        text: [
          { text: 'Bill to:\n', bold: true },
          'Company name: Flamenco S.A.\n',
          'Address: 678 Elm Street, pringfield, IL 62705, USA\n',
          'Phone: 217-555-6666',
        ],
      },
    ],
  };
};
