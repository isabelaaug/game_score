import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('matchs', table => {
        table.increments('id').primary();
        table.integer('match_score').notNullable();
        table.date('match_date').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('matchs');
}