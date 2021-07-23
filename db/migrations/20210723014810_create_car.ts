import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("car", (table) => {
    table.uuid("id").primary();
    table.string("brand").notNullable();
    table.string("model").nullable();
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("car");
}
