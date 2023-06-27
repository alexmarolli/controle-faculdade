/*
  Warnings:

  - Added the required column `cod_barras` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_barras" INTEGER NOT NULL,
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
