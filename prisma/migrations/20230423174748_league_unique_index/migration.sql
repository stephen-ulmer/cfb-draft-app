/*
  Warnings:

  - A unique constraint covering the columns `[ownerId,name]` on the table `League` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `League_ownerId_name_key` ON `League`(`ownerId`, `name`);
