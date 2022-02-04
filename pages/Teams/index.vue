<script setup>
import teamTablesVue from "~/components/teamTables.vue";
</script>

<template>
  <NuxtLink to="/teams/add"
    >\
    <button
      type="button"
      class="
        inline-flex
        items-center
        px-6
        py-3
        border border-transparent
        text-base
        font-medium
        rounded-full
        shadow-sm
        text-white
        bg-indigo-600
        hover:bg-indigo-700
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-indigo-500
      "
    >
      Add New Team Member
      <PlusSmIconOutline class="h-6 w-6" aria-hidden="true" />
    </button>
  </NuxtLink>
  <teamTablesVue class="mt-3" />
</template>

<script>
import { PlusSmIcon as PlusSmIconSolid } from "@heroicons/vue/solid/index.js";
import { PlusSmIcon as PlusSmIconOutline } from "@heroicons/vue/outline/index.js";

export default {
  components: {
    PlusSmIconOutline,
    PlusSmIconSolid,
  },
};
</script>