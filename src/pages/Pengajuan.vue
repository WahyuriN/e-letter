<script setup>

import ButtonExample from "@/pages/developments/button/ButtonExample.vue";
</script>

<template>
  <div class="content bg-white rounded-2xl p-5">
    <div class="content-header border-b p-2"> <h1 class="text-black text-xl">Pengajuan Surat</h1></div>
    <div class="content-body p-4">
        <form>
          <label class="block lg:w-5/12 md:w-5/12 sm:w-full  py-3">
            <span class="block text-sm font-medium text-slate-700">PILIH SURAT</span>
            <select class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500" >
              <option>Pilih Surat</option>
              <option>Surat Ijin Penelitian</option>
            </select>
          </label>
          <label class="block lg:w-5/12 md:w-5/12 sm:w-full  py-3">
            <span class="block text-sm font-medium text-slate-700">Nama</span>
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <input type="text" placeholder="Nama Mahasiswa" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label class="block lg:w-5/12 md:w-5/12 sm:w-full  py-3">
            <span class="block text-sm font-medium text-slate-700">NIM</span>
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <input type="text" placeholder="NIM" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>

          <label class="block lg:w-5/12 md:w-5/12 sm:w-full  py-3">
            <span class="block text-sm font-medium text-slate-700">Email</span>
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <input type="email" placeholder="Email Mahasiswa" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text    -pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>

          <label class="block lg:w-5/12 md:w-5/12 sm:w-full  py-3">
            <span class="block text-sm font-medium text-slate-700">No. Handphone</span>
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <input type="text" placeholder="Nomor Handphone" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>

          <label class="block lg:w-5/12 md:w-5/12 sm:w-full  py-3">
            <span class="block text-sm font-medium text-slate-700">Program Studi</span>
            <select class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500" >
              <option>Pilih Program Studi</option>
              <option>Komunikasi dan Penyiaran Islam</option>
              <option>Ilmu Politik</option>
            </select>
          </label>
          <label class="block py-4">

            <button class="rounded-full px-5 py-3 text-white bg-green-600 w-60">Kirim</button>
          </label>


        </form>
    </div>
  </div>
</template>

<style scoped>

</style>