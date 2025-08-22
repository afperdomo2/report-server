# 📊 Report Server API

## 📋 Descripción

API REST desarrollada con **NestJS** para la generación de reportes en PDF con diferentes tipos de contenido: tablas, gráficos, cartas de empleo, estadísticas de tienda y reportes personalizados desde HTML.

<div align="center">
  <img src="assets/images/swagger.png" alt="Documentación Swagger" width="450" style="margin-right: 1%;">
  <img src="assets/images/reporte.png" alt="Ejemplo de reporte PDF generado" width="429" style="margin-right: 1%;">
  <img src="assets/images/estadisticas.png" alt="Ejemplo de reporte de estadísticas" width="429" style="margin-right: 1%;">
</div>

> Ejemplo de reporte PDF generado y documentación Swagger de la API

### ✨ Características principales

- 🔄 Generación dinámica de reportes PDF
- 📈 Integración con gráficos SVG y Chart.js
- 🗄️ Base de datos PostgreSQL con Prisma ORM
- 📖 Documentación automática con Swagger
- 🏗️ Arquitectura modular y escalable
- 🎨 Plantillas HTML personalizables

## 🛠️ Tecnologías

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | [NestJS](https://nestjs.com/) |
| **Base de datos** | PostgreSQL + [Prisma ORM](https://prisma.io/) |
| **PDF Generation** | [PDFMake](https://pdfmake.github.io/docs/0.1/) |
| **Gráficos** | [Chart.js](https://www.chartjs.org/) + [QuickChart](https://quickchart.io/) |
| **Documentación** | [Swagger](https://swagger.io/) |
| **Validación** | class-validator + class-transformer |

## 🧪 Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
```

## 🚀 Iniciar la aplicación

```bash
# Desarrollo
npm run start:dev

# Producción
npm run start:prod
```

La API estará disponible en: **<http://localhost:3000>**

## 📚 Endpoints principales

### 📄 Basic Reports

- `GET /basic-reports/hello-world` - Reporte básico de prueba
- `GET /basic-reports/employment-letter/:employeeId` - Carta de empleo
- `GET /basic-reports/countries` - Reporte de países con filtros

### 🏪 Store Reports

- `GET /store-reports/orders/:orderId` - Reporte de orden por ID
- `GET /store-reports/svgs-charts` - Gráficos SVG
- `GET /store-reports/statistics` - Estadísticas de la tienda

### 🎨 Extra Reports

- `GET /extra-reports/html-report` - Reporte desde HTML
- `GET /extra-reports/community-report` - Reporte de comunidad
- `GET /extra-reports/custom-size` - PDF con tamaño personalizado

## 📗 Documentación

Accede a la documentación interactiva de Swagger en:
**<http://localhost:3000/api/docs>**

## 🐳 Docker & Base de datos

```bash
# Iniciar PostgreSQL con Docker
docker-compose up -d
```

### Configuración de base de datos (Prisma)

```bash
# Generar cliente de Prisma
npx prisma generate

# Ejecutar migraciones
npx prisma migrate dev

# Visualizar datos en Prisma Studio
npx prisma studio
```

## 💿 Datos de ejemplo

Los siguientes archivos SQL contienen datos de ejemplo para las tablas:

- `sql/01-employees.sql` - Datos de empleados
- `sql/02-countries.sql` - Información de países
- `sql/03-master-detail.sql` - Relaciones maestro-detalle (órdenes, productos, etc.)

## 🧪 Testing

```bash
# Tests unitarios
npm run test

# Tests end-to-end
npm run test:e2e

# Cobertura de tests
npm run test:cov
```

## 📁 Estructura del proyecto

```text
src/
├── modules/          # Módulos de la aplicación
│   ├── basic-reports/    # Reportes básicos
│   ├── store-reports/    # Reportes de tienda
│   ├── extra-reports/    # Reportes adicionales
│   ├── employees/        # Gestión de empleados
│   ├── countries/        # Gestión de países
│   └── orders/          # Gestión de órdenes
├── reports/          # Plantillas de reportes
├── shared/           # Servicios compartidos
├── database/         # Configuración de base de datos
└── utils/            # Utilidades y helpers
```

## Características técnicas

- **Validación automática** de datos de entrada
- **Transformación** de DTOs con class-transformer
- **Generación de PDFs** con layouts personalizables
- **Gráficos dinámicos** usando Chart.js y SVG
- **Base de datos relacional** con Prisma ORM
- **Documentación automática** con Swagger/OpenAPI
