import { pool } from "../db/pool.js";

export async function getAllStringValues() {
  const result = await pool.query("SELECT * FROM stringvalues;");
  return result.rows;
}

export async function updateStringValue(section, data) {
  await pool.query("UPDATE stringvalues SET data = $1 WHERE section = $2;", [
    JSON.stringify(data),
    section,
  ]);
}
