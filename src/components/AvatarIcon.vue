<template>
  <div class="h-10 w-10 rounded-full mr-2 inline-flex items-center justify-center bg-slate-200 overflow-hidden">
    <div v-if="url" class="avatar-image">
      <img :src="url" />
    </div>
    <div v-else class="avatar-initials">
      <span class="font-semibold text-slate-600">
        {{ initials }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AvatarIcon",
    props: {
      url: {
        type: String,
        required: false,
        default: "",
      },
      initials: {
        type: String,
        required: true,
      },
    },
  };
</script>
