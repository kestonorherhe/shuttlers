import {MigrationInterface, QueryRunner} from "typeorm";

export class ModifiedAppUserEntity1643358760068 implements MigrationInterface {
    name = 'ModifiedAppUserEntity1643358760068'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "genderId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "username" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ADD CONSTRAINT "UQ_c480e576dd71729addbc2d51b67" UNIQUE ("username")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "app_user" DROP CONSTRAINT "UQ_c480e576dd71729addbc2d51b67"`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "username" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "app_user" ALTER COLUMN "genderId" SET NOT NULL`);
    }

}
