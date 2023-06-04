-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);


-- CreateTable
CREATE TABLE "Conta" (
    "id_conta" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "Saldo" DECIMAL NOT NULL
);

-- CreateTable
CREATE TABLE "Documento" (
    "doc_controle" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "valor" DECIMAL NOT NULL
);
