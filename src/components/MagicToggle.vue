<template>
  <input 
     v-on:input="$emit('update:modelValue', $event.target.value)"
     :value="modelValue"
     class="bg-blue-100 border-none"
/>
</template>

<script>
export default{
 props:{
    modelValue:String
   },
 emits: ["update:modelValue"],
}
</script>