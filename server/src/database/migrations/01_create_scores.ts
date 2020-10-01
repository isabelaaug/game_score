import Knex from 'knex';

/**
 * Função cria tabela de pontuações
 *
 * @export
 * @param {Knex} knex
 * @return {*} - Retorna comando em SQL que cria a tabela no banco de dados SQLite conforme especificado
 */
export async function up(knex: Knex) {
    return knex.schema.createTable('scores', table => {
        table.increments('id').primary();
        table.integer('max_score').notNullable();
        table.integer('min_score').notNullable();

        table.integer('match_id')
            .notNullable()
            .references('id')
            .inTable('matchs')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    });
}

/**
 * Função desfaz criação da tabela de placares em caso de falha/erro
 *
 * @export
 * @param {Knex} knex
 * @return {*} - Retorna comando em SQL que desfaz criação da tabela no banco de dados SQLite
 */
export async function down(knex: Knex) {
    return knex.schema.dropTable('scores');
}