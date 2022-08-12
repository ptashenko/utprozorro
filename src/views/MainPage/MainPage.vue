<template>
    <ModalOrder v-show="modal" @openModal="openModal" />
    <HeroComp @openModal="openModal" />
    <AboutUs />
    <ServicesComp @openModal="openModal" />
    <OurExp />
    <BenefitsComp />
    <ToTopButton />
</template>

<script>
import HeroComp from '@/components/Hero/HeroComp.vue';
import AboutUs from '@/components/About/AboutUs.vue';
import ServicesComp from '@/components/ServicesComp/ServicesComp.vue';
import OurExp from '@/components/Experience/OurExp.vue';
import BenefitsComp from '@/components/Benefits/BenefitsComp.vue';
import ToTopButton from '@/components/ToTopButton/ToTopButton.vue';
import ModalOrder from '@/components/ModalOrder/ModalOrder.vue';

export default {
    components: { HeroComp, AboutUs, ServicesComp, OurExp, BenefitsComp, ToTopButton, ModalOrder },
    data() {
        return {
            modal: false,
        }
    },
    methods: {
        openModal() {
            this.modal = !this.modal;
        }
    }
}
</script>

<style>

</style>