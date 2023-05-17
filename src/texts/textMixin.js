import texts from './text-ua.json';

export default {
  data() {
    return {
      headerSection: {}
    };
  },
  created() {
    this.headerSection = texts.headerSection;
  }
}
