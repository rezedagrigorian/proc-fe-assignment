<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <ContentBoxWrapper
      title="My training profiles"
      description="Overview of required training profiles"
    >
      <ErrorMessage
        title="There was a problem with connection to server, please try again later"
        v-if="networkError"
      />
      <div v-else class="lovely-grid">
        <div class="lovely-scroller">
          <GridComponent
            ref="grid"
            :dataSource="gridData"
            :allowFiltering="true"
          >
            <ColumnsDirective>
              <ColumnDirective
                field="id"
                :headerTemplate="'headerTemplate'"
                textAlign="Right"
                :allowFiltering="false"
                width="100"
              />
              <ColumnDirective
                field="title"
                :headerTemplate="'headerTemplate'"
                :allowFiltering="false"
              />
              <ColumnDirective
                field="achieved"
                :headerTemplate="'headerTemplate'"
                :template="'achievementTemplate'"
                :filterTemplate="'statusFilterTemplate'"
              />
              <ColumnDirective
                field="action"
                :headerTemplate="'headerTemplate'"
                :template="'actionTemplate'"
                filterTemplate="</>"
              />
            </ColumnsDirective>

            <template v-slot:achievementTemplate="{ data }">
              <span :class="achievementClass(data.achieved)">
                {{ data.achieved ? "Achieved" : "Failed" }}
              </span>
            </template>

            <template v-slot:actionTemplate="{ data }">
              <RouterLink :to="`/training_profile/${data.id}`">
                <i class="icons8-eye text-slate-500 text-base mr-3" />
              </RouterLink>
            </template>

            <template #statusFilterTemplate>
              <MagicToggle v-model="achievedFilterValue" :options="achievedFilterOptions" />
            </template>

            <template v-slot:headerTemplate="{ data }">
              <div
                class="text-slate-800 font-bold text-sm flex items-center h-full"
                :class="{ 'header-cell': data.index != 0, 'header-first-cell': data.index == 0 }"
              >
                {{ data.field }}
                <i v-if="data.index == 0" class="icons8-right-arrow rotate-90 text-blue-500 text-xl ml-1" />
              </div>
            </template>
          </GridComponent>
        </div>
      </div>
    </ContentBoxWrapper>
  </div>
</template>

<script>
  import {
    GridComponent,
    ColumnsDirective,
    ColumnDirective,
    Filter
  } from "@syncfusion/ej2-vue-grids"
  import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data"

  import MainMenu from "@/components/MainMenu.vue"
  import Breadcrumbs from "../components/Breadcrumbs.vue"
  import MagicToggle from "../components/MagicToggle.vue"
  import ContentBoxWrapper from "../components/ContentBoxWrapper.vue"
  import ErrorMessage from "../components/ErrorMessage.vue"

  export default {
    components: {
      MainMenu,
      Breadcrumbs,
      MagicToggle,
      ContentBoxWrapper,
      GridComponent,
      ColumnsDirective,
      ColumnDirective,
      ErrorMessage
    },
    data() {
      return {
        breadcrumbs: [
          { text: "My training profiles", link: "/" },
        ],
        gridData: [],
        achievedFilterValue: "clear",
        achievedFilterOptions: [
          { title: "Yes", value: true },
          { title: "No", value: false },
          { title: "Clear", value: "clear" },
        ],
        networkError: false
      }
    },
    methods: {
      achievementClass(isAchieved) {
        const color = isAchieved ? "emerald" : "red"
        return `py-[4px] px-[8px] rounded-full bg-${color}-50 text-${color}-700 text-sm font-medium`
      }
    },
    provide: {
      grid: [Filter]
    },
    mounted() {
      this.gridData = new DataManager({
        url: process.env.VUE_APP_PROFILES_API_URL,
        adaptor: new ODataAdaptor(),
        crossDomain: true
      })

      // catch DataManager http error

      this.gridInstance = this.$refs.grid.ej2Instances
    },
    watch: {
      achievedFilterValue:function(val) {
        if (val !== "clear") {
          this.gridInstance.filterByColumn("achieved", "equal", val)
        } else {
          this.gridInstance.clearFiltering()
        }
      }
    }
  }
</script>

<style>
  .lovely-grid .e-grid {
    border-radius: 8px;
    border: 1px solid theme(colors.slate.200);
    overflow: hidden;
    min-width: 700px;
    
  }

  @media screen and (max-width: 790px) {
    .lovely-grid .e-grid {
      margin-bottom: 10px;
    }
  }

  .lovely-grid .e-gridheader {
    border-top: 0;
  }

  .lovely-grid .e-row, .lovely-grid .e-filterbar, .lovely-grid .e-columnheader {
    font-family: Inter, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    height: 75px;
  }

  .lovely-grid .header-cell {
    color: theme(colors.slate.800);
    text-transform: capitalize;
  }

  .lovely-grid .header-first-cell {
    color: theme(colors.slate.800);
    text-transform: uppercase;
  }

  .lovely-grid .e-grid .e-rowcell:not(.e-editedbatchcell):not(.e-updatedtd) {
    color: theme(colors.slate.500);
  }

  .lovely-grid .lovely-scroller {
    overflow-x: auto;
  }
</style>

<style scoped>
  ::-webkit-scrollbar {
    height: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background: theme(colors.slate.100);
    border-radius: 5px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: theme(colors.slate.400);
    border-radius: 5px;
  }
 
  ::-webkit-scrollbar-thumb:hover {
    background: theme(colors.slate.600);
  }
</style>