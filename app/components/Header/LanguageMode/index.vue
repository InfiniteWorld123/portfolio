<script setup>
const { locale, locales, setLocale } = useI18n()
const selectedLang = ref(locale.value)

const setDirection = () => {
    const dir = selectedLang.value.code === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.setAttribute('dir', dir)
}

onMounted(() => {
    setDirection()
})

watch(selectedLang, async (newLocale) => {
    console.log('Language changed to:', selectedLang.value.name)
    await setLocale(newLocale.code)
    setDirection()
})
</script>

<template>
    <Select v-model="selectedLang" :options="locales" optionLabel="name" placeholder="Select a Language" class="w-56" />
</template>
