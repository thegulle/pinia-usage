<template>
    <div class="dropdown">
        <span>
            Cart ({{ cart.length }})
        </span>
        <div class="dropdown-content">
            <p class="mb-3 p-0" v-for="item in cart" :key="item.id">
                {{ item.name }}
                <hr>
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    cart: Array
});
</script>