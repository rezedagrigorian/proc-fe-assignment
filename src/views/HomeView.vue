<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <ContentBoxWrapper
      title="My training profiles"
      description="Overview of required training profiles"
    >
      <div class="lovely-grid">
        <GridComponent
          ref='grid'
          :dataSource='gridData'
          :allowFiltering='true'
        >
          <ColumnsDirective>
            <ColumnDirective
              field='id'
              :headerTemplate="'headerTemplate'"
              textAlign="Right"
              width="100"
              :allowFiltering='false'
            />
            <ColumnDirective
              field='title'
              :headerTemplate="'headerTemplate'"
              :allowFiltering='false'
            />
            <ColumnDirective
              field='achieved'
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
              {{ data.achieved ? 'Achieved' : 'Failed' }}
            </span>
          </template>

          <template v-slot:actionTemplate="{ data }">
            <RouterLink :to="`/training_profile/${data.id}`">
              <i class="icons8-eye text-slate-500 text-2xl mr-3" />
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
    </ContentBoxWrapper>
  </div>
</template>

<script>
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter
} from '@syncfusion/ej2-vue-grids';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

import MainMenu from "@/components/MainMenu.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import MagicToggle from '../components/MagicToggle.vue';
import ContentBoxWrapper from '../components/ContentBoxWrapper.vue';

export default {
  components: {
    MainMenu,
    Breadcrumbs,
    MagicToggle,
    ContentBoxWrapper,
    GridComponent,
    ColumnsDirective,
    ColumnDirective
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' },
      ],
      gridData: [],
      achievedFilterValue: null,
      achievedFilterOptions: [
        { title: 'Yes', value: true },
        { title: 'No', value: false },
        { title: 'Clear', value: null }
      ]
    }
  },
  methods: {
    achievementClass(isAchieved) {
      const color = isAchieved ? 'emerald' : 'red';
      return `p-2 rounded-full bg-${color}-50 text-${color}-700 text-xs`;
    }
  },
  provide: {
    grid: [Filter]
  },
  mounted() {
    let API_URL = "https://proc-front-dev-task.wiremockapi.cloud/training_profiles";
    this.gridData = new DataManager({
      url: API_URL,
      adaptor: new ODataAdaptor(),
      crossDomain: true
    })
    this.gridInstance = this.$refs.grid.ej2Instances;
  },
  watch: {
    achievedFilterValue:function(val) {
      if (val !== null) {
        this.$refs.grid.ej2Instances.filterByColumn('achieved', 'equal', val);
      } else {
        this.$refs.grid.ej2Instances.clearFiltering();
      }
    }
  }
};
</script>

<style>
  .lovely-grid .e-grid {
    border-radius: 8px;
    border: 1px solid theme(colors.slate.200);
    overflow: hidden;
  }

  .lovely-grid .e-gridheader {
    border-top: 0;
  }

  .lovely-grid .e-row, .lovely-grid .e-filterbar, .lovely-grid .e-columnheader {
    height: 75px;
  }

  .lovely-grid .header-cell {
    text-transform: capitalize;
  }

  .lovely-grid .header-first-cell {
    text-transform: uppercase;
  }
</style>