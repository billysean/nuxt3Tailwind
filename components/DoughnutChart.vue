<script setup lang="ts">
const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };
    // test data await supabase get data
</script>

<template>
     <DoughnutChart :chartData="testData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { DoughnutChart } from 'vue-chart-3';

export default defineComponent({
  name: 'Home',
  components: { DoughnutChart }
});
</script>