import dotenv from "dotenv";
dotenv.config();

export const IP_SERVER = process.env.IP_SERVER;
export const PORT_SERVER = process.env.PORT_SERVER;

export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;

export const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;