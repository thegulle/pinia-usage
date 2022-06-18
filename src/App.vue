<template>
  <div class="container mx-auto px-4">
    <Header :cart="cartStore.cart" @removeCartItem="removeCartItem" />
    <div class="product-container grid grid-cols-4 gap-4">
      <ProductCard v-for="product in productStore.products" :product="product" :key="product.id"
        @addToCart="cartStore.addToCart" />
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "./store/productStore";
import { useCartStore } from "./store/cartStore";
import ProductCard from "./components/ProductCard.vue";
import Header from "./components/Header.vue";

const productStore = useProductStore();
const cartStore = useCartStore();

function removeCartItem(product) {
  cartStore.removeCartItem(product);
}
</script>
