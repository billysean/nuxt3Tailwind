<script setup>
import UserTable from "~~/components/userTable.vue";
const { data } = await useFetch("/api/dataProdusen");
</script>
<template>
  <div>
    <h3 class="text-xl leading-6 font-medium text-gray-900">Last 7 Days</h3>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <Cards
        name="Total Visitor"
        :stat="data.Subsidi"
        :icon="UsersIcon"
        change="122"
        changeType="increase"
      />
      <Cards
        name="Total Whatsapp contact"
        :stat="data.Delivery"
        :icon="UsersIcon"
        change="122"
        changeType="increase"
      />
      <Cards
        name="Total usage"
        :stat="data.Produksi"
        :icon="UsersIcon"
        change="122"
        changeType="increase"
      />
    </dl>
    <div class="pt-8">
      <UserTable />
    </div>
  </div>
</template>

<script>
import Cards from "~~/components/Cards.vue";
import {
  CursorClickIcon,
  MailOpenIcon,
  UsersIcon,
} from "@heroicons/vue/outline/index.js";
</script>