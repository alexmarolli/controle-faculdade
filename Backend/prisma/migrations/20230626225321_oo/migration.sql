/*
  Warnings:

  - You are about to drop the column `cod_barras` on the `Produto` table. All the data in the column will be lost.
  - Added the required column `Doc_controle` to the `docItens` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "movimentacao" (
    "mov_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "desc" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_docItens" (
    "item" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Doc_controle" INTEGER NOT NULL,
    "Id_produto" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor_un" DECIMAL NOT NULL,
    "valor_to" DECIMAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "docItens_Doc_controle_fkey" FOREIGN KEY ("Doc_controle") REFERENCES "Documento" ("doc_controle") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_docItens" ("Id_produto", "data", "item", "quantidade", "valor_to", "valor_un") SELECT "Id_produto", "data", "item", "quantidade", "valor_to", "valor_un" FROM "docItens";
DROP TABLE "docItens";
ALTER TABLE "new_docItens" RENAME TO "docItens";
CREATE TABLE "new_Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "valor_v" REAL NOT NULL,
    "valor_c" REAL NOT NULL,
    "estoque" INTEGER NOT NULL
);
INSERT INTO "new_Produto" ("descricao", "estoque", "id_produto", "valor_c", "valor_v") SELECT "descricao", "estoque", "id_produto", "valor_c", "valor_v" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
