/*
  Warnings:

  - Added the required column `Pag_id` to the `Documento` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Documento" (
    "doc_controle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "saida" BOOLEAN NOT NULL DEFAULT true,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor" DECIMAL NOT NULL,
    "Pag_id" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_Pag_id_fkey" FOREIGN KEY ("Pag_id") REFERENCES "forma_pag" ("pag_id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documento" ("descricao", "doc_controle", "id_cliente", "usuarioId", "valor") SELECT "descricao", "doc_controle", "id_cliente", "usuarioId", "valor" FROM "Documento";
DROP TABLE "Documento";
ALTER TABLE "new_Documento" RENAME TO "Documento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
