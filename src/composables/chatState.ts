import { computed, ref } from "vue";
import { Chat } from "@/types";

export function useChatState() {
  const state = ref<{ chats: Chat[] }>({ chats: [] });
  const unread = computed(() => {
    const unreadChats = state.value.chats?.filter(
      (t) => !t.read && ["admin", "admin-auto"].includes(t.author)
    );
    return unreadChats.length;
  });
  return {
    state,
    unread,
  };
}
