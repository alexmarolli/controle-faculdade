/*
  Warnings:

  - You are about to drop the column `contaId_conta` on the `Documento` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Documento" (
    "doc_controle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "descricao" TEXT NOT NULL,
    CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documento" ("descricao", "doc_controle", "id_cliente", "usuarioId", "valor") SELECT "descricao", "doc_controle", "id_cliente", "usuarioId", "valor" FROM "Documento";
DROP TABLE "Documento";
ALTER TABLE "new_Documento" RENAME TO "Documento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
