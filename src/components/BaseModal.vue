<template>
  <div class="modal fade" :class="{ show: showModal }" tabindex="-1" role="dialog">
    <div class="modal-mask" role="document">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-top">
            <h2 class="modal-title">{{ title }}</h2>
            <button v-if="showCloseButton" type="button" class="modal-default-button" @click="closeModal">
              <span>x</span>
            </button>
          </div>
          <div class="modal-main-body">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: ["showModal", "title", "showCloseButton"],
  methods: {
    closeModal() {
      this.$emit('update:showModal', false);
    }
  }
}
</script>

<style lang="scss">
.modal.show {
  display: block;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-top {
  display: flex;

  & h2 {
    text-align: center;
    flex-grow: 1;
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-height: 700px;
  margin: 0px auto;
  padding: 34px 30px 45px 37px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-main-body {
  margin: 44px 0 0;
}

.modal-default-button {
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  height: 25px;
  width: 25px;
  background: transparent;
  border: 1px groove rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all .25s linear;

  &:hover {
    background: #000;
    color: #fff;
  }
}

.modal-title {
  font-weight: 700;
  font-size: 30px;
  line-height: 87%;
  color: #000;
  padding-top: 26px;
}

</style>
