import type { Customers, OrderItems, Orders, Products, Users } from "../types";

const products: Products[] = [
  {
    id: 1,
    name: "Espresso Beans 1kg",
    description: "Premium dark roast coffee beans",
    price: 450.00,
    cost: 300.00,
    sku: "COF-001",
    stock: 120,
    isActive: true,
    createdAt: "2025-07-15T10:00:00Z",
  },
  {
    id: 2,
    name: "Milk Frother",
    description: "Handheld electric frother",
    price: 1200.00,
    cost: 850.00,
    sku: "KTC-103",
    stock: 45,
    isActive: true,
    createdAt: "2025-07-14T09:30:00Z",
  },
  {
    id: 3,
    name: "Ceramic Coffee Mug",
    description: "Matte black 12oz coffee mug",
    price: 180.00,
    cost: 90.00,
    sku: "MUG-555",
    stock: 200,
    isActive: true,
    createdAt: "2025-07-10T08:45:00Z",
  }
];

const customers: Customers[] = [
  {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan@example.com",
    phone: "09171234567",
    createdAt: "2025-07-12T13:00:00Z",
  },
  {
    id: 2,
    name: "Maria Santos",
    email: "maria.santos@gmail.com",
    phone: "09987654321",
    createdAt: "2025-07-13T15:45:00Z",
  },
  {
    id: 3,
    name: "Carlos Reyes",
    email: null,
    phone: null,
    createdAt: "2025-07-14T09:10:00Z",
  }
];

const orders: Orders[] = [
  {
    id: 1,
    customerId: 1,
    userId: 5,
    status: "completed",
    totalAmount: 870.00,
    paidAmount: 870.00,
    createdAt: "2025-07-15T11:30:00Z",
    items: []
  },
  {
    id: 2,
    customerId: 2,
    userId: 5,
    status: "pending",
    totalAmount: 1200.00,
    paidAmount: 0.00,
    createdAt: "2025-07-15T12:15:00Z",
    items: []
  },
  {
    id: 3,
    customerId: null,
    userId: 6,
    status: "completed",
    totalAmount: 180.00,
    paidAmount: 180.00,
    createdAt: "2025-07-15T13:00:00Z",
    items: []
  }
];

const orderItems: OrderItems[] = [
  {
    id: 1,
    orderId: 1,
    productId: 1,
    quantity: 1,
    unitPrice: 450.00,
    discountApplied: 0,
    totalPrice: 450.00,
  },
  {
    id: 2,
    orderId: 1,
    productId: 3,
    quantity: 2,
    unitPrice: 180.00,
    discountApplied: 0,
    totalPrice: 360.00,
  },
  {
    id: 3,
    orderId: 3,
    productId: 3,
    quantity: 1,
    unitPrice: 180.00,
    discountApplied: 0,
    totalPrice: 180.00,
  }
];

export const sampleUsers: Users[] = [
  {
    id: 1,
    name: 'Alice Mendoza',
    email: 'alice@posapp.com',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Ben Santos',
    email: 'ben@posapp.com',
    role: 'agent',
  },
  {
    id: 2,
    name: 'Cathy Reyes',
    email: 'cathy@posapp.com',
    role: 'teller',
  },
];

// Exported functions (simulate fetching from backend)
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
export async function getProducts(): Promise<Products[]> {
  await delay(300);
  return products;
}

export async function getCustomers(): Promise<Customers[]> {
  await delay(300);
  return customers;
}

export async function getOrders(): Promise<Orders[]> {
  await delay(300);
  return orders;
}

export async function getOrderItems(): Promise<OrderItems[]> {
  await delay(300);
  return orderItems;
}

export async function getUsers(): Promise<Users[]> {
  await delay(300);
  return sampleUsers;
}

export async function getDevices(): Promise<Devices[]> {
  await delay(300);
  return [
    { id: 1, imei: '123456789012345', user_id: 1 },
    { id: 2, imei: '987654321098765', user_id: 2 },
    { id: 3, imei: '112233445566778', user_id: null },
  ];
}