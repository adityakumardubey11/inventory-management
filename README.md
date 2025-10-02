# 📦 Inventory Management Dashboard

> 🚀 A **full-stack inventory management system built with Next.js, Redux Toolkit, Node.js, and AWS.
This project provides a modern dashboard application for managing inventory with real-time data updates, scalable backend, and cloud integration.

---

## 🏆 Tech Stack & Tools

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge\&logo=next.js)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-764ABC?style=for-the-badge\&logo=redux\&logoColor=white)
![RTK Query](https://img.shields.io/badge/RTK%20Query-CA4245?style=for-the-badge\&logo=redux\&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![MUI DataGrid](https://img.shields.io/badge/Material--UI-007FFF?style=for-the-badge\&logo=mui\&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-FF6384?style=for-the-badge\&logo=chart.js\&logoColor=white)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge\&logo=prisma\&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge\&logo=postgresql\&logoColor=white)

![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge\&logo=amazonaws\&logoColor=white)
![Amplify](https://img.shields.io/badge/AWS%20Amplify-FF9900?style=for-the-badge\&logo=awsamplify\&logoColor=white)
![EC2](https://img.shields.io/badge/AWS%20EC2-FF9900?style=for-the-badge\&logo=amazonec2\&logoColor=white)
![RDS](https://img.shields.io/badge/AWS%20RDS-527FFF?style=for-the-badge\&logo=amazonrds\&logoColor=white)
![S3](https://img.shields.io/badge/AWS%20S3-DD344C?style=for-the-badge\&logo=amazons3\&logoColor=white)
![API Gateway](https://img.shields.io/badge/AWS%20API%20Gateway-CC2264?style=for-the-badge\&logo=amazonapigateway\&logoColor=white)

---

## ⚡ Features

* 🖥️ **Frontend** → Next.js + Tailwind + MUI DataGrid + Redux Toolkit
* ⚙️ **Backend** → Node.js + Express + Prisma + PostgreSQL
* ☁️ **Cloud Infra** → AWS RDS, EC2, Amplify, API Gateway, S3
* 📊 **Analytics & Visualization** → Recharts, interactive graphs
* 🔄 **State Management** → Redux Toolkit + RTK Query
* 🌍 **Scalable Deployment** with AWS

---

## 📸 Screenshots (Live Preview)

### 📊 Dashboard

![Dashboard](./screenshots/s1.png)

### 📋 Inventory Table

![Inventory Table](./screenshots/s2.png)

### 👟 Products

![Analytics](./screenshots/s3.png)

### 👤 Users

![Form](./screenshots/s4.png)

### ⚙️ Settings

![Stock](./screenshots/s5.png)

### 💹 Expenses 

![AWS](./screenshots/s6.png)

---

## 🛠️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/inventory-management.git
cd inventory-management
```

### Install dependencies

```bash
# Client
cd client
npm install

# Server
cd ../server
npm install
```

### Configure Environment

Create `.env` inside `server`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/inventorydb"
PORT=8000
```

---

## ▶️ Running Locally

```bash
# Start Backend (Port 8000)
cd server
npm run dev

# Start Frontend (Port 3000)
cd client
npm run dev
```

* 🌐 Frontend → **[http://localhost:3000](http://localhost:3000)**
* ⚙️ Backend → **[http://localhost:8000](http://localhost:8000)**

---

## 🌍 Deployment Guide

* **Frontend** → AWS Amplify
* **Backend** → AWS EC2 + API Gateway
* **Database** → AWS RDS (Postgres)
* **Storage** → AWS S3

---

## 🔗 Helpful Links

### 🖥 Backend

[Node.js](https://nodejs.org/en) | [VS Code](https://code.visualstudio.com/) | [PostgreSQL](https://www.postgresql.org/download/) | [PgAdmin](https://www.pgadmin.org/download/) | [Prisma Docs](https://www.prisma.io/docs) | [Postman](https://www.postman.com/downloads/)

### ☁️ AWS

[AWS](https://aws.amazon.com/) | [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html) | [AWS Billing](https://us-east-1.console.aws.amazon.com/billing/home) | [AWS Free Tier](https://aws.amazon.com/free/?all-free) | [AWS IPv4 Charges](https://aws.amazon.com/blogs/aws/new-aws-public-ipv4-addressing-options-and-pricing/) | [AWS IPv4 Free Tier](https://aws.amazon.com/about-aws/what-is-aws/)

### 🎨 Frontend

[Next.js](https://nextjs.org/docs/getting-started) | [Redux Toolkit](https://redux-toolkit.js.org/usage/nextjs) | [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | [Tailwind Docs](https://tailwindcss.com/docs/configuration) | [MUI Data Grid](https://mui.com/x/react-data-grid/) | [Recharts](https://recharts.org/en-US/api)

---

## 🎯 Future Enhancements

* 🔑 Role-based authentication (Admin, Manager, Staff)
* 📊 Sales & revenue tracking
* 📤 Export data (CSV / PDF)
* 🌍 Multi-language support

---

💡 *Made with ❤️ by Aditya Kumar Dubey using Next.js, Redux, Node.js, Prisma, PostgreSQL & AWS*

