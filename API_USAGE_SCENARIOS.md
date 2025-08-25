# 🎯 API Usage Scenarios - Когда дергается каждая ручка

Подробное описание пользовательских сценариев и случаев использования каждого API эндпоинта.

## 🔄 Пользовательские сценарии

### 1. 📝 Регистрация нового пользователя

**Сценарий:** Новый пользователь хочет зарегистрироваться на сайте

**Последовательность вызовов:**

```
1. POST /api/auth/register
   ↓ (пользователь получает email с кодом)
2. POST /api/auth/verify-email
   ↓ (пользователь авторизован, получает токены)
```

**Когда происходит:**

-   При нажатии "Зарегистрироваться" на странице регистрации
-   При подтверждении email кода из письма

---

### 2. 🔐 Авторизация существующего пользователя

**Сценарий:** Пользователь хочет войти в свой аккаунт

**Последовательность вызовов:**

```
1. POST /api/auth/login
   ↓ (пользователь получает токены и перенаправляется в личный кабинет)
```

**Когда происходит:**

-   При нажатии "Войти" на странице авторизации
-   При автоматическом логине через сохраненные данные

---

### 3. 🔄 Обновление сессии

**Сценарий:** Access token истек, нужно обновить

**Последовательность вызовов:**

```
1. POST /api/auth/refresh
   ↓ (получение нового access token)
```

**Когда происходит:**

-   Автоматически при получении 401/403 ошибки
-   По таймеру перед истечением токена (за 2-3 минуты)
-   При каждом запуске приложения (если есть refresh token)

---

### 4. 🚪 Выход из системы

**Сценарий:** Пользователь хочет выйти из аккаунта

**Последовательность вызовов:**

```
1. POST /api/auth/logout
   ↓ (токены инвалидируются)
```

**Когда происходит:**

-   При нажатии "Выйти" в меню пользователя
-   При смене аккаунта

---

### 5. 🔑 Восстановление пароля

**Сценарий:** Пользователь забыл пароль

**Последовательность вызовов:**

```
1. POST /api/auth/forgot-password
   ↓ (отправка кода на email)
2. POST /api/auth/reset-password
   ↓ (установка нового пароля)
```

**Когда происходит:**

-   При нажатии "Забыли пароль?" на странице входа
-   При вводе кода из email и нового пароля

---

### 6. 🔒 Смена пароля (авторизованный пользователь)

**Сценарий:** Пользователь хочет сменить пароль в настройках

**Последовательность вызовов:**

```
1. POST /api/auth/change-password
   ↓ (смена пароля с проверкой старого)
```

**Когда происходит:**

-   В разделе "Настройки безопасности" личного кабинета
-   При принудительной смене пароля по требованию безопасности

---

### 7. 📧 Повторная отправка кода подтверждения

**Сценарий:** Пользователь не получил код или код истек

**Последовательность вызовов:**

```
1. POST /api/auth/resend-verification
   ↓ (отправка нового кода)
```

**Когда происходит:**

-   При нажатии "Отправить код повторно" на странице подтверждения email
-   Автоматически при попытке войти с неподтвержденным email

---

### 8. 🏊‍♂️ Просмотр доступных заплывов

**Сценарий:** Пользователь изучает доступные заплывы

**Последовательность вызовов:**

```
1. GET /api/challenges
   ↓ (получение списка всех заплывов)
2. GET /api/challenges/:id
   ↓ (детальная информация о конкретном заплыве)
```

**Когда происходит:**

-   При загрузке главной страницы
-   При переходе на страницу каталога заплывов
-   При клике на конкретный заплыв для просмотра деталей
-   При фильтрации или поиске заплывов

---

### 9. 📝 Регистрация на заплыв

**Сценарий:** Авторизованный пользователь регистрируется на заплыв

**Последовательность вызовов:**

```
1. GET /api/users/me/challenge-status/:challengeId
   ↓ (проверка, не зарегистрирован ли уже)
2. POST /api/registrations
   ↓ (создание регистрации и получение ссылки на оплату)
3. [Переход на платежную систему]
4. POST /api/webhooks/payment (webhook от платежной системы)
   ↓ (подтверждение оплаты и отправка писем)
```

**Когда происходит:**

-   При нажатии "Зарегистрироваться" на странице заплыва
-   После заполнения формы с личными данными
-   Автоматически при успешной оплате (webhook)

---

### 10. 📊 Проверка статуса регистрации

**Сценарий:** Пользователь проверяет статус своей регистрации

**Последовательность вызовов:**

```
1. GET /api/registrations/:id/status
   ↓ (получение текущего статуса платежа и регистрации)
```

**Когда происходит:**

-   После возврата с платежной системы
-   При переходе в личный кабинет
-   По таймеру для отслеживания статуса оплаты
-   При уведомлениях о смене статуса

---

### 11. 👤 Управление профилем пользователя

**Сценарий:** Пользователь просматривает/редактирует свой профиль

**Последовательность вызовов:**

```
1. GET /api/users/me
   ↓ (получение данных профиля)
2. PUT /api/users/me
   ↓ (обновление данных профиля)
```

**Когда происходит:**

-   При переходе в раздел "Мой профиль"
-   При сохранении изменений в профиле
-   При автоматическом обновлении данных пользователя

---

### 12. 🏊‍♀️ Мои заплывы (история регистраций)

**Сценарий:** Пользователь просматривает свои регистрации

**Последовательность вызовов:**

```
1. GET /api/users/me/registrations
   ↓ (получение списка всех регистраций пользователя)
```

**Когда происходит:**

-   При переходе в раздел "Мои заплывы"
-   При фильтрации регистраций по статусу
-   При пагинации через большой список регистраций
-   После успешной регистрации на новый заплыв

---

### 13. ✅ Проверка статуса участия в конкретном заплыве

**Сценарий:** Пользователь хочет узнать свой статус относительно заплыва

**Последовательность вызовов:**

```
1. GET /api/users/me/challenge-status/:challengeId
   ↓ (проверка статуса участия и номера участника)
```

**Когда происходит:**

-   При просмотре страницы заплыва (проверка, зарегистрирован ли)
-   Перед попыткой регистрации
-   При отображении персонального номера участника
-   В виджетах "Мой статус" на дашборде

---

## 🎯 Фронтенд интеграция

### Страница регистрации

```typescript
// Пример использования в компоненте регистрации
const RegisterPage = () => {
    const [step, setStep] = useState("register"); // register, verify

    const handleRegister = async (formData) => {
        const response = await api.post("/auth/register", formData);
        if (response.status === 201) {
            setStep("verify");
        }
    };

    const handleVerifyEmail = async (code) => {
        const response = await api.post("/auth/verify-email", {
            email,
            verificationCode: code,
        });
        if (response.status === 200) {
            // Сохранить токены и перенаправить
            auth.setTokens(response.data);
            router.push("/dashboard");
        }
    };
};
```

### Страница заплыва

```typescript
// Пример использования на странице заплыва
const ChallengePage = ({ challengeId }) => {
    const [challenge, setChallenge] = useState(null);
    const [userStatus, setUserStatus] = useState(null);

    useEffect(() => {
        // Загрузка информации о заплыве
        api.get(`/challenges/${challengeId}`).then((response) =>
            setChallenge(response.data)
        );

        // Проверка статуса пользователя (если авторизован)
        if (auth.isAuthenticated) {
            api.get(`/users/me/challenge-status/${challengeId}`).then(
                (response) => setUserStatus(response.data)
            );
        }
    }, [challengeId]);

    const handleRegister = async (participantData) => {
        const response = await api.post("/registrations", {
            challengeId,
            participantInfo: participantData,
        });

        // Перенаправление на оплату
        window.location.href = response.data.paymentUrl;
    };
};
```

### Личный кабинет

```typescript
// Пример дашборда пользователя
const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [registrations, setRegistrations] = useState([]);

    useEffect(() => {
        // Загрузка профиля
        api.get("/users/me").then((response) => setUser(response.data));

        // Загрузка регистраций
        api.get("/users/me/registrations").then((response) =>
            setRegistrations(response.data.registrations)
        );
    }, []);
};
```

## 🔄 Автоматические вызовы

### Token Refresh Interceptor

```typescript
// Автоматическое обновление токенов
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            try {
                const refreshResponse = await api.post("/auth/refresh", {
                    refresh_token: auth.getRefreshToken(),
                });

                auth.setTokens(refreshResponse.data);
                // Повторить оригинальный запрос
                return api.request(error.config);
            } catch (refreshError) {
                auth.logout();
                router.push("/login");
            }
        }
        return Promise.reject(error);
    }
);
```

### Периодическая проверка статуса

```typescript
// Проверка статуса платежа после регистрации
const PaymentStatusChecker = ({ registrationId }) => {
    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await api.get(
                `/registrations/${registrationId}/status`
            );

            if (response.data.paymentStatus === "paid") {
                clearInterval(interval);
                // Показать успешное сообщение
                showSuccessMessage("Оплата прошла успешно!");
            }
        }, 5000); // Проверяем каждые 5 секунд

        return () => clearInterval(interval);
    }, [registrationId]);
};
```

## 📱 Mobile App специфика

### Background Sync

```typescript
// Синхронизация данных при возврате в приложение
const useAppStateSync = () => {
    useEffect(() => {
        const handleAppStateChange = (nextAppState) => {
            if (nextAppState === "active") {
                // Обновить токены и данные пользователя
                api.post("/auth/refresh", {
                    refresh_token: auth.getRefreshToken(),
                });
                api.get("/users/me/registrations");
            }
        };

        AppState.addEventListener("change", handleAppStateChange);
        return () =>
            AppState.removeEventListener("change", handleAppStateChange);
    }, []);
};
```

## 🔔 Push Notifications

### Webhook обработка

```typescript
// Обработка webhook событий для уведомлений
app.post("/api/webhooks/payment", async (req, res) => {
    const { registrationId, paymentStatus } = req.body;

    if (paymentStatus === "paid") {
        // Отправить push уведомление пользователю
        await pushNotificationService.send({
            userId: registration.userId,
            title: "Регистрация подтверждена!",
            body: `Вы успешно зарегистрированы на заплыв. Ваш номер: ${registration.participantNumber}`,
        });
    }
});
```

---

## 🎯 Заключение

Каждая API ручка имеет четкое назначение и место в пользовательском сценарии. Понимание этих сценариев поможет:

1. **Оптимизировать UX** - знание когда вызывать API
2. **Правильно обрабатывать ошибки** - понимание контекста вызова
3. **Кешировать данные** - определить что и когда кешировать
4. **Мониторить производительность** - отслеживать критические пути
5. **Тестировать функциональность** - покрыть все сценарии использования

Этот документ служит мостом между техническим API и реальными потребностями пользователей.
