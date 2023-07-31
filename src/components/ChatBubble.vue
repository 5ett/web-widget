<template>
    <div class="d-flex flex-row mb-4" :class="{
        'justify-content-start': isAdmin,
        'justify-content-end': !isAdmin,
    }">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1"
            class="avatar" v-if="isAdmin">
        <div class="p-3 ms-3 rounded-6" :class="{
            'bg-secondary': isAdmin,
            'border bg-light': !isAdmin
        }">
            <p class="small mb-0" v-if="type === 'text'">{{ message }}</p>
            <img v-else :src="message" :alt="id" class="rounnded-4">
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChatProps } from '@/types';
import { computed } from 'vue';

const { author } = defineProps<ChatProps>();

const isAdmin = computed(() => {
    return ['admin', 'admin-auto'].includes(author)
})

// onMounted(() => {
//     console.log(chat)
// })
</script>

<style scoped></style>