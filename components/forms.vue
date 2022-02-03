<script setup>
import TiptapVue from "./tiptap.vue";
</script>

<template>
  <div class="space-y-6">
    <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Blog Details</h3>
          <p class="mt-1 text-sm text-gray-500">
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form class="space-y-6" action="#" method="POST">
            <div class="grid grid-cols-3 gap-6">
              <div class="col-span-3 sm:col-span-2">
                <label
                  for="company-website"
                  class="block text-sm font-medium text-gray-700"
                >
                  Blog Title
                </label>
                <div class="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    class="
                      focus:ring-indigo-500 focus:border-indigo-500
                      flex-1
                      block
                      w-full
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="Blog Title (max.30 words)"
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                for="about"
                class="block text-sm font-medium text-gray-700"
              >
                Blog Category
              </label>
              <div class="mt-1">
                <input
                    type="text"
                    name="company-website"
                    id="company-website"
                    class="
                      focus:ring-indigo-500 focus:border-indigo-500
                      flex-1
                      block
                      w-full
                      rounded-none rounded-r-md
                      sm:text-sm
                      border-gray-300
                    "
                    placeholder="Blog Category"
                  />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700">
                Blog Content
              </label>
              <TiptapVue />
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button
        type="button"
        class="
          bg-white
          py-2
          px-4
          border border-gray-300
          rounded-md
          shadow-sm
          text-sm
          font-medium
          text-gray-700
          hover:bg-gray-50
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Cancel
      </button>
      <button
        type="submit"
        class="
          ml-3
          inline-flex
          justify-center
          py-2
          px-4
          border border-transparent
          shadow-sm
          text-sm
          font-medium
          rounded-md
          text-white
          bg-indigo-600
          hover:bg-indigo-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-indigo-500
        "
      >
        Save
      </button>
    </div>
  </div>
</template>

