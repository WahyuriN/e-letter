<script setup>

</script>

<template>
  <div class="content">
      <div class="overview lg:flex md:flex-row gap-10">
        <div class="lg:w-1/2 md:w-1/2 sm:w-full p-5">
          <div class="box rounded-2xl w-full flex-row bg-white">
            <div class="grid grid-cols-4 py-10 px-2">
              <div class="col-span-1 m-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" class="m-auto">
                  <path fill="none" stroke="#00a16d" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25M14.563 12a12.014 12.014 0 0 0-3.427 5.136L9 15m1.5-12.75H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>
              </div>
              <div class="col-span-3">
                <h1 class="text-5xl font-medium text-green-600 my-2">10</h1>
                <label class="text-gray-500">Surat diterima</label>
              </div>
            </div>
            <button class="bg-green-600 w-full rounded-b-2xl py-2 text-white">Selengkapnya</button>
          </div>
        </div>
        <div class="lg:w-1/2 md:w-1/2 sm:w-full p-5">
          <div class="box rounded-2xl w-full flex-row bg-white">
            <div class="grid grid-cols-4 py-10 px-2">
              <div class="col-span-1 m-auto">

                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" class="m-auto">
                  <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/></svg>
              </div>
              <div class="col-span-3">
                <h1 class="text-5xl font-medium text-purple-600 my-2">10</h1>
                <label class="text-gray-500">Surat Pending</label>
              </div>
            </div>
            <button class="bg-purple-600 w-full rounded-b-2xl py-2 text-white">Selengkapnya</button>
          </div>
        </div>
      </div>
      <div class="riwayat mt-2">
        <div class="bg-white border rounded-2xl p-5 h-auto w-full">
          <div class="header border-b">
            <h1 class="text-2xl font-medium">Surat Selesai</h1>
          </div>
          <div class="content py-4 w-full">
            <table class="table-auto w-full">
              <tbody>
              <tr class="border-b h-16">
                <td class="py-2 text-center"  >1</td>
                <td class="text-md text-gray-600 pl-4">Surat ijin penelitian</td>
                <td class="py-2">22 Juli 2023</td>
                <td class="text-right pr-4"><label class="mr-0 text-right text-green-600">Diterima</label></td>
                <td class="text-right pr-4"><label class="mr-0 text-right text-green-600"><button class="py-1 inline-flex px-4 bg-green-600 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg><label class="my-auto text-white">Download</label></button></label></td>
              </tr>
              <tr class="border-b h-16">
                <td  class="py-2 text-center">2</td>
                <td class="text-md text-gray-600 pl-4">Surat Keterangan Aktif</td>
                <td>22 Juli 2023</td>
                <td class="text-right pr-4"><label class="text-green-600">Diterima</label></td>
                <td class="text-right pr-4"><label class="mr-0 text-right text-green-600"><button class="py-1 inline-flex px-4 bg-green-600 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg><label class="my-auto text-white">Download</label></button></label></td>

              </tr>
              <tr class="border-b h-16">

                <td class="py-2 text-center">3</td>
                <td class="text-md text-gray-600 pl-4">Shining Star</td>
                <td>22 Juli 2023</td>
                <td class="text-right pr-4"><label class="text-purple-600">Pending</label></td>
                <td class="text-right pr-4"><label class="mr-0 text-right text-green-600"><button class="py-1 inline-flex px-4 bg-green-600 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z"/></svg><label class="my-auto text-white">Download</label></button></label></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

</style>