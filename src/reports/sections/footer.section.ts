import { Content } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
): Content => ({
  text: `Page ${currentPage.toString()} of ${pageCount}`,
  alignment: 'center',
  fontSize: 10,
  margin: [0, 25, 0, 0],
});
