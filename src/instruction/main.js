import Vue from 'vue'
import InstructionApp from './InstructionApp'

Vue.config.productionTip = false;

new Vue({
  render: h => h(InstructionApp),
}).$mount('#app');
