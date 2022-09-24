exports.handler = async (event, context, callback) => {
  require('dotenv').config({path: process.cwd() + '/.env'})
  const Pool = require('pg-pool')
  const pool = new Pool({
    database: process.env.DB_BASENAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: 5432,
    host: process.env.DB_HOST,
    ssl: true
  })
  

  try {
    const data = await pool.query('SELECT * FROM tabledata')
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(data.rows)
    })
  } catch (error) {
    callback(null, {
      statusCode: 200,
      body: `worrry!!!! ${error}`
    })
  }
}