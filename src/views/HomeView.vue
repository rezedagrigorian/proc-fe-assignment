<template>
  <MainMenu />
  <div class="p-6">
    <Breadcrumbs :items="breadcrumbs" />
    <!--
    <p>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/training_profile/12">Profile</RouterLink>
      </nav>
    </p>
    -->
    <GridComponent :dataSource='gridData'>
      <ColumnsDirective>
        <ColumnDirective field='id' width='100' textAlign="Right"></ColumnDirective>
        <ColumnDirective field='title' width='100'></ColumnDirective>
        <ColumnDirective field='achieved' width='100' textAlign="Right"></ColumnDirective>
      </ColumnsDirective>
    </GridComponent>
  </div>
</template>

<script>
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective
} from '@syncfusion/ej2-vue-grids';
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

import MainMenu from "@/components/MainMenu.vue";
import Breadcrumbs from "../components/Breadcrumbs.vue";

let SERVICE_URI = "https://proc-front-dev-task.wiremockapi.cloud/training_profiles";
const gridData = new DataManager({
  url: SERVICE_URI,
  adaptor: new ODataAdaptor(),
  crossDomain: true
});

export default {
  components: {
    MainMenu,
    Breadcrumbs,
    GridComponent,
    ColumnsDirective,
    ColumnDirective
  },
  data() {
    return {
      breadcrumbs: [
        { text: 'Home', link: '/' },
      ],
      gridData
    };
  }
};
</script>