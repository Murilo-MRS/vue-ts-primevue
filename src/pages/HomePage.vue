<template>
  <Layout>
    <template #header>
      <Header>
        <h1>Header</h1>
      </Header>
    </template>
    <template #content>
      <section>
        <Card>
          <p>This is a card</p>
        </Card>
      </section>
    </template>
    <template #footer>
      <Footer>
        <p>Footer content</p>
      </Footer>
    </template>
  </Layout>
  <Button>
    <span>Click me</span>
  </Button>
</template>
<script setup lang="ts">
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import Layout from '@/components/layout/Layout.vue';
import Card from '@/components/shared/Card.vue';
import Button from '@/components/shared/Button.vue';
</script>