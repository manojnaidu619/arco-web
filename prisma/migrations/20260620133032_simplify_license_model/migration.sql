/*
  Warnings:

  - You are about to drop the column `activation_count` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `license_id` on the `licenses` table. All the data in the column will be lost.
  - You are about to drop the column `mode` on the `licenses` table. All the data in the column will be lost.
  - Made the column `activation_limit` on table `licenses` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `licenses_license_id_key` ON `licenses`;

-- AlterTable
ALTER TABLE `licenses` DROP COLUMN `activation_count`,
    DROP COLUMN `license_id`,
    DROP COLUMN `mode`,
    MODIFY `activation_limit` INTEGER NOT NULL DEFAULT 1;
