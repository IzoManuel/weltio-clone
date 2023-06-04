<script setup>
import MainHeader from "./main-header.vue";
import CursorShadow from "../../components/cursor-shadow.vue";
</script>

<template>
  <cursor-shadow></cursor-shadow>
  <main-header></main-header>

  <div class="">
    <!-- Main content -->
    <div
      id="main-content"
      class="relative w-full h-full"
    >
      <slot name="mainContent"></slot>
    </div>
    <!-- Main content -->
  </div>
</template>

<style scoped>
</style>