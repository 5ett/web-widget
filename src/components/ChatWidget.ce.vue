<template>
    <!-- <div class="position-relative"> -->
    <div class="position-absolute widget-wrapper col-md-5 col-lg-6 col-xl-3-5 pe-3 d-flex flex-column"
        :class="widgetPos, { 'align-items-end': widgetPos === 'bottom-right' }">
        <div class="d-flex" v-if="showChatbox">
            <div class="">
                <div class="card border border-light rounded-5 shadow mb-4" id="chat-widget">
                    <div
                        class="card-header d-flex justify-content-between align-items-center p-3 bg-gray text-white border-bottom-0 border-top-radius-5">
                        <i class="fa fa-angle-left"></i>
                        <p class="mb-0 fw-bold chat-title">{{ title ?? chatName }}</p>
                        <span class="text-white pointer has-svg close" @click="toggleChatbox"><svg
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                    </div>
                    <div class="card-body">
                        <div class="chat-area pb-6 overflow-auto">
                            <div class="h-100 d-flex align-items-center justify-content-center chat-loader"
                                v-if="isLoading">
                                <div class="lds-ellipsis">
                                    <div v-for="t in 4" :key="(t * 3 - 1)"></div>
                                </div>
                            </div>

                            <div v-else v-for="(chat, index) in state.chats" :key="index" class="d-flex flex-row mb-4"
                                :class="{
                                    'justify-content-start': isAdmin.includes(chat.author),
                                    'justify-content-end': !isAdmin.includes(chat.author),
                                }">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" class="avatar" v-if="isAdmin.includes(chat.author)">
                                <div class="p-3 ms-3 rounded-6" :class="{
                                    'bg-secondary': isAdmin.includes(chat.author),
                                    'border bg-light': !isAdmin.includes(chat.author)
                                }">
                                    <p class="small mb-0" v-if="chat.type === 'text'">{{ chat.message }}</p>
                                    <img v-else :src="chat.message" :alt="chat.id" class="rounded-4">
                                </div>
                            </div>
                            <div class="d-flex flex-row mb-4 justify-content-start" v-if="isAdminGenerating">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                    alt="avatar 1" class="avatar">
                                <div class="p-3 ms-3 rounded-6 bg-secondary">
                                    <div class="typing">
                                        <div class="dot" v-for="d in 3" :key="(d * 9 - 3)"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        <form class="form-outline mb-0 postion-relative w-100" @submit.prevent="sendNewMessage">
                            <input class="form-control mb-0 w-100 widget-text-area" :placeholder="placeholderText"
                                id="chat-widget-text-box" v-model="newMessage" :disabled="isInputDisabled" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
        <div class="widget-trigger pointer text-end" @click="toggleChatbox" v-if="!showChatbox">
            <div class="rounded-circle bg-primary">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>


            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script setup lang="ts">
import { useChatState } from "@/composables";
import { Chat, WidgetProps } from "@/types";
import { ref, onMounted, readonly, computed } from "vue";

const { state } = useChatState();
const chatName = ref('Rhyolite Assistant');
const newMessage = ref('');

const { description, position = 'bottom-left' } = defineProps<WidgetProps>()

// data
const isAdmin = readonly(['admin', 'admin-auto'])
const messages: Array<Chat> = [
    {
        message: "Hello and thank you for visiting Rhyolite automated services. How can we help?",
        author: 'admin-auto',
        read: false,
        type: 'text'
    },
    {
        message: "Thank you, I really like your product.",
        author: 'user',
        type: 'text'
    },
    {
        message: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/screenshot1.webp",
        author: 'admin-auto',
        read: false,
        type: 'media'
    },
]
const isLoading = ref(false);
const isAdminGenerating = ref(false);
const showChatbox = ref(false);

// computed
const placeholderText = computed(() => {
    return description ?? 'Type message here...'
})
const isInputDisabled = computed(() => {
    return isAdminGenerating.value || isLoading.value;
})
const widgetPos = computed(() => {
    return position
})

// methods
function sendNewMessage() {
    // if ($event.key !== 'Enter') {
    //     return;
    // }
    if (!newMessage.value.replace(/\s/g, '').length) {
        return;
    }
    scrollToBottom()
    const payload: Chat = {
        message: newMessage.value,
        author: 'user',
        type: 'text'
    }
    state.value.chats.push(payload);
    newMessage.value = '';
    isAdminGenerating.value = true;
    setTimeout(() => {
        isAdminGenerating.value = false;
        const response: Chat = {
            message: "We've received your request. processing will begin shortly",
            author: 'admin-auto',
            type: 'text'
        }
        state.value.chats.push(response);
    }, 5000)
}

function scrollToBottom() {
    let element = document.querySelector(".chat-area")
    let height: number = 1200;
    if (element) {
        height = element?.scrollHeight + element?.scrollTop;
    }
    // element!.scrollTop = element!.scrollHeight;
    element?.scroll({ top: height + 1000, behavior: "smooth" })
    console.log(height, height + 1000)
}

function toggleChatbox() {
    showChatbox.value = !showChatbox.value;
}

onMounted(() => {
    isLoading.value = true;
    setTimeout(() => {
        isLoading.value = false;
        state.value.chats = [...messages]
    }, 5000)
})
</script>

<style scoped>
* {
    font-family: system-ui, -apple-system, "Segoe UI", Roboto,
        "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.font-monospace {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

.bg-primary {
    background-color: #2563eb !important;
}

.bg-light {
    background-color: #f9fafb !important;
}

.bg-gray-dark {
    background-color: #6b7280 !important;
}

.bg-gray-md {
    background-color: #f3f4f6 !important;
}

.bg-gray {
    background-color: #d1d5db !important;
}

.bg-secondary {
    background-color: #cffafe !important;
}

.pb-6 {
    padding-bottom: 4rem !important;
}

.form-control {
    padding: 9px;
    border-radius: 8px;
    border: 1px solid #d1d5db !important;
    outline: none;
    min-width: 230px;
}

.d-flex {
    display: flex !important;
}

.flex-column {
    flex-direction: column !important;
}

.col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
}

.col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
}

.col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
}

.col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
}

.col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
}

.col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
}

.col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
}

.col-xl-3-5 {
    flex: 0 0 auto;
    width: 29% !important;
}

.col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
}

.col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
}

.col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
}

.col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
}

.bottom-left {}

.bottom-right {
    right: 0;
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}

.card>hr {
    margin-right: 0;
    margin-left: 0;
}

.card>.list-group {
    border-top: inherit;
    border-bottom: inherit;
}

.card>.list-group:first-child {
    border-top-width: 0;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.card>.list-group:last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
}

.card>.card-header+.list-group,
.card>.list-group+.card-footer {
    border-top: 0;
}

.card-body {
    flex: 1 1 auto;
    padding: 1rem 1rem;
}

.card-title {
    margin-bottom: 0.5rem;
}

.card-subtitle {
    margin-top: -0.25rem;
    margin-bottom: 0;
}

.card-text:last-child {
    margin-bottom: 0;
}

.card-link:hover {
    text-decoration: none;
}

.card-link+.card-link {
    margin-left: 1rem;
}

.card-header {
    padding: 0.5rem 1rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.card-footer {
    padding: 0rem;
}

.card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
}

.card-header-tabs {
    margin-right: -0.5rem;
    margin-bottom: -0.5rem;
    margin-left: -0.5rem;
    border-bottom: 0;
}

.chat-title {
    margin-top: 0;
}

.card-header-pills {
    margin-right: -0.5rem;
    margin-left: -0.5rem;
}

.card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1rem;
    border-radius: calc(0.25rem - 1px);
}

.chat-area {
    min-height: 500px;
    max-height: 500px;
}

.border {
    border: 1px solid #dee2e6 !important;
}

.border-light {
    border-color: #f8f9fa !important;
}

.rounded-4 {
    border-radius: 0.45rem !important;
}

.rounded-5 {
    border-radius: 0.8rem !important;
}

.rounded-6 {
    border-radius: 1rem !important;
}

.rounded-circle {
    border-radius: 50% !important;
}

.border-top-radius-5 {
    border-top-right-radius: 0.8rem !important;
    border-top-left-radius: 0.8rem !important;
}

.border-bottom-radius-5 {
    border-bottom-right-radius: 0.8rem !important;
    border-bottom-left-radius: 0.8rem !important;
}

.border-top-right-radius-5 {
    border-top-right-radius: 0.8rem !important;
}

.border-bottom-right-radius-5 {
    border-bottom-right-radius: 0.8rem !important;
}

.border-top-left-radius-5 {
    border-top-left-radius: 0.8rem !important;
}

.border-bottom-left-radius-5 {
    border-bottom-left-radius: 0.8rem !important;
}

.border-bottom-0 {
    border-bottom: 0 !important;
}

.shadow {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.shadow-sm {
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
}

.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.justify-content-start {
    justify-content: flex-start !important;
}

.justify-content-end {
    justify-content: flex-end !important;
}

.justify-content-center {
    justify-content: center !important;
}

.justify-content-between {
    justify-content: space-between !important;
}

.justify-content-around {
    justify-content: space-around !important;
}

.justify-content-evenly {
    justify-content: space-evenly !important;
}

.align-items-start {
    align-items: flex-start !important;
}

.align-items-end {
    align-items: flex-end !important;
}

.align-items-center {
    align-items: center !important;
}

.align-items-baseline {
    align-items: baseline !important;
}

.align-items-stretch {
    align-items: stretch !important;
}

.align-content-start {
    align-content: flex-start !important;
}

.align-content-end {
    align-content: flex-end !important;
}

.align-content-center {
    align-content: center !important;
}

.widget-trigger {
    padding: 0.75rem;
    width: fit-content;
    height: fit-content;
}

.widget-wrapper {
    bottom: 0;
}

.widget-trigger svg {
    height: 40px;
    width: 40px;
    stroke-width: 1px;
    color: #fff;
}

.p-3 {
    padding: 1rem !important;
}

.pe-2 {
    padding-right: 0.5rem !important;
}

.pe-3 {
    padding-right: 1rem !important;
}

.pe-4 {
    padding-right: 1.5rem !important;
}

.text-white {
    color: #fff !important;
}

.text-end {
    text-align: right !important;
}

.overflow-auto {
    overflow: auto !important;
}

.overflow-hidden {
    overflow: hidden !important;
}

.overflow-visible {
    overflow: visible !important;
}

.overflow-scroll {
    overflow: scroll !important;
}

.flex-row {
    flex-direction: row !important;
}

.mb-2 {
    margin-bottom: 0.5rem !important;
}

.mb-4 {
    margin-bottom: 1.5rem !important;
}

.ms-3 {
    margin-left: 1rem !important;
}

small,
.small {
    font-size: 0.875em;
    padding-top: 0;
    margin-top: 0;
}

.h-100 {
    height: 100% !important;
}

.chat-loader {
    width: 455px;
}

.has-svg {
    height: 25px;
    width: 25px;
}

.mb-0 {
    margin-bottom: 0 !important;
}

.fw-bold {
    font-weight: 700 !important;
}

.avatar {
    width: 45px;
    height: 100%;
}

.w-100 {
    width: 100% !important;
}

.position-relative {
    position: relative !important;
}

.position-absolute {
    position: absolute !important;
}

.widget-text area {
    border: 0;
    background-color: #d1d5db;
    color: #6b7280;
}

.widget-text-area {
    border: 0 !important;
    background-color: #f9fafb !important;
    padding: 2rem !important;
    border-top-right-radius: 0 !important;
    border-top-left-radius: 0 !important;
}

.widget-text-area::placeholder {
    color: #6b7280;
}

.lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
}

.lds-ellipsis div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #d1d5db;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
    }

    100% {
        transform: scale(0);
    }
}

@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
    }

    100% {
        transform: translate(24px, 0);
    }
}

.typing {
    align-items: center;
    display: flex;
    height: 17px;
}

.typing .dot {
    animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
    background-color: #d1d5db;
    border-radius: 50%;
    height: 7px;
    margin-right: 4px;
    vertical-align: middle;
    width: 7px;
    display: inline-block;
}

.typing .dot:nth-child(1) {
    animation-delay: 200ms;
}

.typing .dot:nth-child(2) {
    animation-delay: 300ms;
}

.typing .dot:nth-child(3) {
    animation-delay: 400ms;
}

.typing .dot:last-child {
    margin-right: 0;
}

@keyframes mercuryTypingAnimation {
    0% {
        transform: translateY(0px);
        background-color: #6CAD96;
    }

    28% {
        transform: translateY(-7px);
        background-color: #9ECAB9;
    }

    44% {
        transform: translateY(0px);
        background-color: #B5D9CB;
    }
}

.pointer {
    cursor: pointer;
}

.pointer:active,
.btn:active {
    transform: scale(0.92);
}
</style>