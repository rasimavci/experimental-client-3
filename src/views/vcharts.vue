<template>
  <div>
    <!--头部-->
    <mt-header title="Graphic example">
      <router-link to="/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
  import VeLine from 'v-charts/lib/line'
  export default {
    created () {
      this.chartData = {
        columns: ['date', 'Sales volume'],
        rows: [
          { 'date': 'January 1', 'Sales volume': 123 },
          { 'date': 'January 2', 'Sales volume': 1223 },
          { 'date': 'January 3', 'Sales volume': 2123 },
          { 'date': 'January 4', 'Sales volume': 4123 },
          { 'date': 'January 5', 'Sales volume': 3123 },
          { 'date': 'January 6', 'Sales volume': 7123 }
        ]
      }
    },

    components: { VeLine }
  }
</script>
