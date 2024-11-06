Creator:- ABHISHEK SHARMA

# 🚀 Chatting Application  - Real-Time Chat Application

A modern, secure, and feature-rich real-time chat application built with React, Node.js, Socket.IO, and JWT authentication.

![ChatWave Demo](https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=2000&auto=format&fit=crop)

## ✨ Features

- **Real-time Communication**
  - Instant message delivery
  - Typing indicators
  - Online/offline status
  - Read receipts

- **Authentication & Security**
  - JWT-based authentication
  - Password encryption
  - Protected routes
  - Session management

- **Rich Chat Features**
  - One-on-one messaging
  - Group chats
  - File sharing
  - Emoji support
  - Message search
  - Chat history

- **User Experience**
  - Responsive design
  - Dark/Light mode
  - Push notifications
  - Message threading
  - User profiles

## 🛠️ Tech Stack

### Frontend
- React 18
- TypeScript
- TailwindCSS
- Socket.IO Client
- Lucide React (Icons)
- React Router
- Zustand (State Management)

### Backend
- Node.js
- Express.js
- Socket.IO
- MongoDB
- JWT Authentication
- bcrypt

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB
- npm/yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ABHI-Theq/Chatting-Application.git
cd chatapp
```

2. **Frontend Setup**
```bash
cd chatapp
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

3. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
# Configure your environment variables
npm run dev
```

### Environment Variables

#### Frontend (.env)
```
VITE_API_URL=http://localhost:4000
VITE_SOCKET_URL=http://localhost:5000
VITE_JWT_SECRET=your_jwt_secret
```

#### Backend (.env)
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/chatting-application
JWT_SECRET=your_jwt_secret
NODE_ENV=development
```

## 📝 API Documentation

### Authentication Endpoints
- POST /api/auth/signup - Register new user
- POST /api/auth/login - User login
- POST /api/auth/refresh - Refresh token
- POST /api/auth/logout - User logout

### Chat Endpoints
- GET /api/messages/:id - Get user's chats
- POST /api/messages/send/:id - Create new chat
- DELETE /api/chats/:id - Delete chat

### Message Endpoints
- GET /api/messages/:chatId - Get chat messages
- POST /api/messages - Send message
- PUT /api/messages/:id - Update message
- DELETE /api/messages/:id - Delete message

## 🔒 Socket Events

### Client Events
- `connect` - Socket connection
- `join_room` - Join chat room
- `leave_room` - Leave chat room
- `send_message` - Send new message
- `typing` - User typing indicator

### Server Events
- `receive_message` - New message received
- `user_typing` - User is typing
- `user_status` - User online/offline status
- `message_read` - Message read receipt

## 🔐 Authentication Flow

1. User registers/logs in through REST API
2. Server validates credentials and returns JWT
3. Client stores JWT in local storage
4. JWT is included in Authorization header for API requests
5. Socket connection authenticated using JWT
6. Token refresh mechanism handles session extension

## 🎯 Future Enhancements

- Voice/Video calls
- End-to-end encryption
- Message reactions
- Custom themes
- Message translation
- Chat backup/export

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👥 Authors

- Your Name - [GitHub](https://github.com/ABHI-Theq)

## 🙏 Acknowledgments

- Socket.IO team
- MongoDB team
- React community
- Node.js community
