import htmlToPdfMake from 'html-to-pdfmake';
import { JSDOM } from 'jsdom';

interface ContentReplacerMap {
  [key: string]: string;
}

export const getHtmlContent = (
  html: string,
  replacers: ContentReplacerMap = {},
) => {
  Object.entries(replacers).forEach(([key, value]) => {
    html = html
      .replaceAll(`{{ ${key} }}`, value)
      .replaceAll(`{{${key}}}`, value);
  });
  const { window } = new JSDOM(html);
  return htmlToPdfMake(html, { window });
};
