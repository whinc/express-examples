import Knex from 'knex';
const knex = Knex({
    client: 'sqlite',
    connection: {
        filename: ":memory:"
    }
});

// create table
await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name');
    table.string('email');
})
console.log('Table created');

// batch insert
await knex.table('users').insert([{ name: 'a', email: "a@123.com" }, { name: 'b', email: "b@123.com" }, { name: 'c', email: "c@123.com" }])

let rows = await knex.table('users').select('*')
console.log("查询全部", rows)

const page = 2;
const pageSize = 2;
rows = await knex.table('users').select('*').limit(pageSize).offset(page)
console.log("分页查询", rows)

knex.destroy(() => console.log('close connections'))