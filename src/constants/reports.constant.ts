import moment from 'moment';
import { Content, Margins } from 'pdfmake/interfaces';

export const MARGIN_X = 40;
export const PAGE_MARGINS: Margins = [MARGIN_X, 110, MARGIN_X, 50];
export const LOGO: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 90,
  height: 90,
  margin: [MARGIN_X - 10, 5, 0, 0],
};
export const CURRENT_DAY: Content = {
  text: `${moment().format('DD MMMM YYYY')}`,
  alignment: 'right',
  margin: [0, 25, MARGIN_X, 0],
  width: 150,
};
