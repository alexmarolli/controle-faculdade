/*
  Warnings:

  - You are about to drop the `cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `Cliente_id` on the `Financeiro` table. All the data in the column will be lost.
  - Added the required column `parceiro_id` to the `Financeiro` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "cliente_cpfCnpj_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "cliente";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "parceiro" (
    "parceiro_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpfCnpj" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "numero" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Financeiro" (
    "fin_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parceiro_id" INTEGER NOT NULL,
    "Doc_controle" INTEGER,
    "usuarioId" INTEGER NOT NULL,
    "forma_pagPag_id" INTEGER NOT NULL,
    "debCred" BOOLEAN NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_vencimento" DATETIME NOT NULL,
    "cancelado" BOOLEAN NOT NULL DEFAULT false,
    "valor" DECIMAL NOT NULL,
    "pago" BOOLEAN NOT NULL,
    "dt_pago" DATETIME,
    CONSTRAINT "Financeiro_Doc_controle_fkey" FOREIGN KEY ("Doc_controle") REFERENCES "Documento" ("doc_controle") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_parceiro_id_fkey" FOREIGN KEY ("parceiro_id") REFERENCES "parceiro" ("parceiro_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_forma_pagPag_id_fkey" FOREIGN KEY ("forma_pagPag_id") REFERENCES "forma_pag" ("pag_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Financeiro" ("Doc_controle", "cancelado", "debCred", "dt_create", "dt_pago", "dt_vencimento", "fin_id", "forma_pagPag_id", "pago", "usuarioId", "valor") SELECT "Doc_controle", "cancelado", "debCred", "dt_create", "dt_pago", "dt_vencimento", "fin_id", "forma_pagPag_id", "pago", "usuarioId", "valor" FROM "Financeiro";
DROP TABLE "Financeiro";
ALTER TABLE "new_Financeiro" RENAME TO "Financeiro";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "parceiro_cpfCnpj_key" ON "parceiro"("cpfCnpj");
