<template>
    <nav class="flex items-center justify-between flex-wrap bg-zinc-800 p-6 mb-5">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-lg tracking-tight">github.com/thegulle</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            </div>
            <div>
                <a href="#"
                    class="text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <ShoppingCart :cart="cart" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import ShoppingCart from "../components/ShoppingCart.vue";
defineProps({
    cart: Array
});
</script>