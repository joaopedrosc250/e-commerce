-- CreateTable
CREATE TABLE "Orders" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productsId" TEXT NOT NULL,
    CONSTRAINT "Orders_productsId_fkey" FOREIGN KEY ("productsId") REFERENCES "Products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
