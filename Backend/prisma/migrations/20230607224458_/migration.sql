/*
  Warnings:

  - You are about to drop the `Movimentacao` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `forma_pagPag_id` to the `Financeiro` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Movimentacao";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "forma_pag" (
    "pag_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prazo" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Financeiro" (
    "fin_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Cliente_id" INTEGER NOT NULL,
    "documentoDoc_controle" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "forma_pagPag_id" INTEGER NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_vencimento" DATETIME NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "cancelado" BOOLEAN NOT NULL DEFAULT false,
    "valor" DECIMAL NOT NULL,
    CONSTRAINT "Financeiro_documentoDoc_controle_fkey" FOREIGN KEY ("documentoDoc_controle") REFERENCES "Documento" ("doc_controle") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_Cliente_id_fkey" FOREIGN KEY ("Cliente_id") REFERENCES "cliente" ("cliente_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_forma_pagPag_id_fkey" FOREIGN KEY ("forma_pagPag_id") REFERENCES "forma_pag" ("pag_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Financeiro" ("Cliente_id", "cancelado", "documentoDoc_controle", "dt_create", "dt_vencimento", "fin_id", "pago", "usuarioId", "valor") SELECT "Cliente_id", "cancelado", "documentoDoc_controle", "dt_create", "dt_vencimento", "fin_id", "pago", "usuarioId", "valor" FROM "Financeiro";
DROP TABLE "Financeiro";
ALTER TABLE "new_Financeiro" RENAME TO "Financeiro";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
