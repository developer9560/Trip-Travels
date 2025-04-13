import { 
  users, User, InsertUser,
  contactForms, ContactForm, InsertContactForm,
  subscriptions, Subscription, InsertSubscription 
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact form methods
  createContactForm(form: InsertContactForm): Promise<ContactForm>;
  getContactForms(): Promise<ContactForm[]>;
  
  // Subscription methods
  createSubscription(subscription: InsertSubscription): Promise<Subscription>;
  getSubscriptionByEmail(email: string): Promise<Subscription | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private subscriptions: Map<number, Subscription>;
  private userCurrentId: number;
  private formCurrentId: number;
  private subscriptionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.subscriptions = new Map();
    this.userCurrentId = 1;
    this.formCurrentId = 1;
    this.subscriptionCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async createContactForm(form: InsertContactForm): Promise<ContactForm> {
    const id = this.formCurrentId++;
    const createdAt = new Date();
    const contactForm: ContactForm = { ...form, id, createdAt };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }
  
  async getContactForms(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values());
  }
  
  // Subscription methods
  async createSubscription(subscription: InsertSubscription): Promise<Subscription> {
    const existingSubscription = await this.getSubscriptionByEmail(subscription.email);
    if (existingSubscription) {
      return existingSubscription;
    }
    
    const id = this.subscriptionCurrentId++;
    const createdAt = new Date();
    const newSubscription: Subscription = { ...subscription, id, createdAt };
    this.subscriptions.set(id, newSubscription);
    return newSubscription;
  }
  
  async getSubscriptionByEmail(email: string): Promise<Subscription | undefined> {
    return Array.from(this.subscriptions.values()).find(
      (subscription) => subscription.email === email,
    );
  }
}

export const storage = new MemStorage();
