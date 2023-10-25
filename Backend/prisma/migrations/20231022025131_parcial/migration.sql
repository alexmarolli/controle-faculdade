/*
  Warnings:

  - You are about to drop the `movimentacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `estoque` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `debCred` on the `Financeiro` table. All the data in the column will be lost.
  - You are about to drop the column `forma_pagPag_id` on the `Financeiro` table. All the data in the column will be lost.
  - Added the required column `Pag_id` to the `Financeiro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `credito` to the `Financeiro` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "movimentacao";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Estoque" (
    "produtoId_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "estoque" REAL NOT NULL,
    CONSTRAINT "Estoque_produtoId_produto_fkey" FOREIGN KEY ("produtoId_produto") REFERENCES "Produto" ("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parceiro" (
    "parceiro_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpfCnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "fonecedor" BOOLEAN NOT NULL DEFAULT false,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL
);
INSERT INTO "new_parceiro" ("cpfCnpj", "email", "endereco", "nome", "numero", "parceiro_id", "telefone") SELECT "cpfCnpj", "email", "endereco", "nome", "numero", "parceiro_id", "telefone" FROM "parceiro";
DROP TABLE "parceiro";
ALTER TABLE "new_parceiro" RENAME TO "parceiro";
CREATE UNIQUE INDEX "parceiro_cpfCnpj_key" ON "parceiro"("cpfCnpj");
CREATE TABLE "new_Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cod_barras" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_v" REAL NOT NULL,
    "valor_c" REAL NOT NULL
);
INSERT INTO "new_Produto" ("cod_barras", "descricao", "id_produto", "valor_c", "valor_v") SELECT "cod_barras", "descricao", "id_produto", "valor_c", "valor_v" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
CREATE TABLE "new_Documento" (
    "doc_controle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "saida" BOOLEAN NOT NULL DEFAULT true,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" DECIMAL NOT NULL,
    "Pag_id" INTEGER NOT NULL,
    CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_Pag_id_fkey" FOREIGN KEY ("Pag_id") REFERENCES "forma_pag" ("pag_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "parceiro" ("parceiro_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documento" ("Pag_id", "data", "descricao", "doc_controle", "id_cliente", "saida", "usuarioId", "valor") SELECT "Pag_id", "data", "descricao", "doc_controle", "id_cliente", "saida", "usuarioId", "valor" FROM "Documento";
DROP TABLE "Documento";
ALTER TABLE "new_Documento" RENAME TO "Documento";
CREATE INDEX "Documento_doc_controle_idx" ON "Documento"("doc_controle");
CREATE TABLE "new_Financeiro" (
    "fin_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parceiro_id" INTEGER NOT NULL,
    "Doc_controle" INTEGER,
    "usuarioId" INTEGER NOT NULL,
    "Pag_id" INTEGER NOT NULL,
    "credito" BOOLEAN NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_vencimento" DATETIME,
    "cancelado" BOOLEAN NOT NULL DEFAULT false,
    "valor" DECIMAL NOT NULL,
    "pago" BOOLEAN NOT NULL,
    "dt_pago" DATETIME,
    CONSTRAINT "Financeiro_Doc_controle_fkey" FOREIGN KEY ("Doc_controle") REFERENCES "Documento" ("doc_controle") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_parceiro_id_fkey" FOREIGN KEY ("parceiro_id") REFERENCES "parceiro" ("parceiro_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_Pag_id_fkey" FOREIGN KEY ("Pag_id") REFERENCES "forma_pag" ("pag_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Financeiro" ("Doc_controle", "cancelado", "dt_create", "dt_pago", "dt_vencimento", "fin_id", "pago", "parceiro_id", "usuarioId", "valor") SELECT "Doc_controle", "cancelado", "dt_create", "dt_pago", "dt_vencimento", "fin_id", "pago", "parceiro_id", "usuarioId", "valor" FROM "Financeiro";
DROP TABLE "Financeiro";
ALTER TABLE "new_Financeiro" RENAME TO "Financeiro";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
