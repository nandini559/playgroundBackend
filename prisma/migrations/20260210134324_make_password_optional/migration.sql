/*
  Warnings:

  - You are about to drop the column `category` on the `hobby` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `hobby` DROP COLUMN `category`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NULL;
