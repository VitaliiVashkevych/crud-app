import { query } from "../db.ts";
import { User } from "../types/User";

export const getUsers = async () => {
  const { rows } = await query("SELECT * FROM users");
  return rows;
};

export const createUser = async (userData: User) => {
  const { name, email, job, rate, isactive } = userData;
  const { rows } = await query(
    `INSERT INTO users (name, email, job, rate, isactive)
    VALUES (${name}, ${email}, ${job}, ${rate}, ${isactive}) RETURNING *`
  );

  return rows[0];
};

export const updateUser = async (userData: User, userId: string): Promise<any> => {
  const { name, email, job, rate, isactive } = userData;
  const { rows } = await query(
    `UPDATE users SET name = '${name}', email = '${email}', job = '${job}', rate = ${rate}, isactive = ${isactive}
    WHERE id = ${userId} RETURNING *`
  );

  return rows[0];
};

export const deleteUser = async (id: string) => {
  const { rowCount } = await query(`DELETE FROM users WHERE id = ${id}`);

  if (rowCount) {
    return true;
  }

  return false;
};

export const searchUsers = async (searchTerm: string) => {
  const { rows } = await query(
    `SELECT * FROM users WHERE name ILIKE '%${searchTerm}%' OR email ILIKE '%${searchTerm}%' OR job ILIKE '%${searchTerm}%'`
    );
  return rows;
};
