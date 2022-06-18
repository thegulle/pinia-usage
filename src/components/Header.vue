<template>
    <nav class="flex items-center justify-between flex-wrap bg-zinc-800 p-6 mb-5">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <span class="font-semibold text-lg tracking-tight">github.com/thegulle</span>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div class="text-sm lg:flex-grow">
            </div>
            <div class="bg-indigo-500 p-3 rounded-md">
                <div class="dropdown">
                    <span>
                        Cart ({{ props.cart.length }})
                    </span>
                    <div class="dropdown-content">
                        <p class="mb-3 p-0 border-b-4 border-indigo-500 flex justify-between"
                            v-for="(item, index) in cart" :key="item.id">
                            {{ item.name }} | {{ item.price }} $
                        <div class="text-indigo-500">
                            <button class="btn btn-sm btn-indigo-500" @click="$emit('removeCartItem', index)">
                                X
                            </button>
                        </div>
                        </p>
                        <hr>
                        <div class="bg-indigo-500 p-2 text-white flex justify-between w-full">
                            Total: <span>{{ total }} $</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
    cart: Array
});

const total = computed(() => {
    return props.cart.reduce((acc, item) => {
        return parseFloat(acc + item.price);
    }, 0);
});

</script>