const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

async function openDb() {
  return open({
    filename: './database.db',
    driver: sqlite3.Database,
  });
}

async function setup() {
  const db = await openDb();
  await db.migrate({ force: 'last' });
  
    const people = await db.each('SELECT * FROM users');
    console.log('ALL PEOPLE', JSON.stringify(people, null, 2));

    const ingredients = await db.each('SELECT * FROM ingredients');
    console.log('ALL INGREDIENTS', JSON.stringify(ingredients, null, 2));

    const names = await db.each('SELECT * FROM pizzaNames');
    console.log('ALL PIZZA NAMES', JSON.stringify(names, null, 2));

    const orders = await db.each('SELECT * FROM orders');
    console.log('ALL ORDERS', JSON.stringify(orders, null, 2));

}


setup();