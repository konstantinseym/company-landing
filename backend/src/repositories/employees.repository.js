import { pool } from "../db/pool.js";

export async function getAllEmployees() {
  const result = await pool.query("SELECT * FROM employees;");
  return result.rows;
}

export async function getEmployee(id) {
  const result = await pool.query("SELECT * FROM employees WHERE id = $1;", [
    id,
  ]);
  return result.rows[0];
}

export async function newEmployee({ name, role, imageurl, imagealt }) {
  await pool.query(
    "INSERT INTO employees (name, post, imageurl, imagealt) VALUES ($1, $2, $3, $4);",
    [name, role, imageurl, imagealt],
  );
}

export async function deleteEmployee(id) {
  await pool.query("DELETE FROM employees WHERE id = $1;", [id]);
}
