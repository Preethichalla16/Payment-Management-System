// Mock data for users and payments
export interface User {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
}

export interface Payment {
  id: number;
  userId: number;
  amount: number;
  status: "Pending" | "Completed" | "Failed";
  category: "Card" | "UPI" | "Bank Transfer";
  date: string;
}

export const users: User[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@fintech.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@fintech.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Carol Lee",
    email: "carol@fintech.com",
    role: "User",
    status: "Inactive",
  },
];

export const payments: Payment[] = [
  {
    id: 1001,
    userId: 1,
    amount: 2500,
    status: "Completed",
    category: "Card",
    date: "2026-02-01",
  },
  {
    id: 1002,
    userId: 2,
    amount: 1200,
    status: "Pending",
    category: "UPI",
    date: "2026-02-02",
  },
  {
    id: 1003,
    userId: 3,
    amount: 500,
    status: "Failed",
    category: "Bank Transfer",
    date: "2026-02-03",
  },
  {
    id: 1004,
    userId: 2,
    amount: 800,
    status: "Completed",
    category: "Card",
    date: "2026-02-03",
  },
];
