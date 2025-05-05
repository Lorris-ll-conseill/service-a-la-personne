<template>
  <div class="ai-assistant-view">
    <the-header />
    <main>
      <open-ai-chat />
    </main>
    <the-footer />
  </div>
</template>

<script setup>
import TheHeader from "@/components/TheHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import OpenAiChat from "@/components/OpenAiChat.vue";
</script>

<style scoped>
.ai-assistant-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>
