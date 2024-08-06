<template>
  <div class="flex">
    <div class="inline-flex rounded-xl overflow-hidden cursor-pointer">
      <div 
        v-for="option in options" 
        :key="option.value" 
        class="bg-slate-50 text-slate-800 hover:bg-slate-100 px-3 py-1 text-sm font-medium transition-all" 
        :class="{ active: isSelected(option.value) }"
        @click="selectOption(option.value)"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MagicToggle',
  props: {
    options: {
      type: Array,
      required: true,
      validator(value) {
        return value.every(opt => 'title' in opt && 'value' in opt);
      }
    },
    modelValue: {
      type: [String, Number, Boolean],
      required: true
    }
  },
  computed: {
    selectedValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      }
    }
  },
  methods: {
    isSelected(value) {
      return this.selectedValue === value;
    },
    selectOption(value) {
      if (value !== this.selectedValue) {
        this.selectedValue = value;
      }
    }
  }
};
</script>

<style scoped>
  .active {
    background-color: theme(colors.blue.50);
    color: theme(colors.blue.600);
  }
</style>
