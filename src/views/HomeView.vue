<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <div class="lovely-grid">
      <GridComponent
        ref='grid'
        :dataSource='filteredData'
        :allowFiltering='true'
      >
        <ColumnsDirective>
          <ColumnDirective
            field='id'
            headerText='ID'
            textAlign="Right"
            width="70"
            :allowFiltering='false'
          />
          <ColumnDirective
            field='title'
            headerText='Title'
            :allowFiltering='false'
          />
          <ColumnDirective
            field='achieved'
            headerText='Achieved'
            :template="'achievementTemplate'"
            :filterTemplate="'statusFilterTemplate'"
          />
          <ColumnDirective
            headerText="Action"
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
            <i class="icons8-envelope text-slate-500 text-2xl mr-3" />
          </RouterLink>
        </template>

        <template #statusFilterTemplate>
          <MagicToggle
            v-model="filterValue"
          />
        </template>
      </GridComponent>
      {{ filterValue }}
    </div>
  </div>
</template>

<script>
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Filter
} from '@syncfusion/ej2-vue-grids';
import { DataManager, ODataAdaptor, Query } from "@syncfusion/ej2-data";

// eslint-disable-next-line
import MainMenu from "@/components/MainMenu.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";
import MagicToggle from '../components/MagicToggle.vue';

export default {
  components: {
    MainMenu,
    Breadcrumbs,
    MagicToggle,
    GridComponent,
    ColumnsDirective,
    ColumnDirective
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' },
      ],
      rawGridData: [],
      filteredData: [],
      filterValue: ''
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
    this.rawGridData = new DataManager({
      url: API_URL,
      adaptor: new ODataAdaptor(),
      crossDomain: true,
      offline: true
    })

    this.gridInstance = this.$refs.grid.ej2Instances;
  },
  watch: {
    filterValue:function(val) {
      if (val) {
        const query = new Query().where('achieved', 'equal', 'Achieved');
        console.log(query);
        this.rawGridData.executeQuery((x) => {
          console.log(x);
        });
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

.lovely-grid .e-row {
  height: 70px;
}
</style>