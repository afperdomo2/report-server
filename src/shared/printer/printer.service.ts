import { Injectable } from '@nestjs/common';
import PdfPrinter from 'pdfmake';
import {
  BufferOptions,
  CustomTableLayout,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';

const fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf',
  },
};

const customTableLayout: Record<string, CustomTableLayout> = {
  blueTable: {
    hLineWidth(i, node) {
      if (i === 0 || i === node.table.body.length) {
        return 0;
      }
      return i === node.table.headerRows ? 2 : 1;
    },
    vLineWidth() {
      return 0;
    },
    hLineColor(i) {
      return i === 1 ? 'black' : '#bbbbbb';
    },
    paddingLeft(i) {
      return i === 0 ? 0 : 8;
    },
    paddingRight(i, node) {
      return i === node.table.widths.length - 1 ? 0 : 8;
    },
    fillColor(i, node) {
      if (i === 0) {
        return '#8bbdff';
      }
      if (i === node.table.body.length - 1) {
        return '#e299ff';
      }
      return i % 2 === 0 ? '#f6f5f5' : null;
    },
  },
};

@Injectable()
export class PrinterService {
  private printer = new PdfPrinter(fonts);

  createPdf(
    docDefinition: TDocumentDefinitions,
    options: BufferOptions = { tableLayouts: customTableLayout },
  ) {
    return this.printer.createPdfKitDocument(docDefinition, options);
  }
}
