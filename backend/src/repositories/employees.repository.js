import { pool } from "../db/pool.js";

export async function getAllEmployees() {
  const result = await pool.query("SELECT * FROM employees;");
  return result.rows;
}

export async function newEmployee({ name, role, imageurl, imagealt }) {
  await pool.query(
    "INSERT INTO employees (name, post, imageurl, imagealt) VALUES ($1, $2, $3, $4);",
    [name, role, imageurl, imagealt],
  );
}
