import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User schema (keeping original for authentication if needed)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Contact Form schema
export const contactForms = pgTable("contact_forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const contactFormSchema = createInsertSchema(contactForms).pick({
  name: true, 
  email: true,
  phone: true,
  subject: true,
  message: true
});

export type InsertContactForm = z.infer<typeof contactFormSchema>;
export type ContactForm = typeof contactForms.$inferSelect;

// Package subscription schema for newsletter
export const subscriptions = pgTable("subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const subscriptionSchema = createInsertSchema(subscriptions).pick({
  email: true
});

export type InsertSubscription = z.infer<typeof subscriptionSchema>;
export type Subscription = typeof subscriptions.$inferSelect;
