import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("rent", (table) => {
    table.uuid("id").primary();
    table.uuid("car_id").notNullable();
    table.foreign("car_id").references("car.id").onDelete("CASCADE");
    table.string("status").notNullable();
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").nullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("rent");
}
