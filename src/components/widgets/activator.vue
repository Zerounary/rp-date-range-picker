<template>
  <div class="activator-wrapper">
    <calendar class="icon_calendar" theme="outline" size="16" fill="#666"/>
    <input v-bind="$attrs" class="text-field" :class="inputClass" type="text" :value="value">
    <span v-if="picker.showActivatorBar" class="bar"></span>
    <label v-if="picker.showActivatorLabel">{{ label }}</label>
  </div>
</template>

<script>
import {Calendar} from '@icon-park/vue'
import '@icon-park/vue/styles/index.css';

export default {
  inheritAttrs: false,
  inject: ['picker'],
  props: {
      value: String,
      label: {
        type: String,
        default: ""
      }
  },
  computed: {
    inputClass () {
      return {
        'text-field__filled': this.value.trim().length > 0,
      };
    },
  },
  components: {
    Calendar,
  },
};
</script>


<style lang="scss">
@import '../../styles/components/activator.scss';
</style>
