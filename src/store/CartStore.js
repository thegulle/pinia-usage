import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", () => {
    const cart = ref([]);

    function addToCart({ product, quantity }) {
        this.$patch(() => {
            for (let i = 0; i < quantity; i++) {
                cart.value.push(product);
            }
        })
    }

    async function removeCartItem(product) {
        /* delete from index number */
        cart.value.splice(product, 1);

        /* TRY IT! not working on without products group. See the difference*/
        /*await this.$patch(() => {
            cart.value = cart.value.filter((item) => item.id !== product.id);
        })*/
    }

    return {
        cart,
        addToCart,
        removeCartItem
    }
});