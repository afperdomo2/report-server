import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import type { TDocumentDefinitions } from 'pdfmake/interfaces';

import { PrismaService } from 'src/services/prisma.service';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

@Injectable()
export class BasicReportsService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.employee.findMany();
  }

  helloWorld() {
    const printer = new PdfPrinter(fonts);
    const docDefinition: TDocumentDefinitions = {
      content: 'Hello world!',
    };
    return printer.createPdfKitDocument(docDefinition);
  }
}
