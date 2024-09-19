<template>
  <form :action="action" :method="method">
    <slot name="form-content" />
    <slot name="form-actions" />
  </form>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  action: string;
  method: string;
}>();
</script>