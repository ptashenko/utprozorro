<template>
  <div class="modal fade" :class="{ show: showModal }" tabindex="-1" role="dialog">
    <div class="modal-mask" role="document">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-top">
            <h2>{{ title }}</h2>
            <button type="button" class="modal-default-button" @click="closeModal">
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
  props: ["showModal", "title"],
  methods: {
    closeModal() {
      this.$emit('update:showModal', false);
    },
  },
};
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
  align-items: center;

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
  max-width: 450px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-main-body {
  margin: 20px 0;
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
</style>
