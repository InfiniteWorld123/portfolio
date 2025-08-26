<script setup>
const { locales, setLocale, locale } = useI18n()
const selectedLang = ref(locale.value)
const setDirection = () => {
    const dir = selectedLang.value === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
}

onMounted(() => {
    setDirection()
})

watch(selectedLang, async (newLocale) => {
    await setLocale(newLocale)
    setDirection()
})
</script>

<template>
    <select v-model="selectedLang" class="bg-transparent border border-gray-300 rounded p-1">
        <option v-for="loc in locales" :key="loc.code" :value="loc.code">
            {{ loc.name }}
        </option>
    </select>
</template>