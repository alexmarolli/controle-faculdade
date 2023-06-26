-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY,
    "cod_barras" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_v" DECIMAL NOT NULL,
    "valor_c" DECIMAL NOT NULL,
    "estoque" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Movimentacao" (
    "mov_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "entrada" BOOLEAN NOT NULL,
    "saida" BOOLEAN NOT NULL,
    "quantidade" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY,
    "cod_barras" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_v" DECIMAL NOT NULL,
    "valor_c" DECIMAL NOT NULL,
    "estoque" INTEGER NOT NULL
);
INSERT INTO "new_Produto" ("cod_barras", "descricao", "estoque", "id_produto", "valor_c", "valor_v") SELECT "cod_barras", "descricao", "estoque", "id_produto", "valor_c", "valor_v" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
