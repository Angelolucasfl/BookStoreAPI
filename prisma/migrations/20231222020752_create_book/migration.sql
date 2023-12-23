-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('FANTASY', 'ROMANCE', 'HORROR', 'POETRY', 'ADVENTURE');

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year_of_publication" TIMESTAMP(3) NOT NULL,
    "genre" "Genre" NOT NULL,
    "availability" BOOLEAN NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
