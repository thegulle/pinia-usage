import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", () => {
    const cart = ref([]);

    function addToCart({ product, quantity }) {
        this.$patch((state) => {
            for (let i = 0; i < quantity; i++) {
                cart.value.push(product);
            }
        })
        alert('Product added to cart')
    }

    return {
        cart,
        addToCart
    }
});