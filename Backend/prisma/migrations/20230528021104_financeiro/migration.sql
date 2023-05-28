-- CreateTable
CREATE TABLE "Financeiro" (
    "fin_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "documentoDoc_controle" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dt_create" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dt_vencimento" DATETIME NOT NULL,
    "pago" BOOLEAN NOT NULL DEFAULT false,
    "cancelado" BOOLEAN NOT NULL DEFAULT false,
    "valor" DECIMAL NOT NULL,
    CONSTRAINT "Financeiro_documentoDoc_controle_fkey" FOREIGN KEY ("documentoDoc_controle") REFERENCES "Documento" ("doc_controle") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Financeiro_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Fin_pago" (
    "pago_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "financeiroFin_id" INTEGER NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "dt_pago" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "val_desc" DECIMAL NOT NULL,
    "val_juros" DECIMAL NOT NULL,
    CONSTRAINT "Fin_pago_financeiroFin_id_fkey" FOREIGN KEY ("financeiroFin_id") REFERENCES "Financeiro" ("fin_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Fin_pago_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
