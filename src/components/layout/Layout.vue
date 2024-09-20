<template>
  <section class="flex flex-col w-screen">
    <header v-if="$slots.header" class="header">
      <slot name="header" />
    </header>
    <main v-if="$slots.content" class="border min-h-[80vh]">
      <slot name="content" />
    </main>
    <footer v-if="$slots.footer" class="border">
      <slot name="footer" />
    </footer>
  </section>
</template>
<script setup lang="ts">
</script>
<style scoped>

</style>