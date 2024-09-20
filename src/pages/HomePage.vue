<template>
  <Layout>
    <template #header>
      <Header>
        <h1>Header</h1>
      </Header>
    </template>
    <template #content>
      <section class="">
        <Card class="">
          <h2>Card 1</h2>
          <p>Card 1 content</p>
        </Card>
      </section>
    </template>
    <template #sidebar>
      <Sidebar>
        <p>Aside content</p>
      </Sidebar>
    </template>
    <template #footer>
      <Footer>
        <p>Footer content</p>
      </Footer>
    </template>
  </Layout>
</template>
<script setup lang="ts">
import Header from '@/components/shared/Header.vue';
import Footer from '@/components/shared/Footer.vue';
import Layout from '@/components/layout/Layout.vue';
import Card from '@/components/shared/Card.vue';
import Button from '@/components/shared/Button.vue';
import Sidebar from '@/components/shared/Sidebar.vue';
</script>