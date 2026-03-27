import { pool } from "./pool.js";

export async function initTables() {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS news (id BIGSERIAL PRIMARY KEY, date TIMESTAMP NOT NULL DEFAULT NOW(), title TEXT NOT NULL, content TEXT)",
    );
    await pool.query(
      "CREATE TABLE IF NOT EXISTS employees (id BIGSERIAL PRIMARY KEY, name TEXT NOT NULL, post TEXT NOT NULL, imageUrl TEXT NOT NULL, imageAlt TEXT NOT NULL)",
    );
    await pool.query("CREATE TABLE IF NOT EXISTS content (id BIGSERIAL PRIMARY KEY, section TEXT NOT NULL, data JSONB)")
  } catch (err) {
    console.log(err);
  }
}
