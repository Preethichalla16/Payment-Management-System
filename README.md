# Payments Management System (PMS)

## Project Overview

The **Payments Management System (PMS)** is a Vue.js (TypeScript) frontend application built for a fintech startup to manage **users** and **payment transactions** with clarity and traceability.

The application provides dashboards and forms to:
- Manage users
- Create, view, and update payment records
- Visualize payment status and details
- Ensure test coverage for critical payment flows

---

## 🎯 Problem Statement

A fintech startup needs a **secure internal system** to manage all payment flows with proper traceability and reporting.

This project focuses on:
- Clean UI using Vue components
- Well-structured views for users and payments
- Unit testing for major payment components

---

## 🛠️ Tech Stack

- **Vue.js 3**
- **TypeScript**
- **Vue Router**
- **Vuex / Pinia**
- **Jest**
- **Vue Test Utils**
- **Mock Data**

---

## 🚀 Core Features

### 👤 User Management

**Views**
- **UserList.vue**  
  Displays all users

- **UserForm.vue**  
  Create and update users

- **UserDetail.vue**  
  View user details

---

### 💰 Payment Management

**Views**
- **PaymentList.vue**  
  Displays all payments

- **PaymentDetail.vue**  
  Shows payment details by payment ID

- **PaymentForm.vue**  
  Create or update payment records

---

### 📊 Dashboard

- **Dashboard.vue**  
  Overview of users and payments

---

## 🧪 Testing

Unit tests are written using **Jest** and **Vue Test Utils**.

### Test Coverage

Each major payment component contains **at least 2 unit test cases**:

- **PaymentForm.spec.ts**
  - Renders the payment form correctly
  - Submits valid payment data

- **PaymentList.spec.ts**
  - Displays payment list
  - Handles payment data rendering

- **PaymentDetail.spec.ts**
  - Loads payment details by ID
  - Handles missing or invalid payment ID

Test files are located in:
```text
PMS/
├── src/
│   ├── store/
│   │   └── index.ts
│   │
│   ├── views/
│   │   ├── Dashboard.vue
│   │   ├── PaymentList.vue
│   │   ├── PaymentDetail.vue
│   │   ├── PaymentForm.vue
│   │   ├── UserList.vue
│   │   ├── UserForm.vue
│   │   └── UserDetail.vue
│   │
│   ├── App.vue
│   ├── main.ts
│   ├── shims-vue.d.ts
│   └── vue-router.d.ts
│
├── tests/
│   └── unit/
│       ├── PaymentList.spec.ts
│       ├── PaymentDetail.spec.ts
│       └── PaymentForm.spec.ts
│
├── .browserslistrc
├── .gitignore
├── babel.config.js
├── jest.config.js
├── package.json
├── package-lock.json
└── README.md
```
## Application Screenshots

### Dashboard
<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/db3cbce6-fe2c-4408-8cb0-47cffae3684a" />

 
### User Management

<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/2b0856c4-6c9b-45ac-a163-679b4289c5ea" />

 
### Adding User

<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/128b6966-20dd-41eb-b72b-b57914e47e86" />

 
### Payment Management

<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/716fcd17-6be8-43eb-b447-afce69bfcdbd" />

 
### Adding Payment

<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/0468003b-6a50-4cf1-9721-4acbe162c774" />

 
### Viewing Payment

<img width="1512" height="982" alt="image" src="https://github.com/user-attachments/assets/7fabe270-a1e6-4214-9222-ba925847125f" />


 
 
