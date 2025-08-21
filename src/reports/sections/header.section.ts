import { Content } from 'pdfmake/interfaces';

import { CURRENT_DAY, LOGO } from 'src/constants';

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showLogo = true, showDate = true } = options;

  const titleText: Content = {
    text: title,
    alignment: 'center',
    margin: [0, 20, 0, 0],
    style: { fontSize: 24, bold: true },
  };

  const subTitleText: Content = subTitle
    ? { text: subTitle, alignment: 'center', style: { fontSize: 16 } }
    : null;

  const headerTitle: Content = title
    ? { stack: [titleText, subTitleText] }
    : null;
  const headerLogo: Content = showLogo ? LOGO : null;
  const headerDate: Content = showDate ? CURRENT_DAY : null;

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
