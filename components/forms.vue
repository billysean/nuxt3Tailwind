<template>
  <div class="space-y-6">
    <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-6">
        <div class="md:col-span-1">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Penambahan Distribusi</h3>
          <p class="mt-1 text-sm text-gray-500">
            Pengisian jalur distribusi
          </p>
        </div>
        <div class="mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-12 sm:col-span-6">
                <label for="merk" class="block text-sm font-medium text-gray-700">Merk</label>
                <input type="text" name="merk" id="merk" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md border-gray-300 rounded-md" />
              </div>

              <div class="col-span-12 sm:col-span-6">
                <label for="Jenis Kemasan" class="block text-sm font-medium text-gray-700">Jenis Kemasan</label>
                <input type="text" name="Jenis Kemasan" id="Jenis Kemasan" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md border-gray-300 rounded-md" />
              </div>

              <div class="col-span-12 sm:col-span-6">
                <label for="volume" class="block text-sm font-medium text-gray-700">Volume</label>
                <input type="text" name="volume" id="volume" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md border-gray-300 rounded-md" />
              </div>

              <div class="col-span-6">
                <label for="receiver" class="block text-sm font-medium text-gray-700">Tujuan Distribusi</label>
                <input type="text" name="receiver" id="receiver" autocomplete="receiver" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-md border-gray-300 rounded-md" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="flex justify-end">
      <button type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Cancel
      </button>
      <button type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save
      </button>
    </div>
  </div>
</template>