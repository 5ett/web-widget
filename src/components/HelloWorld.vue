<script setup lang="ts">
import { watch, computed, onMounted } from 'vue';
import { reactify } from '@vueuse/core';
import $ from 'jquery';
import { useChatState } from '@/composables';

const { state } = useChatState();

function getElement(arg: string) {
  return $(arg)
}
const reactiveJQ = reactify(getElement)
const chatContainer = reactiveJQ(".chat_conntainer");
const height = computed(() => (chatContainer.value as any)[0]?.scrollHeight);

function addChat() {
  state.value.chats.push({
    id: 'sasasas',
    author: 'user',
    message: 'something',
  })
}

watch(state, (newVal) => {
  console.log(height.value)
  if (newVal) {
    chatContainer.value.scrollTop();
  }
})

watch(() => chatContainer.value[0], (newVal) => {
  console.log(newVal)
})


onMounted(() => {
  console.log(chatContainer);
  console.log($(".chat_container")[0])
  console.log(chatContainer.value[0])
})
</script>

<template>
  <button type="button" @click="addChat">add chat</button>
  <div class="chat_container">
    <div v-for="(chat, index) in state.chats" class="message_holder" :key="index">
      <span class="chat" :class="{ user2: (index > 0) && (index % 2 === 0), user1: (index === 0 || index % 2 !== 0) }">
        {{ chat.message }}
      </span>
    </div>
    <!-- <div class="message_holder">
      <span class="chat user2">
        hi my friend <br />
        how are you ?
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user1">
        good and you ?
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        good thx
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user1">
        how you pass your day ?
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        awesome , i went to the cenima !<br />
        and you ?
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user1">
        i went to the gym with alex
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user1">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user1">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user1">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        bla bla bla
      </span>
    </div>
    <div class="message_holder">
      <span class="chat user2">
        bla bla bla
      </span>
    </div> -->
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

div {
  width: 100%;
  height: auto;
  float: left;
}

.message_holder {
  margin-bottom: 5px;
}

.chat_container {
  max-width: 300px;
  height: 500px;
  background-color: white;
  overflow: auto;
  padding: 5px 5px 0px 5px;
}

.chat {
  padding: 10px;
  border: 2px solid #ccc;
}

.user1 {
  float: left;
  border-radius: 0px 10px 10px 10px;
}

.user2 {
  float: right;
  border-radius: 10px 0px 10px 10px;
}
</style>
