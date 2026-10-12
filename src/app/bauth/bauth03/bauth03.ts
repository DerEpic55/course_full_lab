import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

// TODO: объявить таблицу users

export const users = pgTable(
    "users",
    {
        id: uuid("id").primaryKey(),
        email: text("email").notNull(),
        createdAt: timestamp("createdAt").notNull()
    }
)

// TODO: объявить таблицу sessions
export const sessions = pgTable(
    "sessions",
    {
        id: uuid("id").primaryKey(),
        userId: uuid("userId").notNull(),
        expiresAt: timestamp("expiresAt").notNull()
    }
)
