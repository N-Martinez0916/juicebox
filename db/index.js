<<<<<<< HEAD
const { Client } = require('pg'); // imports the pg module

// supply the db name and location of the database
const client = new Client('postgres://localhost:5432/juicebox-dev');
async function getAllUsers() {
    const { rows } = await client.query(
      `SELECT id, username 
      FROM users;
    `);
  
    return rows;
  }
  
  // and export them
  module.exports = {
    client,
    getAllUsers,
  }

module.exports = {
  client,
}

client.query(`
  INSERT INTO users(username, password) VALUES ($1, $2);
`, [ "some_name", "some_password" ]);

async function createUser({ username, password }) {
    try {
      const result = await client.query(`
  
      `);
  
      return result
    } catch (error) {
      throw error;
    }
  }

  async function createUser({ username, password }) {
    try {
      const result = await client.query(`
        INSERT INTO users(username, password)
        VALUES ($1, $2);
      `, [username, password]);
  
      return result;
    } catch (error) {
      throw error;
    }
  }
  
  // later
  module.exports = {
    // add createUser here!
  }
=======
const { Client } = require('pg');

const client = new Client('postgres://localhost:5432/juicebox-dev');

module.exports = {
    client,
}
>>>>>>> bb6889920192653b4b563230c08e1de3b39d5833
