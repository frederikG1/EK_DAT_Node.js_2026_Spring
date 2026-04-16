import db from "./connection.js";

console.log(process.argv.includes("--delete"));

//loops through argv and
//process.argv.find((argument) => argument === '--delete'));

//no need to delete .db file everytime
const deleteMode = true;

if (deleteMode) {
  await db.exec(`DROP TABLE IF EXISTS ingredients;`);
  await db.exec(`DROP TABLE IF EXISTS recipes;`);
}

/*
Conventions for SQL
    use 'snake_case'
    plural for tables
    use lowercase for tables
*/

/* metoder at kunne
    .exec() // RUN DCL / DDL (with no parameters)
    .run() // Run parameterized queries without returning data (INSERT, UPDATE, DELETE)
    .all() // Run a query and retrieve the result set (SELECT)
*/

// DDL
await db.exec(`
    CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_name VARCHAR(100) NOT NULL,
        description TEXT, 
        minutes_to_cook INTEGER
    );

    CREATE TABLE IF NOT EXISTS ingredients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        recipe_id INTEGER,
        ingredient_name TEXT NOT NULL,
        units INTEGER,
        unit_of_measurement TEXT CHECK (unit_of_measurement IN ('l', 'kg', 'unit')),
        FOREIGN KEY (recipe_id) REFERENCES recipes (id)
    );
`);

//DML
//when you create the DB its called seeding
if (deleteMode) {
  await db.run(`INSERT INTO recipes (recipe_name) VALUES ('Potato Pancakes');`);
  await db.run(
    `INSERT INTO recipes VALUES ('2', 'Baked Potato', "Also known as a loaded potato. It's a treat", 12);`,
  );
  await db.run(
    `INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES ('1', 'flour', '5', 'kg')`,
  );
  await db.run(
    `INSERT INTO ingredients (recipe_id, ingredient_name, units, unit_of_measurement) VALUES ('2', 'bacon', '1', 'kg')`,
  );
}
