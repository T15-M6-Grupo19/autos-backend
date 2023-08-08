import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691520427287 implements MigrationInterface {
    name = 'InitialMigration1691520427287'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment_text" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "adId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "photos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "photo_url" character varying NOT NULL, "adId" uuid, CONSTRAINT "PK_5220c45b8e32d49d767b9b3d725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."ads_fuel_enum" AS ENUM('gasolina', 'alcool')`);
        await queryRunner.query(`CREATE TABLE "ads" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying NOT NULL, "model" character varying NOT NULL, "year" TIMESTAMP NOT NULL, "fuel" "public"."ads_fuel_enum" NOT NULL DEFAULT 'gasolina', "kilometers" integer NOT NULL, "color" character varying NOT NULL, "good_deal" boolean NOT NULL DEFAULT false, "price" integer NOT NULL, "description" character varying NOT NULL, "published" boolean NOT NULL DEFAULT false, "userId" uuid, CONSTRAINT "PK_a7af7d1998037a97076f758fc23" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "senha"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "celular"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "data_nascimento"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "descricao"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "CEP"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "estado"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "rua"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tipo_de_conta"`);
        await queryRunner.query(`DROP TYPE "public"."users_tipo_de_conta_enum"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "mobile" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birth_date" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "ZIP_code" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "street" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "additional_details" character varying NOT NULL`);
        await queryRunner.query(`CREATE TYPE "public"."users_account_type_enum" AS ENUM('anunciante', 'comprador')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "account_type" "public"."users_account_type_enum" NOT NULL DEFAULT 'comprador'`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_f1ca1f4ecd02811179c26b6d664" FOREIGN KEY ("adId") REFERENCES "ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "photos" ADD CONSTRAINT "FK_b1426233b7de5c32c767984fa91" FOREIGN KEY ("adId") REFERENCES "ads"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "ads" ADD CONSTRAINT "FK_e72da72588dc5b91427a9adda71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "ads" DROP CONSTRAINT "FK_e72da72588dc5b91427a9adda71"`);
        await queryRunner.query(`ALTER TABLE "photos" DROP CONSTRAINT "FK_b1426233b7de5c32c767984fa91"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_f1ca1f4ecd02811179c26b6d664"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "account_type"`);
        await queryRunner.query(`DROP TYPE "public"."users_account_type_enum"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "additional_details"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "street"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "ZIP_code"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birth_date"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "mobile"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`CREATE TYPE "public"."users_tipo_de_conta_enum" AS ENUM('anunciante', 'comprador')`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tipo_de_conta" "public"."users_tipo_de_conta_enum" NOT NULL DEFAULT 'comprador'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "complemento" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "numero" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "rua" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cidade" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "estado" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "CEP" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "descricao" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "data_nascimento" TIMESTAMP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "celular" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "senha" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "ads"`);
        await queryRunner.query(`DROP TYPE "public"."ads_fuel_enum"`);
        await queryRunner.query(`DROP TABLE "photos"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
