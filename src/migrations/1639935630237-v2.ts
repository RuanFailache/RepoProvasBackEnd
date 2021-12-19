import {MigrationInterface, QueryRunner} from "typeorm";

export class v21639935630237 implements MigrationInterface {
    name = 'v21639935630237'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "subjects_teachers" ("subject_id" integer NOT NULL, "teacher_id" integer NOT NULL, CONSTRAINT "PK_1ecbd0acbe68ef7b5c340d9d823" PRIMARY KEY ("subject_id", "teacher_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0fc89a1286eb1b3890576f28ed" ON "subjects_teachers" ("subject_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_1e529259e92b4a65a1b37086b3" ON "subjects_teachers" ("teacher_id") `);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "FK_0fc89a1286eb1b3890576f28ed1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" ADD CONSTRAINT "FK_1e529259e92b4a65a1b37086b32" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "FK_1e529259e92b4a65a1b37086b32"`);
        await queryRunner.query(`ALTER TABLE "subjects_teachers" DROP CONSTRAINT "FK_0fc89a1286eb1b3890576f28ed1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1e529259e92b4a65a1b37086b3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0fc89a1286eb1b3890576f28ed"`);
        await queryRunner.query(`DROP TABLE "subjects_teachers"`);
    }

}
