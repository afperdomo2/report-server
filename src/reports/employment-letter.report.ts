import { Employee } from '@prisma/client';
import moment from 'moment';
import { StyleDictionary, TDocumentDefinitions } from 'pdfmake/interfaces';

import { PAGE_MARGINS } from 'src/constants';
import { headerSection } from './sections/header.section';

export interface EmployeementLetterData {
  employeer: {
    name: string;
    position: string;
    company: string;
  };
  employee: Employee;
}

const style: StyleDictionary = {
  title: {
    fontSize: 18,
    bold: true,
    alignment: 'center',
    margin: [0, 0, 0, 30],
  },
  body: { fontSize: 12, alignment: 'justify', margin: [0, 0, 0, 70] },
  signature: { fontSize: 12, bold: true },
};

export const getEmploymentLetterReport = (values: EmployeementLetterData) => {
  const { employee, employeer } = values;
  const {
    name: employeerName,
    position: employeerPosition,
    company,
  } = employeer;
  const { name, position, startDate, hoursPerDay, workSchedule } = employee;
  const formattedStartDate = moment(startDate).format('DD-MM-YYYY');
  const emisionDate = moment().format('DD-MM-YYYY');
  const docDefinition: TDocumentDefinitions = {
    styles: style,
    header: headerSection({}),
    pageMargins: PAGE_MARGINS,
    content: [
      { text: 'CONSTANCIA DE EMPLEO', style: 'title' },
      {
        text: `Yo, ${employeerName}, en mi calidad de ${employeerPosition} de ${company}, por medio de la presente certifico que ${name} ha sido empleado en nuestra empresa desde el ${formattedStartDate}.\n\nDurante su empleo, el Sr./Sra. ${name} ha desempeñado el cargo de ${position}, demostrando responsabilidad, compromiso y habilidades profesionales en sus labores.\n\nLa jornada laboral del Sr./ Sra. ${name} es de ${hoursPerDay} horas semanales, con un horario de ${workSchedule}, cumpliendo con las políticas y procedimientos establecidos por la empresa.\n\nEsta constancia se expide a solicitud del interesado para los fines que considere conveniente.\n\n`,
        style: 'body',
      },
      { text: 'Atentamente,', style: 'signature' },
      { text: employeerName, style: 'signature' },
      { text: employeerPosition, style: 'signature' },
      { text: emisionDate, style: 'signature' },
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
