import { env } from './env'

import { Database } from "bun:sqlite";

export const db = new Database(env.DB_URL)