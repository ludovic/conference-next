const { app, pool } = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
  pool.query(`
    CREATE TABLE IF NOT EXISTS talks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      speaker VARCHAR(255) NOT NULL,
      description TEXT
    );
  `);
});
