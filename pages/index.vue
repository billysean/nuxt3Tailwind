<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Cards
        id="1"
        name="Total Subscribers"
        stat="71,897"
        icon="UsersIcon"
        change="122"
        changeType="increase"
      />
      <Cards
        id="2"
        name="Total Produsen"
        stat="71,897"
        icon="UsersIcon"
        change="122"
        changeType="increase"
      />
    </dl>
  </div>
</template>

<script>
import Cards from "~~/components/cards.vue";
</script>