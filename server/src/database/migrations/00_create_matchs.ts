import Knex from 'knex';

/**
 * Função cria tabela de placares
 *
 * @export
 * @param {Knex} knex
 * @return {*} - Retorna comando em SQL que cria a tabela no banco de dados SQLite conforme especificado
 */
export async function up(knex: Knex) {
    return knex.schema.createTable('matchs', table => {
        table.increments('id').primary();
        table.integer('match_score').notNullable();
        table.date('match_date').notNullable();
        table.integer('match_victory').notNullable();
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
    return knex.schema.dropTable('matchs');
}