// src/app/drizzle/drizzle01/schema.ts

import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id"),
    email: text("email"),
    createdAt: timestamp("createdAt")
});
