<template>
  <div class="p-5 mb-4 border border-slate-200 rounded-xl flex items-center">
    <div class="avatar-image mr-5">
      <img
        src="@/assets/svg/AchievedCompetence.svg"
        :class="{'grayscale opacity-50': required !== achieved }"
      />
    </div>
    <div
      class="flex justify-between flex-grow flex-col items-start"
      :class="{'md:flex-row md:items-center': !grid}"
    >
      <h2 class="text-slate-800 text-md font-semibold">{{ title }}</h2>
      <div
        class="flex items-center w-full max-w-lg mt-1"
        :class="{'md:ml-3 md:mt-0': !grid}"
      >
        <div class="flex-grow bg-slate-100 h-2 rounded-lg overflow-hidden">
          <div
            class="bg-emerald-500 h-full"
            :style="{ width: progressPercentage + '%' }"
          />
        </div>
        <div class="progress-bar-counter text-slate-800 text-sm text-right font-semibold">
          {{ achieved }}/{{ required }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompetenceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    required: {
      type: Number,
      required: true
    },
    achieved: {
      type: Number,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    progressPercentage() {
      return (this.achieved / this.required) * 100;
    }
  }
}
</script>

<style scoped>
.avatar-image {
  width: 80px;
  height: 80px;
  min-width: 80px;
  min-height: 80px;
}
.progress-bar-counter {
  min-width: 70px;
}
</style>
