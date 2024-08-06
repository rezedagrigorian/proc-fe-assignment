<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <ContentBoxWrapper
      :description="description"
    >
      <template v-slot:title>
        <div class="flex items-center">
          <h1 class="text-slate-500 font-bold leading-8">{{ title }}</h1>
          <span
            class="ml-3 py-2 px-3 font-bold text-xs rounded-md"
            :class="{ 'bg-emerald-200 text-emerald-950': achieved, 'bg-slate-100 text-emerald-700': !achieved }"
          >
            {{ achieved ? 'Certified' : 'In progress' }}
          </span>
        </div>
      </template>

      {{ competences }}
    </ContentBoxWrapper>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue"
import Breadcrumbs from "../components/Breadcrumbs.vue"
import ContentBoxWrapper from "../components/ContentBoxWrapper.vue"

export default {
  components: {
    MainMenu,
    Breadcrumbs,
    ContentBoxWrapper,
  },
  data() {
    return {
      breadcrumbs: [
        { text: "My training profiles", link: "/" },
      ],
      title: "",
      description: "",
      achieved: false,
      competences: []
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      const { id } = this.$route.params;
      fetch(`https://proc-front-dev-task.wiremockapi.cloud/training_profile/${id}`)
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
        .catch(error => {
          console.error("There was a problem with the fetch operation:", error)
        })
    },
  },
}
</script>