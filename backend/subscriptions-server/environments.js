import dotenv from "dotenv";
dotenv.config();

export const IP_SERVER = process.env.IP_SERVER;
export const PORT_SERVER = process.env.PORT_SERVER;

export const DB_HOST_DEV = process.env.DB_HOST_DEV;
export const DB_HOST_PROD = process.env.DB_HOST_PROD;
export const DB_PORT = process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;