/*
  Warnings:

  - You are about to drop the column `link` on the `Tabela` table. All the data in the column will be lost.
  - Added the required column `urlTabela` to the `Tabela` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tabela" (
    "campeonato" TEXT NOT NULL PRIMARY KEY,
    "backImage" TEXT NOT NULL,
    "urlTabela" TEXT NOT NULL
);
INSERT INTO "new_Tabela" ("backImage", "campeonato") SELECT "backImage", "campeonato" FROM "Tabela";
DROP TABLE "Tabela";
ALTER TABLE "new_Tabela" RENAME TO "Tabela";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
