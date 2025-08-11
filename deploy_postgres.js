const fs = require('fs');
const { Client } = require('pg');
require('dotenv').config();

async function deploySchema() {
  const client = new Client({
    connectionString: process.env.POSTGRES_URL_NON_POOLING,
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  });

  try {
    console.log('Connecting to PostgreSQL...');
    await client.connect();
    
    console.log('Checking existing tables...');
    const existingTables = await client.query(`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public'
    `);
    
    if (existingTables.rows.length > 0) {
      console.log('Tables already exist:', existingTables.rows.map(r => r.tablename));
      return;
    }

    console.log('Reading SQL schema file...');
    const sqlContent = fs.readFileSync('./complete_supabase_setup.sql', 'utf8');
    
    console.log('Executing SQL schema...');
    await client.query(sqlContent);
    
    console.log('Schema deployed successfully!');
    
    // Verify
    const finalTables = await client.query(`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public'
    `);
    
    console.log('Final tables:', finalTables.rows.map(r => r.tablename));

  } catch (error) {
    console.error('Deployment failed:', error);
  } finally {
    await client.end();
  }
}

deploySchema();