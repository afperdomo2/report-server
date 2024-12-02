-- CreateEnum
CREATE TYPE "continents" AS ENUM ('Africa', 'Antarctica', 'Asia', 'Europe', 'Oceania', 'North America', 'South America');

-- CreateTable
CREATE TABLE "countries" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT,
    "iso2" TEXT NOT NULL,
    "iso3" TEXT,
    "local_name" TEXT,
    "continent" "continents",

    CONSTRAINT "countries_pkey" PRIMARY KEY ("id")
);
