-- CreateTable
CREATE TABLE "shipping" (
    "id" SERIAL NOT NULL,
    "districtId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "shipping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "shipping_districtId_key" ON "shipping"("districtId");

-- AddForeignKey
ALTER TABLE "shipping" ADD CONSTRAINT "shipping_districtId_fkey" FOREIGN KEY ("districtId") REFERENCES "districts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
