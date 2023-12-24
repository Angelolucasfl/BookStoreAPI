/*
  Warnings:

  - Changed the type of `year_of_publication` on the `books` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "books" DROP COLUMN "year_of_publication",
ADD COLUMN     "year_of_publication" INTEGER NOT NULL;
