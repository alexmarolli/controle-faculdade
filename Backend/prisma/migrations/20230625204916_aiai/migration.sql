/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id_produto" TEXT NOT NULL PRIMARY KEY,
    "cod_barras" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_v" TEXT NOT NULL,
    "valor_c" TEXT NOT NULL,
    "estoque" TEXT NOT NULL
);
INSERT INTO "new_Produto" ("cod_barras", "descricao", "estoque", "id_produto", "valor_c", "valor_v") SELECT "cod_barras", "descricao", "estoque", "id_produto", "valor_c", "valor_v" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
