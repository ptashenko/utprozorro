<template>
    <HeroComp />
    <AboutUs />
    <ServicesComp />
    <OurExp />
    <BenefitsComp />
</template>

<script>
import HeroComp from '@/components/Hero/HeroComp.vue';
import AboutUs from '@/components/About/AboutUs.vue';
import ServicesComp from '@/components/ServicesComp/ServicesComp.vue';
import OurExp from '@/components/Experience/OurExp.vue';
import BenefitsComp from '@/components/Benefits/BenefitsComp.vue';

export default {
    components: { HeroComp, AboutUs, ServicesComp, OurExp, BenefitsComp },
}
</script>

<style>

</style>