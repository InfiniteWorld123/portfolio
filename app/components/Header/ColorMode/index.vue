<script setup>
const colorMode = useColorMode()
const toggleColorMode = () => colorMode.preference = colorMode.preference === 'light' ? 'dark' : 'light'
</script>

<template>
    <ToggleSwitch @change="toggleColorMode">
        <template #handle>
            <Icon :name="$colorMode.preference === 'light' ? 'ic:baseline-wb-sunny' : 'ic:baseline-dark-mode'"
                class="text-xl" />
        </template>
    </ToggleSwitch>
</template>