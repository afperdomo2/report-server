import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PAGE_MARGINS } from 'src/constants';
import { headerSection } from 'src/reports';
import { PrinterService } from 'src/shared/printer/printer.service';
import { getHtmlContent } from 'src/utils/html-to-pdfmake.util';

@Injectable()
export class ExtraReportsService {
  constructor(private readonly printerService: PrinterService) {}

  generateHtmlReport() {
    const htmlReport = fs.readFileSync(
      'src/reports/html/basic-01.html',
      'utf-8',
    );
    const content = getHtmlContent(htmlReport);
    const docDefinition: TDocumentDefinitions = {
      pageMargins: PAGE_MARGINS,
      header: headerSection({
        title: 'HTML to PDFMake',
        subTitle: 'Generación de reportes desde HTML',
      }),
      content,
    };
    return this.printerService.createPdf(docDefinition);
  }
}
