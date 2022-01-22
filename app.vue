<script setup>
import { createClient } from '@supabase/supabase-js'

const supabaseURL = process.env.SUPABASE_URL
const supabaseAPIKey = process.env.SUPABASE_PUBLIC_KEY

const supabase = createClient(supabaseURL,supabaseAPIKey)
console.log(supabase)
</script>


<template>
  <div>
    <NuxtPage />
  </div>
</template>
