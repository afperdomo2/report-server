import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

const style: StyleDictionary = {
  title: {
    fontSize: 18,
    bold: true,
    alignment: 'center',
    margin: [0, 60, 0, 30],
  },
  body: {
    fontSize: 12,
    alignment: 'justify',
    margin: [0, 0, 0, 70],
  },
  signature: {
    fontSize: 12,
    bold: true,
  },
};

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 90,
  height: 90,
  alignment: 'right',
};

export const getEmploymentLetterReport = () => {
  const docDefinition: TDocumentDefinitions = {
    styles: style,
    pageMargins: [40, 50, 40, 50],
    header: {
      columns: [
        logo,
        { text: `${new Date()}`, alignment: 'right', margin: [0, 20, 20, 0] },
      ],
    },
    content: [
      { text: 'CONSTANCIA DE EMPLEO', style: 'title' },
      {
        text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa], por medio de la presente certifico que [Nombre del Empleado] ha sido empleado en nuestra empresa desde el [Fecha de Inicio del Empleado].\n
        Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n
        La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y procedimientos establecidos por la empresa.\n
        Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.\n\n`,
        style: 'body',
      },
      { text: 'Atentamente,', style: 'signature' },
      { text: '[Nombre del Empleador]', style: 'signature' },
      { text: '[Cargo del Empleador]', style: 'signature' },
      { text: '[Fecha de Emisión]', style: 'signature' },
    ],
    footer: {
      text: 'Este documento es una constancia de empleo y no representa un compromiso laboral.',
      fontSize: 10,
      alignment: 'center',
      margin: [0, 25, 0, 0],
    },
  };
  return docDefinition;
};
