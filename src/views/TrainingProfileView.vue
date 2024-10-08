<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <ErrorMessage
      title="There was a problem fetching training profile, please try again later"
      v-if="networkError"
    />
    <ContentBoxWrapper
      v-else
      :description="description"
      :additionalContentClass="'max-w-5xl'"
    >
      <div class="my-5 flex justify-end">
        <MagicToggle v-model="showGrid" :options="showGridOptions" />
      </div>
      <div :class="{ 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3': showGrid }">
        <CompetenceCard
          v-for="(card, index) in competences"
          :key="index"
          :title="card.title"
          :required="card.required"
          :achieved="card.achieved"
          :grid="showGrid"
        />
      </div>

      <template v-slot:title>
        <div class="flex items-center">
          <h1 class="text-slate-500 font-bold leading-8">{{ title }}</h1>
          <span
            class="ml-3 py-2 px-3 font-bold text-xs rounded-lg"
            :class="{ 'bg-emerald-200 text-emerald-950': achieved, 'bg-slate-100 text-emerald-700': !achieved }"
          >
            {{ achieved ? 'Certified' : 'In progress' }}
          </span>
        </div>
      </template>
    </ContentBoxWrapper>
  </div>
</template>

<script>
  import MainMenu from "@/components/MainMenu.vue"
  import Breadcrumbs from "../components/Breadcrumbs.vue"
  import ContentBoxWrapper from "../components/ContentBoxWrapper.vue"
  import MagicToggle from '../components/MagicToggle.vue'
  import CompetenceCard from "../components/CompetenceCard.vue"
  import ErrorMessage from "../components/ErrorMessage.vue"

  export default {
    components: {
      MainMenu,
      Breadcrumbs,
      ContentBoxWrapper,
      MagicToggle,
      CompetenceCard,
      ErrorMessage
    },
    data() {
      return {
        breadcrumbs: [
          { text: "My training profiles", link: "/" },
        ],
        title: "",
        description: "",
        achieved: false,
        competences: [],
        showGrid: false,
        showGridOptions: [
          { title: "List", value: false },
          { title: "Grid", value: true }
        ],
        networkError: false
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        const { id } = this.$route.params;
        fetch(`${process.env.VUE_APP_PROFILE_API_URL}/${id}`)
          .then(response => {
            if (!response.ok) {
              throw new Error("Network response was not ok")
            }
            return response.json()
          })
          .then(data => {
            this.breadcrumbs.push({ text: data.title, link: "/" })
            this.title = data.title
            this.description = data.description
            this.achieved = data.achieved
            this.competences = data.competences
          })
          .catch(() => {
            this.networkError = true
          })
      },
    },
  }
</script>