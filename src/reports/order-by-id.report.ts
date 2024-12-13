import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { MARGIN_X, PAGE_MARGINS } from 'src/constants';

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
    pageMargins: PAGE_MARGINS,
    content: [
      { text: 'Tucan Code', style: 'header' },
      {
        columns: [
          { text: 'Address: 1234 Elm Street' },
          { text: 'Order N°: 1234', alignment: 'right' },
        ],
      },
      {
        columns: [
          { text: 'Springfield, IL 62704, USA' },
          { text: 'Date: 2021-09-01', alignment: 'right' },
        ],
      },
      {
        columns: [
          { text: 'Phone:  217-555-5555' },
          { text: 'Expected Delivery: 2021-09-01', alignment: 'right' },
        ],
      },
    ],
  };
};
