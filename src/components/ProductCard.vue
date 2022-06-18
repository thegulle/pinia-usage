<template>
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <img class="rounded-t-lg" src="https://www.dentram.com/wp-content/uploads/2021/06/placeholder.png" alt="" />
        </a>
        <div class="p-5">
            <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {{ product.name }}
                </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ product.description }}
            </p>
            <p class="mb-3 font-normal text-white">
                {{ product.price }} $
            </p>
            <form class="grid grid-cols-2 gap-4" @submit.prevent>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Quantity</label>
                    <input type="number"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        min="1" v-model="quantity">
                </div>

                <div>
                    <button @click="$emit('addToCart', { product, quantity })" type="button"
                        class="w-full h-10 mt-7 block mb-2 py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add To Cart
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
});
const quantity = 1;
</script>