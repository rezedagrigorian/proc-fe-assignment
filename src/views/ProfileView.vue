<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <ContentBoxWrapper
      :title="title"
      :description="description"
    >
      <p>ke ke ke</p>
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
      description: ""
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
        })
        .catch(error => {
          console.error("There was a problem with the fetch operation:", error)
        })
    },
  },
}
</script>