<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import ChatWidget from './components/ChatWidget.ce.vue';
</script>

<template>
  <chat-widget title="Some test, Isay" />
</template>

<style>
.widget-trigger {
  padding: 0.75rem;
  width: fit-content;
  height: fit-content;
}

.widget-wrapper {
  bottom: 0;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}


.chat-loader,
.card-body {
  min-width: 455px !important;
}

.chat-title {
  margin-top: 0;
}


.has-svg {
  height: 25px;
  width: 25px;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}


.widget-trigger svg {
  height: 40px;
  width: 40px;
  stroke-width: 1px;
  color: white;

}

* {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  box-sizing: border-box;
}

.font-monospace {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

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
  background-color: #f3f4f6;
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

.col-md-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-lg-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.rounded-circle {
  border-radius: 50% !important;
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

.flex-column {
  flex-direction: column !important;
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

.form-control-lg {
  min-height: calc(1.5em + (1rem + 2px));
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  border-radius: 0.3rem;
}

.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
}

.form-control-lg::-webkit-file-upload-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  -webkit-margin-end: 1rem;
  margin-inline-end: 1rem;
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

.h-100 {
  height: 100% !important;
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

.bottom-left {}

.bottom-right {
  right: 0;
}

.mb-2 {
  margin-bottom: 0.5rem !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}
</style>
