"use client";

import { Button } from "@/shared/ui";
import Image from "next/image";
import { FC } from "react";
import { Product } from "../../types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

export const ProductCard: FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.image}
                    width={400}
                    height={200}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
                <p className={styles.category}>{product.category}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>{product.price}₽</span>
                    <Button size="sm" onClick={() => onAddToCart?.(product)}>
                        В корзину
                    </Button>
                </div>
            </div>
        </div>
    );
};
