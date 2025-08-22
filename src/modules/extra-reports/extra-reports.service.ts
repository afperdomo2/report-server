import fs from 'fs';

import { Injectable } from '@nestjs/common';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { PAGE_MARGINS } from 'src/constants';
import { footerSection, getCommunityReport, headerSection } from 'src/reports';
import { PrinterService } from 'src/shared/printer/printer.service';
import { getHtmlContent } from 'src/utils';

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

  generateCommunityReport() {
    const docDefinition = getCommunityReport();
    return this.printerService.createPdf(docDefinition);
  }

  generateCustomSizeReport() {
    return this.printerService.createPdf({
      // pageSize: 'TABLOID',
      pageSize: {
        width: 200,
        height: 300,
      },
      pageMargins: PAGE_MARGINS,
      content: [
        {
          text: 'Custom Size Report',
          style: 'header',
        },
        {
          margin: [0, 20],
          qr: 'https://example.com/custom-size-report',
          fit: 100,
          alignment: 'center',
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, enim erat facilisis erat, eu tincidunt urna magna nec enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec facilisis enim erat nec enim. Etiam euismod, nunc ut laoreet dictum, enim erat facilisis erat, eu tincidunt urna magna nec enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec facilisis enim erat nec enim.`,
        },
        {
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, enim erat facilisis erat, eu tincidunt urna magna nec enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec facilisis enim erat nec enim. Etiam euismod, nunc ut laoreet dictum, enim erat facilisis erat, eu tincidunt urna magna nec enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer euismod, nisi eu consectetur cursus, nisl erat dictum enim, nec facilisis enim erat nec enim.`,
        },
      ],
    });
  }
}
