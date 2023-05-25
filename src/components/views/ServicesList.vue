<template>
  <section class="services" id="services">
    <h2 class="services_title">
      {{ servicesListSection.title }}
    </h2>
    <table class="services_body">
      <tbody @click="showModal = true">
        <tr class="table_row">
          <td class="name">{{ servicesListSection.name[0] }}</td>
          <td class="cost">{{ servicesListSection.cost[0] }}</td>
        </tr>
        <tr class="table_row">
          <td class="name">{{ servicesListSection.name[1] }}</td>
          <td class="cost">{{ servicesListSection.cost[1] }}</td>
        </tr>
        <tr class="table_row">
          <td class="name">{{ servicesListSection.name[2] }}</td>
          <td class="cost">{{ servicesListSection.cost[2] }}</td>
        </tr>
      </tbody>
    </table>
    <BaseModal
      :show-modal="showModal"
      @update:show-modal="showModal = $event"
      :title="modalSection.header"
    >
      <ApplicationForm />
    </BaseModal>
  </section>
</template>

<script>
import BaseModal from '../BaseModal.vue';
import ApplicationForm from '../ApplicationForm.vue';

export default {
  components: {
    BaseModal,
    ApplicationForm
  },
  data() {
    return {
      showModal: false,
    };
  }
}
</script>

<style lang="scss">
.services_body {
  width: 60vw;
  margin: 0 auto;
}

.table_row {
  height: 3vw;
  cursor: pointer;
  transition: all .25s linear;

  &:hover {
    background: #1550e7;
    color: #fff;
  }
}

.name {
  padding: 10px;
  border: 1px solid #000;

}

.cost {
  text-align: center;
  font-weight: 800;
  border: 1px solid #000;

}

.services {
  padding: 60px 0;
  max-width: 320px;
  margin: 0 auto;

  @media (min-width: 767px) {
    max-width: 640px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }

  &_title {
    position: relative;
    margin: 0;
    margin-left: 60px;
    font-size: 16px;
    line-height: 1.3;
    color: #111111;
    width: 255px;
    padding: 30px 0;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -60px;
      width: 40px;
      height: 5px;
      background: #1550e7;
      transform: translateY(-50%);
    }
  }
}
</style>