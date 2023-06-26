/*
  Warnings:

  - You are about to alter the column `valor_c` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.
  - You are about to alter the column `valor_v` on the `Produto` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_docItens" (
    "item" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Id_produto" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor_un" DECIMAL NOT NULL,
    "valor_to" DECIMAL NOT NULL,
    "quantidade" INTEGER NOT NULL
);
INSERT INTO "new_docItens" ("Id_produto", "data", "item", "quantidade", "valor_to", "valor_un") SELECT "Id_produto", "data", "item", "quantidade", "valor_to", "valor_un" FROM "docItens";
DROP TABLE "docItens";
ALTER TABLE "new_docItens" RENAME TO "docItens";
CREATE TABLE "new_Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_barras" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_v" REAL NOT NULL,
    "valor_c" REAL NOT NULL,
    "estoque" INTEGER NOT NULL
);
INSERT INTO "new_Produto" ("cod_barras", "descricao", "estoque", "id_produto", "valor_c", "valor_v") SELECT "cod_barras", "descricao", "estoque", "id_produto", "valor_c", "valor_v" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
