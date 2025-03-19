import { query } from '../db.ts';

export const getUsers = async () => {
  const { rows } = await query("SELECT * FROM users");
  return rows
}