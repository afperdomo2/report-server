import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name?: string;
}

export const getHelloWorldReport = (options: ReportOptions) => {
  const { name } = options;
  const docDefinition: TDocumentDefinitions = {
    content: [
      { text: 'Hello World', style: 'header' },
      { text: `My name is ${name}` },
    ],
  };
  return docDefinition;
};
