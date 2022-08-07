<template>
    <HeroComp />
    <AboutUs />
    <ServicesComp />
    <OurExp />
    <BenefitsComp />
</template>

<script>
import HeroComp from '@/components/HeroComp.vue';
import AboutUs from '@/components/AboutUs.vue';
import ServicesComp from '@/components/ServicesComp.vue';
import OurExp from '@/components/OurExp.vue';
import BenefitsComp from '@/components/BenefitsComp.vue';

export default {
    components: { HeroComp, AboutUs, ServicesComp, OurExp, BenefitsComp },
}
</script>

<style>

</style>