/*
  Warnings:

  - You are about to drop the `shipping` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "shipping" DROP CONSTRAINT "shipping_districtId_fkey";

-- DropTable
DROP TABLE "shipping";

-- CreateTable
CREATE TABLE "delivery" (
    "id" SERIAL NOT NULL,
    "districtId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "delivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "delivery_districtId_key" ON "delivery"("districtId");

-- AddForeignKey
ALTER TABLE "delivery" ADD CONSTRAINT "delivery_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
