<script setup>

</script>

<template class="">
  <div class="bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
    <Header class="container"/>
    <slot />
    <Footer class="container"/>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  @apply max-w-6xl mx-auto p-4
}
</style>