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
            <button @click="$emit('addToCart', product)"
                class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add To Cart
            </button>
        </div>
    </div>
</template>

<script setup>
defineProps({
    product: Object,
});
</script>