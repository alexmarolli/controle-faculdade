/*
  Warnings:

  - Added the required column `descricao` to the `Documento` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "docItens" (
    "item" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Id_produto" INTEGER NOT NULL,
    "data" DATETIME NOT NULL,
    "valor_un" DECIMAL NOT NULL,
    "valor_to" DECIMAL NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "docItens_Id_produto_fkey" FOREIGN KEY ("Id_produto") REFERENCES "Produto" ("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Documento" (
    "doc_controle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "usuarioId" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "contaId_conta" INTEGER NOT NULL,
    CONSTRAINT "Documento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documento_contaId_conta_fkey" FOREIGN KEY ("contaId_conta") REFERENCES "Conta" ("id_conta") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documento" ("contaId_conta", "doc_controle", "id_cliente", "usuarioId", "valor") SELECT "contaId_conta", "doc_controle", "id_cliente", "usuarioId", "valor" FROM "Documento";
DROP TABLE "Documento";
ALTER TABLE "new_Documento" RENAME TO "Documento";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
