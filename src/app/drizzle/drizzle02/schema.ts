import { pgTable, serial, varchar, timestamp } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    email: varchar("email").notNull(),
    createdAt: timestamp("createdAt").defaultNow()
});
