import htmlToPdfMake from 'html-to-pdfmake';
import { JSDOM } from 'jsdom';

export const getHtmlContent = (html: string) => {
  const { window } = new JSDOM(html);
  return htmlToPdfMake(html, { window });
};
