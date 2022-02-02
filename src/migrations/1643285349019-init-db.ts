import {MigrationInterface, QueryRunner} from "typeorm";

export class initDb1643285349019 implements MigrationInterface {
    name = 'initDb1643285349019'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "app_user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "phone" character varying NOT NULL, "altPhone" character varying, "email" character varying, "dob" TIMESTAMP, "genderId" integer NOT NULL, "address" character varying, "twitter" character varying, "linkedIn" character varying, "photo" character varying, "username" character varying, "createdBy" integer, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "UQ_6a952ce9581e4c18e08d1f52136" UNIQUE ("phone"), CONSTRAINT "UQ_a057e8684b2fa51c62c6cce85ae" UNIQUE ("altPhone"), CONSTRAINT "UQ_3fa909d0e37c531ebc237703391" UNIQUE ("email"), CONSTRAINT "UQ_a938788f73ebf180f633e1c8809" UNIQUE ("twitter"), CONSTRAINT "UQ_61320781bf45625f6b37ea3e1a0" UNIQUE ("linkedIn"), CONSTRAINT "PK_22a5c4a3d9b2fb8e4e73fc4ada1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cashback" ("id" SERIAL NOT NULL, "transactionId" integer NOT NULL, "transactionRef" character varying NOT NULL, "userId" integer NOT NULL, "vendorCode" integer NOT NULL, "paymentType" character varying NOT NULL, "amount" integer NOT NULL, "cashback" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_367dfa7e4e15d45766d2260e3e0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "dob" TIMESTAMP, "address" character varying NOT NULL, "genderId" integer NOT NULL, "maritalStatusId" integer NOT NULL, "religionId" integer NOT NULL, "roleId" integer, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gender" ("id" SERIAL NOT NULL, "gender" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_98a711129bc073e6312d08364e8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "marital_status" ("id" SERIAL NOT NULL, "maritalStatus" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_03a7a601fa16fe68315e0379287" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "privileges" ("id" SERIAL NOT NULL, "privilege" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_13f3ff98ae4d5565ec5ed6036cd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "menu_authorization" ("id" SERIAL NOT NULL, "menuId" integer NOT NULL, "privilegeId" integer, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_91fec20114514b7ce538580831f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "menu" ("id" SERIAL NOT NULL, "menuId" character varying NOT NULL, "title" character varying NOT NULL, "subtitle" character varying, "url" character varying NOT NULL, "parentMenuId" integer, "moduleId" integer, "icon" character varying, "orderBy" integer NOT NULL, "statusId" integer NOT NULL DEFAULT '1', "type" character varying, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_35b2a8f47d153ff7a41860cceeb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "notification" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "text" character varying NOT NULL, "seen" boolean DEFAULT false, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_705b6c7cdf9b2c2ff7ac7872cb7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "payment-status" ("id" SERIAL NOT NULL, "paymentStatus" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_30b8dda5157b5542c42d5bfdf6d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "privilege_activity_details" ("id" SERIAL NOT NULL, "privilegeId" integer NOT NULL, "privilegeActivityId" integer NOT NULL, "approvalStageId" integer NOT NULL, "canInsert" boolean DEFAULT false, "canView" boolean DEFAULT false, "canUpdate" boolean DEFAULT false, "canDelete" boolean DEFAULT false, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_8e789e4f71e4396430bbb3476d8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "privilege_activity" ("id" SERIAL NOT NULL, "privilegeActivity" character varying NOT NULL, "orderBy" integer NOT NULL, "stageId" integer NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_f6cc23a9d849a63c78434edf2b5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "privilege_class" ("id" SERIAL NOT NULL, "privilegeClass" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_63c9c920c14b3a7dcbe058e36aa" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "privilege_detail" ("id" SERIAL NOT NULL, "privilegeHeaderId" integer NOT NULL, "employeeId" integer NOT NULL, "statusId" integer NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_eb6a8693fe43096c6865b9e6edb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "privilege_header" ("id" SERIAL NOT NULL, "privilegeId" integer NOT NULL, "privilegeClassId" integer NOT NULL, "stageId" integer NOT NULL, "employeeId" integer NOT NULL, "statusId" integer NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_578100a8c58c37e4a9869ed2b44" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "religion" ("id" SERIAL NOT NULL, "religion" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_fcfc9cd803b178c11fd21285d30" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "status" ("id" SERIAL NOT NULL, "status" character varying NOT NULL, "createdBy" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, CONSTRAINT "PK_e12743a7086ec826733f54e1d95" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction" ("id" SERIAL NOT NULL, "transactionRef" character varying NOT NULL, "userId" integer NOT NULL, "vendorCode" integer NOT NULL, "paymentType" character varying NOT NULL, "amount" integer NOT NULL, "isProcessed" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_89eadb93a89810556e1cbcd6ab9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying, "phone" character varying NOT NULL, "email" character varying, "picture" character varying, "isActive" boolean NOT NULL DEFAULT true, "isVerified" boolean NOT NULL DEFAULT false, "referralHash" character varying, "referralToken" character varying, "referralCount" integer, "userId" integer, "employeeId" integer, "createdBy" integer, "createdAt" TIMESTAMP NOT NULL, "modifiedBy" integer, "modifiedAt" TIMESTAMP, "password" character varying NOT NULL, "refreshToken" character varying, "refreshTokenExpires" character varying, CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "UQ_a000cca60bcf04454e727699490" UNIQUE ("phone"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vendor" ("id" SERIAL NOT NULL, "vendorCode" integer NOT NULL, "vendorName" character varying NOT NULL, "percentage" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL, CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "menu_authorization" ADD CONSTRAINT "FK_f1372b9bdefe26687f063fa0254" FOREIGN KEY ("privilegeId") REFERENCES "privileges"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "menu_authorization" DROP CONSTRAINT "FK_f1372b9bdefe26687f063fa0254"`);
        await queryRunner.query(`DROP TABLE "vendor"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "transaction"`);
        await queryRunner.query(`DROP TABLE "status"`);
        await queryRunner.query(`DROP TABLE "religion"`);
        await queryRunner.query(`DROP TABLE "privilege_header"`);
        await queryRunner.query(`DROP TABLE "privilege_detail"`);
        await queryRunner.query(`DROP TABLE "privilege_class"`);
        await queryRunner.query(`DROP TABLE "privilege_activity"`);
        await queryRunner.query(`DROP TABLE "privilege_activity_details"`);
        await queryRunner.query(`DROP TABLE "payment-status"`);
        await queryRunner.query(`DROP TABLE "notification"`);
        await queryRunner.query(`DROP TABLE "menu"`);
        await queryRunner.query(`DROP TABLE "menu_authorization"`);
        await queryRunner.query(`DROP TABLE "privileges"`);
        await queryRunner.query(`DROP TABLE "marital_status"`);
        await queryRunner.query(`DROP TABLE "gender"`);
        await queryRunner.query(`DROP TABLE "employee"`);
        await queryRunner.query(`DROP TABLE "cashback"`);
        await queryRunner.query(`DROP TABLE "app_user"`);
    }

}
