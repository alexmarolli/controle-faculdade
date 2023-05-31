/*
  Warnings:

  - You are about to drop the column `financeiroFin_id` on the `Fin_pago` table. All the data in the column will be lost.
  - Added the required column `Cliente_id` to the `Financeiro` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaId_conta` to the `Documento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Fin_id` to the `Fin_pago` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "cliente" (
    "cliente_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
    "Cliente_id" INTEGER NOT NULL,
    "documentoDoc_controle" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_vencimento" DATETIME NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "cancelado" BOOLEAN NOT NULL DEFAULT false,
    "valor" DECIMAL NOT NULL,
    CONSTRAINT "Financeiro_documentoDoc_controle_fkey" FOREIGN KEY ("documentoDoc_controle") REFERENCES "Documento" ("doc_controle") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_Cliente_id_fkey" FOREIGN KEY ("Cliente_id") REFERENCES "cliente" ("cliente_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Financeiro" ("cancelado", "documentoDoc_controle", "dt_create", "dt_vencimento", "fin_id", "pago", "usuarioId", "valor") SELECT "cancelado", "documentoDoc_controle", "dt_create", "dt_vencimento", "fin_id", "pago", "usuarioId", "valor" FROM "Financeiro";
DROP TABLE "Financeiro";
ALTER TABLE "new_Financeiro" RENAME TO "Financeiro";
CREATE TABLE "new_Documento" (
    "doc_controle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "contaId_conta" INTEGER NOT NULL,
    CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_contaId_conta_fkey" FOREIGN KEY ("contaId_conta") REFERENCES "Conta" ("id_conta") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documento" ("doc_controle", "id_cliente", "usuarioId", "valor") SELECT "doc_controle", "id_cliente", "usuarioId", "valor" FROM "Documento";
DROP TABLE "Documento";
ALTER TABLE "new_Documento" RENAME TO "Documento";
CREATE TABLE "new_Fin_pago" (
    "pago_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Fin_id" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dt_pago" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "val_desc" DECIMAL NOT NULL,
    "val_juros" DECIMAL NOT NULL,
    CONSTRAINT "Fin_pago_Fin_id_fkey" FOREIGN KEY ("Fin_id") REFERENCES "Financeiro" ("fin_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Fin_pago_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Fin_pago" ("dt_pago", "pago_id", "usuarioId", "val_desc", "val_juros") SELECT "dt_pago", "pago_id", "usuarioId", "val_desc", "val_juros" FROM "Fin_pago";
DROP TABLE "Fin_pago";
ALTER TABLE "new_Fin_pago" RENAME TO "Fin_pago";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "cliente_cpfCnpj_key" ON "cliente"("cpfCnpj");
