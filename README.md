# CartBliss 🛒

CartBliss is a modern e-commerce platform built using the **MERN (MongoDB, Express.js, React, Node.js) stack**. It offers a seamless shopping experience with essential features like product browsing, cart management, secure authentication, and order processing.

## 🚀 Features

- User authentication (JWT-based login & registration)
- Product listing with search & filtering
- Shopping cart & checkout process
- Order management
- Admin dashboard for managing products & orders
- Responsive UI with a modern design

## 🛠 Tech Stack

- **Frontend:** React, Redux, Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Token)

## 📂 Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/kshatsharmaaa/CartBliss.git
   cd cartbliss
   ```

2. **Install dependencies**
   ```sh
   # Backend dependencies
   cd server
   npm install

   # Frontend dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the `server` directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the application**
   ```sh
   # Start backend server
   cd server
   npm start
   
   # Start frontend
   cd ../client
   npm start
   ```

5. **Open in Browser**
   - Visit `http://localhost:3001` to explore CartBliss.

## 🛡 Authentication
- Uses **JWT-based authentication** for secure user login and registration.
- Admin panel access restricted to authorized users.

## 📌 Future Enhancements
- Wishlist functionality
- Product reviews & ratings
- Order tracking system

## 🤝 Contributing
Feel free to contribute! Fork the repository and submit a pull request.

## 📜 License
This project is licensed under the MIT License.

---
### 🔗 Stay Connected
For updates and discussions, follow the repository or reach out on [LinkedIn/Twitter/etc.].
