# Feature-Sliced Design Architecture

Этот проект использует архитектуру Feature-Sliced Design (FSD) для организации кода.

## Структура слоев

```
src/
├── app/           # Точка входа приложения
├── pages/         # Страницы (композиция слоев)
├── widgets/       # Самодостаточные блоки интерфейса
├── features/      # Части бизнес-логики
├── entities/      # Бизнес-сущности
└── shared/        # Переиспользуемые компоненты и утилиты
```

## Правила импорта

- Слои могут импортировать только из нижележащих слоев
- Внутри одного слоя модули не могут импортировать друг друга

### Порядок слоев (сверху вниз):

1. `app` - может импортировать все
2. `pages` - может импортировать widgets, features, entities, shared
3. `widgets` - может импортировать features, entities, shared
4. `features` - может импортировать entities, shared
5. `entities` - может импортировать только shared
6. `shared` - не импортирует из других слоев

## Структура папок в каждом слое

```
feature-name/
├── ui/           # React компоненты
├── lib/          # Вспомогательные функции
├── api/          # API функции
├── config/       # Конфигурация
└── index.ts      # Публичный API модуля
```

## Примеры компонентов

### Shared компонент (Button)

```typescript
// shared/ui/Button/Button.tsx
import styles from "./Button.module.css";

export const Button = ({ variant, children, ...props }) => {
  return (
    <button className={styles[variant]} {...props}>
      {children}
    </button>
  );
};
```

### Entity компонент (ProductCard)

```typescript
// entities/Product/ui/ProductCard/ProductCard.tsx
import { Button } from "@/shared/ui";
import styles from "./ProductCard.module.css";

export const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>
      <Button onClick={() => onAddToCart(product)}>В корзину</Button>
    </div>
  );
};
```

## CSS Modules

В проекте используются CSS Modules для изоляции стилей:

- Файлы именуются как `ComponentName.module.css`
- Классы автоматически получают уникальные имена
- Импорт: `import styles from './Component.module.css'`
- Использование: `className={styles.className}`
