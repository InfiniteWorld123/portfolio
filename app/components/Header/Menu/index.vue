<script>
// import { useLocalePath } from 'vue-i18n'
// const { localePath } = useLocalePath()
</script>

<template>
    <nav class="menu">
        <ul class="flex space-x-4">
            <li>
                <NuxtLink :to="$localePath('index')">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink :to="$localePath('about')">About</NuxtLink>
            </li>
        </ul>
    </nav>
</template>