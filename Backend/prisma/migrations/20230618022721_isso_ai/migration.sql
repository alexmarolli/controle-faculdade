/*
  Warnings:

  - You are about to drop the column `entrada` on the `Financeiro` table. All the data in the column will be lost.
  - Added the required column `debCred` to the `Financeiro` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Financeiro" (
    "fin_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Cliente_id" INTEGER NOT NULL,
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
    CONSTRAINT "Financeiro_Cliente_id_fkey" FOREIGN KEY ("Cliente_id") REFERENCES "cliente" ("cliente_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_forma_pagPag_id_fkey" FOREIGN KEY ("forma_pagPag_id") REFERENCES "forma_pag" ("pag_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Financeiro" ("Cliente_id", "Doc_controle", "cancelado", "dt_create", "dt_pago", "dt_vencimento", "fin_id", "forma_pagPag_id", "pago", "usuarioId", "valor") SELECT "Cliente_id", "Doc_controle", "cancelado", "dt_create", "dt_pago", "dt_vencimento", "fin_id", "forma_pagPag_id", "pago", "usuarioId", "valor" FROM "Financeiro";
DROP TABLE "Financeiro";
ALTER TABLE "new_Financeiro" RENAME TO "Financeiro";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
