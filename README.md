# API Report server

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

API para generar distintos tipos de reportes, creados con [Nest](https://github.com/nestjs/nest).

## Instalación

```bash
npm install
```

Librerías:

- [pdfmake](https://pdfmake.github.io/docs/0.1/)

## 🚀 Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 📗 Swagger

Documentación de los endpoints: <http://localhost:3000/api/docs>

## 🐳 Docker

Actualmente solo crea un servicio de **PostgreSQL**

```sh
# Crear y ejecutar los contenedores en segundo plano
docker-compose up -d
```

## 💾 Bases de datos

### Servidor de Prima

```sh
# Instalar Prisma ORM en el proyecto
npx prisma init

# Construye el schema de prisma (opcional). Solo se usa si se han creado tablas por script, sin migración
npx prisma db pull

# Genera el cliente de Prisma
npx prisma generate
```

### Migraciones

```sh
# Migraciones - Generar una nueva migración
npx prisma migrate dev --name MigrationName

# Migraciones - Ejecutar las migraciones y crear la base de datos
npx prisma migrate dev
```

Los siguientes queries permiten agregar datos a las tablas creadas por migraciones:

- `/sql/01-employees.sql`
- `/sql/02-countries.sql`
- `/sql/03-master-detail.sql`

## 🔎 Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
