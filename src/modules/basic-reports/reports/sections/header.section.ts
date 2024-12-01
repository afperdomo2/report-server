import moment from 'moment';
import { Content } from 'pdfmake/interfaces';

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 90,
  height: 90,
  alignment: 'right',
};

export const headerSection = (options: HeaderOptions): Content => {
  const { title, showLogo = true, showDate = true } = options;
  const headerTitle: Content = title ? { text: title } : null;
  const headerLogo: Content = showLogo ? logo : null;
  const headerDate: Content = showDate
    ? {
        text: `${moment().format('DD MMMM YYYY')}`,
        alignment: 'right',
        margin: [0, 20, 50, 0],
      }
    : null;
  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
