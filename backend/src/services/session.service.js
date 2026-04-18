import bcrypt from "bcrypt";

const HASH = process.env.ADMIN_PASSWORD_HASH;

export async function verifyPassword(password) {
  return bcrypt.compare(password, HASH);
}
