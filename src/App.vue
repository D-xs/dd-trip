<template>
  <div class="App">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script lang="ts" setup>
import TabBar from "@/components/TabBar/index.vue";
</script>

<style scoped lang="scss">
.App {
}
</style>
