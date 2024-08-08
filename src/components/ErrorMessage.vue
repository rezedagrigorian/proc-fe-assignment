<template>
  <div class="p-4 mb-2 rounded-lg bg-red-100 border border-red-400 text-sm text-red-900">
    {{  title  }}
  </div>
</template>

<script>
  export default {
    name: "ErrorMessage",
    props: {
      title: {
        type: String,
        required: true
      }
    },
  };
</script>
