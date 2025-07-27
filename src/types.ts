export interface MenuItem { name: string; icon?: React.ReactElement; route?: string; }
export interface MenuItems extends MenuItem { children?: MenuItems[]; }

export interface Products {
  id: number;
  name: string;
  description?: string | null;
  price: number;
  cost: number;
  sku: string;
  stock: number;
  isActive: boolean;
  createdAt: string; // ISO timestamp
}

export interface Customers {
  id: number;
  name: string;
  email?: string | null;
  phone?: string | null;
  createdAt: string; // ISO timestamp
}

export interface OrderItems {
  id: number;
  orderId: number;
  productId: number;
  quantity: number;
  unitPrice: number;
  discountApplied: number;
  totalPrice: number;
}

export interface Orders {
  id: number;
  customerId?: number | null;
  userId: number;
  status: 'completed' | 'pending' | 'cancelled';
  totalAmount: number;
  paidAmount: number;
  createdAt: string; // ISO timestamp
  items?: OrderItems[]; // Optional nested items
}

export interface Users {
  id: number;
  name: string;
  email: string;
  device_id?: string | null;
  role: 'admin' | 'agent' | 'teller';
}

export interface Devices {
  id: number;
  imei: string;
  user_id?: number | null;
}