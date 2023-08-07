import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1691437289790 implements MigrationInterface {
    name = 'InitialMigration1691437289790'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comentarios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment_text" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "anuncioId" uuid, CONSTRAINT "PK_b60b1468bb275db8d5e875c4a78" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "fotos" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "foto_url" character varying NOT NULL, "anuncioId" uuid, CONSTRAINT "PK_929dc0abc9924e9f2797dbca023" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."anuncios_combustivel_enum" AS ENUM('gasolina', 'alcool')`);
        await queryRunner.query(`CREATE TABLE "anuncios" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "marca" character varying NOT NULL, "modelo" character varying NOT NULL, "ano" TIMESTAMP NOT NULL, "combustivel" "public"."anuncios_combustivel_enum" NOT NULL DEFAULT 'gasolina', "quilometragem" integer NOT NULL, "cor" character varying NOT NULL, "bom_negocio" boolean NOT NULL DEFAULT false, "preco" integer NOT NULL, "descricao" character varying NOT NULL, "publicado" boolean NOT NULL DEFAULT false, "userId" uuid, CONSTRAINT "PK_e38512a0cf3f4f9452fcdc082de" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."users_tipo_de_conta_enum" AS ENUM('anunciante', 'comprador')`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "senha" character varying NOT NULL, "CPF" character varying NOT NULL, "celular" character varying NOT NULL, "data_nascimento" TIMESTAMP NOT NULL, "descricao" character varying NOT NULL, "CEP" integer NOT NULL, "estado" character varying NOT NULL, "cidade" character varying NOT NULL, "rua" character varying NOT NULL, "numero" character varying NOT NULL, "complemento" character varying NOT NULL, "tipo_de_conta" "public"."users_tipo_de_conta_enum" NOT NULL DEFAULT 'comprador', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comentarios" ADD CONSTRAINT "FK_050abf3cec9d7ca404fb746e186" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comentarios" ADD CONSTRAINT "FK_511523b8b5c0d09bdbb0a07b816" FOREIGN KEY ("anuncioId") REFERENCES "anuncios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "fotos" ADD CONSTRAINT "FK_86f878f76615c72ea6bb2143057" FOREIGN KEY ("anuncioId") REFERENCES "anuncios"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "anuncios" ADD CONSTRAINT "FK_d024918052265e33465f5cb5065" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "anuncios" DROP CONSTRAINT "FK_d024918052265e33465f5cb5065"`);
        await queryRunner.query(`ALTER TABLE "fotos" DROP CONSTRAINT "FK_86f878f76615c72ea6bb2143057"`);
        await queryRunner.query(`ALTER TABLE "comentarios" DROP CONSTRAINT "FK_511523b8b5c0d09bdbb0a07b816"`);
        await queryRunner.query(`ALTER TABLE "comentarios" DROP CONSTRAINT "FK_050abf3cec9d7ca404fb746e186"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TYPE "public"."users_tipo_de_conta_enum"`);
        await queryRunner.query(`DROP TABLE "anuncios"`);
        await queryRunner.query(`DROP TYPE "public"."anuncios_combustivel_enum"`);
        await queryRunner.query(`DROP TABLE "fotos"`);
        await queryRunner.query(`DROP TABLE "comentarios"`);
    }

}
