/*
  Warnings:

  - Added the required column `category` to the `Hobby` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hobby` ADD COLUMN `category` ENUM('Food', 'Travel', 'Utilities', 'Other') NOT NULL;
