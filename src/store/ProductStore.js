import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useProductStore = defineStore('ProductStore', () => {
    const products = ref([
        {
            id: 1,
            name: 'Product 1',
            price: 10,
            description: 'This is product 1'
        },
        {
            id: 2,
            name: 'Product 2',
            price: 20,
            description: 'This is product 2'
        },
        {
            id: 3,
            name: 'Product 3',
            price: 30,
            description: 'This is product 3'
        },
        {
            id: 4,
            name: 'Product 4',
            price: 40,
            description: 'This is product 4'
        }
    ])
    return {
        products
    }
})