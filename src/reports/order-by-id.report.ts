import moment from 'moment';
import {
  Content,
  StyleDictionary,
  TDocumentDefinitions,
} from 'pdfmake/interfaces';
import { MARGIN_X, PAGE_MARGINS } from 'src/constants';
import { CurrencyFormatter } from 'src/utils';
import { footerSection } from './sections';

export interface CompleteOrder {
  orderId: number;
  customerId: number;
  orderDate: Date;
  customer: Customer;
  orderDetails: OrderDetail[];
}

export interface Customer {
  customerId: number;
  customerName: string;
  contactName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface OrderDetail {
  orderDetailId: number;
  orderId: number;
  productId: number;
  quantity: number;
  product: Product;
}

export interface Product {
  productId: number;
  productName: string;
  categoryId: number;
  unit: string;
  price: string;
}

export interface ReportValues {
  title?: string;
  subtitle?: string;
  order: CompleteOrder;
}

const logo: Content = {
  image: 'src/assets/tucan-banner.png',
  width: 150,
  height: 50,
  margin: [MARGIN_X - 5, 30],
};

const styles: StyleDictionary = {
  header: { fontSize: 20, bold: true, margin: [0, 0, 0, 15] },
};

export const orderByIdReport = (value: ReportValues): TDocumentDefinitions => {
  const { order } = value;
  const { customer, orderDetails } = order;
  const subTotal = orderDetails.reduce(
    (acc, detail) => acc + +detail.product.price * detail.quantity,
    0,
  );
  const tax = subTotal * 0.1;
  const total = subTotal + tax;

  return {
    styles,
    header: logo,
    footer: footerSection,
    pageMargins: PAGE_MARGINS,
    content: [
      { text: 'Tucan Code', style: 'header' },
      {
        columns: [
          {
            text: [
              'Address: 1234 Elm Street\n',
              'Springfield, IL 62704, USA\n',
              'Phone:  217-555-5555',
            ],
          },
          {
            text: [
              { text: `Order N° ${order.orderId}\n`, bold: true },
              `Date: ${moment(order.orderDate).format('DD-MM-YYYY')}\n`,
              `Expiration date: ${moment(order.orderDate).format('DD-MM-YYYY')}`,
            ],
            alignment: 'right',
          },
        ],
      },
      {
        qr: 'https://tucancode.com',
        fit: 80,
        alignment: 'right',
        margin: [0, 10],
      },
      {
        text: [
          { text: 'Bill to:\n', bold: true },
          `Company: ${customer.contactName}\n`,
          `Contact name: ${customer.customerName}\n`,
          `Address: ${customer.address}, ${customer.city}-${customer.country}\n`,
          'Phone: 217-555-6666',
        ],
      },
      {
        layout: 'headerLineOnly',
        margin: [0, 20],
        table: {
          headerRows: 1,
          widths: [50, '*', 'auto', 'auto', 'auto'],
          body: [
            ['ID', 'Description', 'Quantity', 'Price', 'Total'],
            ...orderDetails.map((detail) => [
              detail.productId.toString(),
              detail.product.productName,
              { text: detail.quantity.toString(), alignment: 'right' },
              {
                text: CurrencyFormatter.format(+detail.product.price),
                alignment: 'right',
              },
              {
                text: CurrencyFormatter.format(
                  +detail.product.price * detail.quantity,
                ),
                alignment: 'right',
              },
            ]),
            ['', '', '', '', ''],
            [
              '',
              '',
              '',
              { text: 'Subtotal:', bold: true, alignment: 'right' },
              { text: CurrencyFormatter.format(subTotal), alignment: 'right' },
            ],
            [
              '',
              '',
              '',
              { text: 'Tax (10%):', bold: true, alignment: 'right' },
              { text: CurrencyFormatter.format(tax), alignment: 'right' },
            ],
            [
              '',
              '',
              '',
              { text: 'Total:', bold: true, alignment: 'right' },
              {
                text: CurrencyFormatter.format(total),
                bold: true,
                alignment: 'right',
              },
            ],
          ],
        },
      },
    ],
  };
};
