import { pool } from "../db/pool.js";

export async function addNews({ title, content }) {
  await pool.query("INSERT INTO news (title, content) VALUES ($1, $2);", [
    title,
    content,
  ]);
}

export async function getAllNews() {
  const result = await pool.query("SELECT * FROM news ORDER BY id DESC;");
  return result.rows;
}

export async function deleteNews(id) {
  await pool.query("DELETE FROM news WHERE id = $1;", [id]);
}
