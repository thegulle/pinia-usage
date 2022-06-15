import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", () => {
    const cart = ref([]);
    async function addToCart(product) {
        await cart.value.push(product);
        alert('Product added to cart')
        //console.log(cart.value, 'added to cart')
    }
    return {
        cart,
        addToCart
    }
});