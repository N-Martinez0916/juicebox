
const {
    client,
    getAllUsers // new
  } = require('./index');
  
  async function testDB() {
    try {
      client.connect();
  
      const users = await getAllUsers();
      console.log(users);
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }

async function testDB() {
  try {
    // connect the client to the database, finally
    client.connect();

    // queries are promises, so we can await them
    const {rows} = await client.query(`SELECT * FROM users;`);

    // for now, logging is a fine way to see what's up
    console.log(rows);
  } catch (error) {
    console.error(error);
  } finally {
    // it's important to close out the client connection
    client.end();
  }
}


async function dropTables() {
    try {
      await client.query(`
  
      `);
    } catch (error) {
      throw error; // we pass the error up to the function that calls dropTables
    }
  }
  
  // this function should call a query which creates all tables for our database 
  async function createTables() {
    try {
      await client.query(`
  
      `);
    } catch (error) {
      throw error; // we pass the error up to the function that calls createTables
    }
  }
  
  async function rebuildDB() {
    try {
      client.connect();
  
      await dropTables();
      await createTables();
    } catch (error) {
      console.error(error);
    } finally {
      client.end();
    }
  }
  
  rebuildDB();

testDB();

async function dropTables() {
    try {
      await client.query(`
        DROP TABLE IF EXISTS users;
      `);
    } catch (error) {
      throw error;
    }
  }

  async function createTables() {
    try {
      await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          username varchar(255) UNIQUE NOT NULL,
          password varchar(255) NOT NULL
        );
      `);
    } catch (error) {
      throw error;
    }
  }


  rebuildDB()
  .then(testDB)
  .catch(console.error)
  .finally(() => client.end());rebuildDB()