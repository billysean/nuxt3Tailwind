<script setup>
const {data} = await useFetch('/api/random')
</script>
<template>
  <div>
    <h3 class="text-xl leading-6 font-medium text-gray-900">Dashboard</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Cards
        id=1
        name="Total Produsen"
        :stat= data.Produsen
        :icon=UsersIcon
        change="122"
        changeType="increase"
      />
      <!-- <Cards
        id=2
        name="Total Produsen"
        stat="71,897"
        icon="UsersIcon"
        change="122"
        changeType="increase"
      /> -->
    </dl>
  </div>
</template>

<script>
import Cards from "~~/components/Cards.vue";
import { CursorClickIcon, MailOpenIcon, UsersIcon } from '@heroicons/vue/outline'
</script>