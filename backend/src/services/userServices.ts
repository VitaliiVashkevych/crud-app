import { query } from "../db.ts";

export const getUsers = async () => {
  const { rows } = await query("SELECT * FROM users");
  return rows;
};

export const createUser = async (userData) => {
  const { name, email, job, rate, isactive } = userData;
  const { rows } = await query(
    `INSERT INTO users (name, email, job, rate, isactive)
    VALUES (${name}, ${email}, ${job}, ${rate}, ${isactive}) RETURNING *`
  );

  return rows[0];
};
export const updateUser = async (userData, userId) => {
  const { name, email, job, rate, isactive } = userData;
  const { rows } = await query(
    `UPDATE users SET name = ${name}, email = ${email}, job = ${job}, rate = ${rate}, isactive = ${isactive}
    WHERE id = ${userId}`
  );

  return rows[0];
};

export const deleteUser = async (id: string) => {
  const { rows } = await query(`DELETE FROM users WHERE id = ${id}`);
  return rows;
};
