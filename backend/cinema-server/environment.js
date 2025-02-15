import dotenv from "dotenv";
dotenv.config();

export const IP_SERVER = process.env.IP_SERVER;
export const PORT_SERVER = process.env.PORT_SERVER;

export const DB_HOST_DEV = process.env.DB_HOST_DEV;
export const DB_HOST_PROD = process.env.DB_HOST_PROD;
export const DB_PORT = process.env.DB_PORT;
export const DB_NAME = process.env.DB_NAME;

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export const SECRET_KEY = process.env.SECRET_KEY;

export const MAIL_HOST = process.env.MAIL_HOST;
export const MAIL_PORT = process.env.MAIL_PORT;
export const MAIL_USER = process.env.MAIL_USER;
export const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

export const SUBSCRIPTIONS_API_DEV = process.env.SUBSCRIPTIONS_API_DEV;
export const SUBSCRIPTIONS_API_PROD = process.env.SUBSCRIPTIONS_API_PROD;

export const CLIENT_DEV_PORT = process.env.CLIENT_DEV_PORT;
export const CLIENT_PROD_PORT = process.env.CLIENT_PROD_PORT;