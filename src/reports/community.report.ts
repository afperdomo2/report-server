import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = () => {
  const DARK_CELL = { fillColor: '#343a40', color: 'white' };
  const TITLE_CELL = { fillColor: '#5775e1', color: 'white', colSpan: 4 };

  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      {
        // Header
        columns: [
          { image: 'src/assets/tucan-code-logo.png', width: 50 },
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
                        ['N° FAC:', '123-456'],
                        ['FECHA:', '2025-12-24'],
                        ['VERSIÓN:', '2025-001'],
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

      // Detalles
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            // Primera fila
            [{ text: 'DATOS DEL CLIENTE', ...TITLE_CELL }, {}, {}, {}],
            [
              { text: 'RAZÓN SOCIAL', ...DARK_CELL },
              { text: 'FAKE S.A.' },
              { text: 'DIRECCIÓN', ...DARK_CELL },
              { text: 'CALLE FALSA 123', fillColor: 'white' },
            ],
            [
              { text: 'RUT', ...DARK_CELL },
              { text: '12345678-9' },
              { text: 'TELÉFONO', ...DARK_CELL },
              { text: '+57 2 2496700', fillColor: 'white' },
            ],
            [
              { text: 'GIRO', ...DARK_CELL },
              { text: '$ 1,000,000' },
              { text: 'CONDICIÓN DE PAGO', ...DARK_CELL },
              { text: 'CONTADO', fillColor: 'white' },
            ],
            [{ text: 'PROYECTO', ...TITLE_CELL }, {}, {}, {}],
            [
              { text: 'NOMBRE', ...DARK_CELL },
              { text: 'PROYECTO XYZ' },
              { text: 'CONTACTO', ...DARK_CELL },
              { text: 'JUAN PÉREZ', fillColor: 'white' },
            ],
            [
              { text: 'DIRECCIÓN', ...DARK_CELL },
              { text: 'CALLE FALSA 123', fillColor: 'white' },
              { text: 'EMAIL', ...DARK_CELL },
              { text: 'JUAN.PEREZ@EXAMPLE.COM', fillColor: 'white' },
            ],
            [
              { text: 'CIUDAD', ...DARK_CELL },
              { text: 'SANTIAGO' },
              { text: 'TELÉFONO', ...DARK_CELL },
              { text: '+57 2 2496700', fillColor: 'white' },
            ],
            [{ text: 'VENDEDOR', ...TITLE_CELL }, {}, {}, {}],
            [
              { text: 'VENDEDOR', ...DARK_CELL },
              { text: 'PEPITO PÉREZ' },
              { text: 'EMAIL', ...DARK_CELL },
              { text: 'pruebas@example.com', fillColor: 'white' },
            ],
            [
              { text: 'TELÉFONO', ...DARK_CELL },
              { text: '+57 2 2496700', fillColor: 'white' },
              { text: '', ...DARK_CELL },
              { text: '', fillColor: 'white' },
            ],
          ],
        },
      },
    ],
  };
  return docDefinition;
};
