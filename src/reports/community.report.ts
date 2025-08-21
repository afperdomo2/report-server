import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = () => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      {
        // Header
        columns: [
          {
            image: 'src/assets/tucan-code-logo.png',
            width: 50,
          },
          {
            alignment: 'center',
            text: 'FORESTAL SANTA ROSA SAP\nLA MONTAÑA 627. KM 161/2. LAMPA\nTELÉFONO: +56 2 2496700',
          },
          {
            alignment: 'right',
            width: 140,
            layout: 'borderBlue',
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['N° Fac:', '123-456'],
                        ['Fecha:', '2025-12-24'],
                        ['Versión:', '2025-001'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },

      // Línea horizontal
      {
        margin: [0, 10],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3A4546',
          },
        ],
      },
    ],
  };
  return docDefinition;
};
