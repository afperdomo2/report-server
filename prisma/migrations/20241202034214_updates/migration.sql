/*
  Warnings:

  - The `continent` column on the `countries` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Continent" AS ENUM ('Africa', 'Antarctica', 'Asia', 'Europe', 'Oceania', 'North America', 'South America');

-- AlterTable
ALTER TABLE "countries" DROP COLUMN "continent",
ADD COLUMN     "continent" "Continent";

-- DropEnum
DROP TYPE "continents";
