import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PAGE_MARGINS } from 'src/constants';
import { footerSection, headerSection } from 'src/reports';
import { PrinterService } from 'src/shared/printer/printer.service';
import { getHtmlContent } from 'src/utils/html-to-pdfmake.util';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  generateHtmlReport() {
    const htmlReport = fs.readFileSync(
      'src/reports/html/basic-03.html',
      'utf-8',
    );
    const content = getHtmlContent(htmlReport, { client: 'Acme Corp' });
    const docDefinition: TDocumentDefinitions = {
      pageMargins: PAGE_MARGINS,
      header: headerSection({
        title: 'HTML to PDFMake',
        subTitle: 'Generación de reportes desde HTML',
      }),
      footer: footerSection,
      content: ['Hola mundo', content],
    };
    return this.printerService.createPdf(docDefinition);
  }
}
