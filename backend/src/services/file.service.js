import path from "path";
import { unlink } from "fs/promises";

const UPLOADS_DIR = path.resolve("uploads");

export async function deleteFile(relativePath) {
  if (!relativePath) {
    return;
  }

  const fileName = path.basename(relativePath);
  const filePath = path.join(UPLOADS_DIR, fileName);

  try {
    await unlink(filePath);
  } catch (err) {
    console.log(err);
  }
}
