<template>
    <div class="dropdown">
        <span>
            Cart ({{ cart.length }})
        </span>
        <div class="dropdown-content">
            <p class="mb-3 p-0 border-b-4 border-indigo-500" v-for="item in cart" :key="item.id">
                {{ item.name }} | {{ item.price }} $
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    cart: Array
});
</script>