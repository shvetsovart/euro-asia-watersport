# 🌊 WaterSport API Specification

Комплексное API для системы регистрации на экстремальные водные заплывы с современными best practices.

## 📋 Содержание

-   [🏗️ Архитектура](#️-архитектура)
-   [🔐 Аутентификация](#-аутентификация)
-   [📡 API Endpoints](#-api-endpoints)
-   [💳 Интеграция платежей](#-интеграция-платежей)
-   [📧 Email уведомления](#-email-уведомления)
-   [💾 Структура базы данных](#-структура-базы-данных)
-   [🛠️ Техническая реализация](#️-техническая-реализация)
-   [🔒 Безопасность](#-безопасность)
-   [📊 Мониторинг и логирование](#-мониторинг-и-логирование)

## 🏗️ Архитектура

### Технологический стек (рекомендуемый)

```
Backend Framework: Node.js + Express.js / Fastify / NestJS
Database: PostgreSQL + Redis (кеширование)
Auth: JWT + Refresh Tokens
Payments: Stripe / PayPal / CloudPayments
Email: SendGrid / AWS SES / Mailgun
File Storage: AWS S3 / Cloudinary
Monitoring: Winston + Sentry
Queue: Bull (Redis) для асинхронных задач
```

### Структура проекта

```
backend/
├── src/
│   ├── auth/           # Аутентификация и авторизация
│   ├── users/          # Управление пользователями
│   ├── challenges/     # Управление заплывами
│   ├── registrations/  # Регистрации на заплывы
│   ├── payments/       # Платежная система
│   ├── notifications/  # Email уведомления
│   ├── shared/         # Общие утилиты
│   └── database/       # Миграции и схемы
├── tests/
├── docs/
└── scripts/
```

## 🔐 Аутентификация

### JWT Token структура

```json
{
    "access_token": "eyJ...", // 15 минут
    "refresh_token": "eyJ...", // 7 дней
    "token_type": "Bearer",
    "expires_in": 900
}
```

### Middleware защиты

```javascript
// Middleware для проверки токена
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Access token required" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: "Invalid token" });
        req.user = user;
        next();
    });
};
```

## 📡 API Endpoints

### 1. Аутентификация и регистрация

#### POST `/api/auth/register`

Регистрация нового пользователя

**Request Body:**

```json
{
    "email": "user@example.com",
    "password": "SecurePassword123!",
    "firstName": "Иван",
    "lastName": "Петров"
}
```

**Response (201):**

```json
{
    "message": "Registration successful. Check your email for verification code.",
    "userId": "uuid-v4",
    "verificationRequired": true
}
```

#### POST `/api/auth/verify-email`

Подтверждение email с кодом

**Request Body:**

```json
{
    "email": "user@example.com",
    "verificationCode": "123456"
}
```

**Response (200):**

```json
{
    "message": "Email verified successfully",
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "user": {
        "id": "uuid-v4",
        "email": "user@example.com",
        "firstName": "Иван",
        "lastName": "Петров",
        "emailVerified": true
    }
}
```

#### POST `/api/auth/resend-verification`

Повторная отправка кода подтверждения

**Request Body:**

```json
{
    "email": "user@example.com"
}
```

#### POST `/api/auth/login`

Авторизация пользователя

**Request Body:**

```json
{
    "email": "user@example.com",
    "password": "SecurePassword123!"
}
```

**Response (200):**

```json
{
    "access_token": "eyJ...",
    "refresh_token": "eyJ...",
    "token_type": "Bearer",
    "expires_in": 900,
    "user": {
        "id": "uuid-v4",
        "email": "user@example.com",
        "firstName": "Иван",
        "lastName": "Петров"
    }
}
```

#### POST `/api/auth/refresh`

Обновление токена

**Request Body:**

```json
{
    "refresh_token": "eyJ..."
}
```

#### POST `/api/auth/logout`

Выход из системы (invalidate tokens)

**Headers:** `Authorization: Bearer <token>`

### 2. Восстановление пароля

#### POST `/api/auth/forgot-password`

Запрос на восстановление пароля

**Request Body:**

```json
{
    "email": "user@example.com"
}
```

#### POST `/api/auth/reset-password`

Сброс пароля с кодом

**Request Body:**

```json
{
    "email": "user@example.com",
    "resetCode": "123456",
    "newPassword": "NewSecurePassword123!"
}
```

#### POST `/api/auth/change-password`

Смена пароля (авторизованный пользователь)

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
    "currentPassword": "OldPassword123!",
    "newPassword": "NewPassword123!"
}
```

### 3. Управление заплывами

#### GET `/api/challenges`

Получение списка доступных заплывов

**Response (200):**

```json
{
    "challenges": [
        {
            "id": "challenge-uuid",
            "title": "150km Solo Challenge",
            "subtitle": "Индивидуальный экстремальный заплыв",
            "distance": "150km",
            "duration": "5 дней",
            "price": 150000,
            "currency": "RUB",
            "startDate": "2024-06-01T00:00:00Z",
            "endDate": "2024-06-05T23:59:59Z",
            "registrationDeadline": "2024-05-15T23:59:59Z",
            "maxParticipants": 50,
            "currentParticipants": 23,
            "status": "open", // open, closed, cancelled, completed
            "category": "solo",
            "description": "Полное описание заплыва...",
            "stages": [
                {
                    "day": 1,
                    "distance": "22.5km",
                    "description": "Первый этап..."
                }
            ]
        }
    ]
}
```

#### GET `/api/challenges/:id`

Детальная информация о заплыве

### 4. Регистрация на заплыв (Приватная)

#### POST `/api/registrations`

Регистрация на заплыв

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
    "challengeId": "challenge-uuid",
    "participantInfo": {
        "firstName": "Иван",
        "lastName": "Петров",
        "email": "ivan@example.com",
        "phone": "+7900123456",
        "country": "Россия",
        "nationality": "Российская",
        "emergencyContact": {
            "name": "Мария Петрова",
            "phone": "+7900654321",
            "relation": "Супруга"
        },
        "medicalInfo": {
            "hasAllergies": false,
            "medications": "",
            "additionalInfo": ""
        }
    }
}
```

**Response (201):**

```json
{
    "registrationId": "registration-uuid",
    "participantNumber": 24,
    "paymentUrl": "https://payment-provider.com/pay/session-id",
    "paymentSessionId": "pi_1234567890",
    "amount": 150000,
    "currency": "RUB",
    "expiresAt": "2024-03-15T15:30:00Z"
}
```

#### GET `/api/registrations/:id/status`

Статус регистрации и платежа

**Headers:** `Authorization: Bearer <token>`

**Response (200):**

```json
{
    "registrationId": "registration-uuid",
    "status": "confirmed", // pending, confirmed, cancelled, refunded
    "paymentStatus": "paid", // pending, paid, failed, refunded
    "participantNumber": 24,
    "challengeInfo": {
        "id": "challenge-uuid",
        "title": "150km Solo Challenge",
        "startDate": "2024-06-01T00:00:00Z"
    }
}
```

### 5. Информация о пользователе и заплывах (Приватная)

#### GET `/api/users/me/challenge-status/:challengeId`

Статус пользователя относительно конкретного заплыва

**Headers:** `Authorization: Bearer <token>`

**Response (200):**

```json
{
    "status": "registered", // not_registered, registered, cancelled
    "registration": {
        "id": "registration-uuid",
        "participantNumber": 24,
        "registrationDate": "2024-03-10T10:30:00Z",
        "paymentStatus": "paid"
    }
}
```

#### GET `/api/users/me/registrations`

Все регистрации пользователя

**Headers:** `Authorization: Bearer <token>`

**Query Parameters:**

-   `status` (optional): `all`, `active`, `completed`, `cancelled`
-   `page` (optional): номер страницы (default: 1)
-   `limit` (optional): количество на странице (default: 10)

**Response (200):**

```json
{
    "registrations": [
        {
            "id": "registration-uuid",
            "challengeId": "challenge-uuid",
            "challengeTitle": "150km Solo Challenge",
            "participantNumber": 24,
            "registrationDate": "2024-03-10T10:30:00Z",
            "status": "confirmed",
            "paymentStatus": "paid",
            "amount": 150000,
            "currency": "RUB",
            "participantInfo": {
                "firstName": "Иван",
                "lastName": "Петров",
                "email": "ivan@example.com",
                "phone": "+7900123456",
                "country": "Россия",
                "nationality": "Российская"
            },
            "challenge": {
                "startDate": "2024-06-01T00:00:00Z",
                "endDate": "2024-06-05T23:59:59Z",
                "distance": "150km",
                "status": "open"
            }
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 3,
        "totalPages": 1
    }
}
```

### 6. Профиль пользователя

#### GET `/api/users/me`

Получение профиля пользователя

**Headers:** `Authorization: Bearer <token>`

#### PUT `/api/users/me`

Обновление профиля пользователя

**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
    "firstName": "Иван",
    "lastName": "Петров",
    "phone": "+7900123456",
    "country": "Россия"
}
```

### 7. Административные эндпоинты (опционально)

#### GET `/api/admin/registrations`

Список всех регистраций (для администраторов)

#### GET `/api/admin/challenges/:id/participants`

Участники конкретного заплыва

## 💳 Интеграция платежей

### Webhook для обработки платежей

#### POST `/api/webhooks/payment`

Webhook от платежной системы

```javascript
// Пример обработки Stripe webhook
app.post('/api/webhooks/payment', express.raw({type: 'application/json'}), (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);

    switch (event.type) {
      case 'payment_intent.succeeded':
        await handlePaymentSuccess(event.data.object);
        break;
      case 'payment_intent.payment_failed':
        await handlePaymentFailure(event.data.object);
        break;
    }

    res.json({received: true});
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});
```

## 📧 Email уведомления

### Типы писем

1. **Подтверждение регистрации аккаунта**
2. **Восстановление пароля**
3. **Подтверждение регистрации на заплыв**
4. **Уведомление администратору о новой регистрации**
5. **Напоминания о приближающемся заплыве**

### Шаблоны писем

```javascript
// Конфигурация email сервиса
const emailTemplates = {
    REGISTRATION_CONFIRMATION: "registration-confirmation",
    PAYMENT_SUCCESS: "payment-success",
    ADMIN_NOTIFICATION: "admin-new-registration",
    PASSWORD_RESET: "password-reset",
    EVENT_REMINDER: "event-reminder",
};

// Отправка письма после успешной оплаты
const sendPaymentSuccessEmail = async (registration) => {
    await emailService.send({
        to: registration.email,
        template: emailTemplates.PAYMENT_SUCCESS,
        data: {
            participantName: `${registration.firstName} ${registration.lastName}`,
            challengeTitle: registration.challenge.title,
            participantNumber: registration.participantNumber,
            startDate: registration.challenge.startDate,
            amount: registration.amount,
            currency: registration.currency,
        },
    });

    // Уведомление администратору
    await emailService.send({
        to: process.env.ADMIN_EMAIL,
        template: emailTemplates.ADMIN_NOTIFICATION,
        data: {
            registration,
            challenge: registration.challenge,
        },
    });
};
```

## 💾 Структура базы данных

### PostgreSQL Schema

```sql
-- Пользователи
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    country VARCHAR(100),
    email_verified BOOLEAN DEFAULT FALSE,
    email_verification_code VARCHAR(6),
    email_verification_expires_at TIMESTAMP,
    password_reset_code VARCHAR(6),
    password_reset_expires_at TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Refresh токены
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Заплывы
CREATE TABLE challenges (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    description TEXT,
    distance VARCHAR(50),
    duration VARCHAR(50),
    price INTEGER NOT NULL, -- в копейках
    currency VARCHAR(3) DEFAULT 'RUB',
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    registration_deadline TIMESTAMP NOT NULL,
    max_participants INTEGER,
    status VARCHAR(20) DEFAULT 'open', -- open, closed, cancelled, completed
    category VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Этапы заплывов
CREATE TABLE challenge_stages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
    day INTEGER NOT NULL,
    distance VARCHAR(50),
    description TEXT,
    stage_order INTEGER NOT NULL
);

-- Регистрации на заплывы
CREATE TABLE registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    challenge_id UUID REFERENCES challenges(id) ON DELETE CASCADE,
    participant_number INTEGER UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'pending', -- pending, confirmed, cancelled, refunded
    payment_status VARCHAR(20) DEFAULT 'pending', -- pending, paid, failed, refunded
    payment_intent_id VARCHAR(255), -- ID платежа в платежной системе
    amount INTEGER NOT NULL, -- в копейках
    currency VARCHAR(3) DEFAULT 'RUB',

    -- Информация об участнике
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    nationality VARCHAR(100) NOT NULL,

    -- Экстренный контакт
    emergency_contact_name VARCHAR(200),
    emergency_contact_phone VARCHAR(20),
    emergency_contact_relation VARCHAR(100),

    -- Медицинская информация
    has_allergies BOOLEAN DEFAULT FALSE,
    medications TEXT,
    medical_additional_info TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    UNIQUE(challenge_id, participant_number)
);

-- Логи платежей
CREATE TABLE payment_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    registration_id UUID REFERENCES registrations(id) ON DELETE CASCADE,
    payment_intent_id VARCHAR(255),
    status VARCHAR(50),
    amount INTEGER,
    currency VARCHAR(3),
    provider_response JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Индексы для производительности
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_email_verification ON users(email_verification_code, email_verification_expires_at);
CREATE INDEX idx_refresh_tokens_user_id ON refresh_tokens(user_id);
CREATE INDEX idx_refresh_tokens_token ON refresh_tokens(token);
CREATE INDEX idx_registrations_user_id ON registrations(user_id);
CREATE INDEX idx_registrations_challenge_id ON registrations(challenge_id);
CREATE INDEX idx_registrations_payment_intent ON registrations(payment_intent_id);
```

### Redis структура для кеширования

```javascript
// Кеш структуры
const CACHE_KEYS = {
    CHALLENGES: "challenges:all",
    CHALLENGE_DETAIL: (id) => `challenge:${id}`,
    USER_REGISTRATIONS: (userId) => `user:${userId}:registrations`,
    CHALLENGE_PARTICIPANTS: (challengeId) =>
        `challenge:${challengeId}:participants`,
};

// TTL (время жизни кеша)
const CACHE_TTL = {
    CHALLENGES: 300, // 5 минут
    CHALLENGE_DETAIL: 600, // 10 минут
    USER_REGISTRATIONS: 60, // 1 минута
    CHALLENGE_PARTICIPANTS: 300, // 5 минут
};
```

## 🛠️ Техническая реализация

### Environment Variables

```bash
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/watersport
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_REFRESH_SECRET=your-refresh-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

# Email Service (SendGrid example)
SENDGRID_API_KEY=SG.xxx
FROM_EMAIL=noreply@watersport.com
ADMIN_EMAIL=admin@watersport.com

# Payment Provider (Stripe example)
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx

# App
NODE_ENV=production
PORT=3000
BASE_URL=https://api.watersport.com

# Security
BCRYPT_ROUNDS=12
RATE_LIMIT_WINDOW_MS=900000 # 15 минут
RATE_LIMIT_MAX_REQUESTS=100
```

### Middleware стек

```javascript
// app.js
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const compression = require("compression");

const app = express();

// Security middleware
app.use(helmet());
app.use(
    cors({
        origin:
            process.env.FRONTEND_URLS?.split(",") || "http://localhost:3000",
        credentials: true,
    })
);

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 900000,
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100,
    message: "Too many requests from this IP",
});
app.use("/api/", limiter);

// Body parsing
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());

// Logging
app.use(requestLogger);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", authenticateToken, userRoutes);
app.use("/api/challenges", challengeRoutes);
app.use("/api/registrations", authenticateToken, registrationRoutes);
app.use("/api/webhooks", webhookRoutes);

// Error handling
app.use(errorHandler);
```

### Валидация запросов

```javascript
// validators/auth.js
const Joi = require("joi");

const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
        .min(8)
        .pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
        )
        .required(),
    firstName: Joi.string().min(2).max(50).required(),
    lastName: Joi.string().min(2).max(50).required(),
});

const validateRegistration = (req, res, next) => {
    const { error } = registerSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            error: "Validation error",
            details: error.details.map((d) => d.message),
        });
    }
    next();
};
```

### Генерация номеров участников

```javascript
// services/participantNumberService.js
class ParticipantNumberService {
    static async getNextParticipantNumber(challengeId) {
        const transaction = await db.transaction();

        try {
            // Блокируем таблицу для получения следующего номера
            const lastRegistration = await db.query(
                `
        SELECT participant_number 
        FROM registrations 
        WHERE challenge_id = $1 
        ORDER BY participant_number DESC 
        LIMIT 1 
        FOR UPDATE
      `,
                [challengeId],
                { transaction }
            );

            const nextNumber = lastRegistration[0]?.participant_number
                ? lastRegistration[0].participant_number + 1
                : 1;

            await transaction.commit();
            return nextNumber;
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    }
}
```

## 🔒 Безопасность

### Основные принципы

1. **Валидация всех входных данных**
2. **Защита от SQL инъекций** (параметризованные запросы)
3. **Rate limiting** на все эндпоинты
4. **HTTPS only** в продакшене
5. **Secure headers** (helmet.js)
6. **Input sanitization**
7. **Аудит логирование**

### Хеширование паролей

```javascript
const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
    const rounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
    return await bcrypt.hash(password, rounds);
};

const verifyPassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};
```

### Защита от брутфорса

```javascript
// Specific rate limit for auth endpoints
const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 5, // максимум 5 попыток
    skipSuccessfulRequests: true,
    keyGenerator: (req) => req.ip + ":" + (req.body.email || ""),
    message: "Too many login attempts, please try again later",
});

app.use("/api/auth/login", authLimiter);
app.use("/api/auth/register", authLimiter);
```

## 📊 Мониторинг и логирование

### Структура логов

```javascript
// utils/logger.js
const winston = require("winston");

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || "info",
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    defaultMeta: { service: "watersport-api" },
    transports: [
        new winston.transports.File({
            filename: "logs/error.log",
            level: "error",
        }),
        new winston.transports.File({ filename: "logs/combined.log" }),
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});
```

### Метрики для мониторинга

1. **Response time** для каждого эндпоинта
2. **Error rate** по типам ошибок
3. **Active users** количество
4. **Registration conversion rate**
5. **Payment success rate**
6. **Email delivery rate**

### Health Check эндпоинт

```javascript
// GET /api/health
app.get("/api/health", async (req, res) => {
    const health = {
        status: "ok",
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        services: {
            database: "checking",
            redis: "checking",
            email: "checking",
        },
    };

    try {
        // Проверка базы данных
        await db.query("SELECT 1");
        health.services.database = "ok";

        // Проверка Redis
        await redis.ping();
        health.services.redis = "ok";

        // Проверка email сервиса
        // await emailService.healthCheck();
        health.services.email = "ok";

        res.status(200).json(health);
    } catch (error) {
        health.status = "error";
        health.error = error.message;
        res.status(503).json(health);
    }
});
```

## 🚀 Развертывание и DevOps

### Docker конфигурация

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

USER nodejs

EXPOSE 3000

CMD ["npm", "start"]
```

### Docker Compose для разработки

```yaml
# docker-compose.yml
version: "3.8"

services:
    api:
        build: .
        ports:
            - "3000:3000"
        environment:
            - NODE_ENV=development
            - DATABASE_URL=postgresql://watersport:password@postgres:5432/watersport
            - REDIS_URL=redis://redis:6379
        depends_on:
            - postgres
            - redis
        volumes:
            - .:/app
            - /app/node_modules

    postgres:
        image: postgres:15-alpine
        environment:
            - POSTGRES_DB=watersport
            - POSTGRES_USER=watersport
            - POSTGRES_PASSWORD=password
        ports:
            - "5432:5432"
        volumes:
            - postgres_data:/var/lib/postgresql/data

    redis:
        image: redis:7-alpine
        ports:
            - "6379:6379"

volumes:
    postgres_data:
```

## 📝 Дополнительные рекомендации

### Оптимизация производительности

1. **Database Connection Pooling**
2. **Redis кеширование** для часто запрашиваемых данных
3. **Pagination** для больших списков
4. **Database indexing** на часто используемые поля
5. **Background jobs** для тяжелых операций (отправка email)

### Тестирование

```javascript
// tests/auth.test.js
const request = require("supertest");
const app = require("../app");

describe("Authentication", () => {
    test("POST /api/auth/register should create new user", async () => {
        const response = await request(app).post("/api/auth/register").send({
            email: "test@example.com",
            password: "SecurePass123!",
            firstName: "Test",
            lastName: "User",
        });

        expect(response.status).toBe(201);
        expect(response.body.message).toContain("Registration successful");
    });
});
```

### CI/CD Pipeline пример

```yaml
# .github/workflows/deploy.yml
name: Deploy API

on:
    push:
        branches: [main]

jobs:
    test:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - uses: actions/setup-node@v3
              with:
                  node-version: "18"
            - run: npm ci
            - run: npm test

    deploy:
        needs: test
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - name: Deploy to production
              run: |
                  # Deploy script here
```

---

## 🎯 Заключение

Данная спецификация предоставляет полную архитектуру для современного API водного спорта с учетом:

-   **Безопасности** (JWT, валидация, rate limiting)
-   **Масштабируемости** (кеширование, пагинация, индексы)
-   **Надежности** (error handling, мониторинг, логирование)
-   **Современных практик** (REST API, webhooks, async operations)

API готов для интеграции с существующим Next.js фронтендом и может быть расширен дополнительными функциями по мере необходимости.
