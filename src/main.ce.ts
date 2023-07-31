import { defineCustomElement } from "vue";
import ChatWidget from "./components/ChatWidget.ce.vue";

const WebWidget = defineCustomElement(ChatWidget);

customElements.define("chat-widget", WebWidget);
