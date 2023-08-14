<script setup>

</script>

<template>
  <div class="content lg:flex gap-10 md:flex-row">
    <div class="left-content col-span-2 lg:w-1/3 md:w-full gap-10 grid-flow-row grid">
      <div class="card-profile w-full bg-white rounded-2xl p-5 flex-row ">
          <div class="title w-full text-center px-5 py-3">
            <h1 class="text-xl text-black">Foto Profil</h1>
          </div>
          <div class="image w-3/5 m-auto my-3">
              <img src="@/assets/img.jpg" class="img rounded-full border"/>
          </div>
          <div class="content-footer w-full text-center p-5">
            <button class="rounded-full px-5 py-3 text-white bg-green-600 w-60">Ganti Foto Profil</button>

          </div>
      </div>
      <div class="card-profile w-full bg-white rounded-2xl p-5 flex-row ">
        <div class="title w-full text-left px-2 py-3 border-b">
          <h1 class="text-xl text-black">Ketentuan Ubah Foto</h1>
        </div>
        <div class="w-full p-5">
          <ul class="list-disc">
            <li>Ukuran file foto tidak lebih dari 1 MB</li>
            <li>Background Warna Merah</li>
            <li>Foto Formal</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="lg:w-2/3 md:w-full bg-white p-5 rounded-2xl">
      <div class="title border-b ">
        <h1 class="text-xl text-black">Data Mahasiswa</h1>

      </div>
      <form>

        <label class="block lg:w-8/12 md:w-8/12 sm:w-full  py-3">
          <span class="block text-sm font-medium text-slate-700">Nama</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input type="text" placeholder="Nama Mahasiswa" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
        </label>
        <label class="block lg:w-8/12 md:w-8/12 sm:w-full  py-3">
          <span class="block text-sm font-medium text-slate-700">NIM</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input type="text" placeholder="NIM" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
        </label>

        <label class="block lg:w-8/12 md:w-8/12 sm:w-full  py-3">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input type="email" placeholder="Email Mahasiswa" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text    -pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
        </label>

        <label class="block lg:w-8/12 md:w-8/12 sm:w-full  py-3">
          <span class="block text-sm font-medium text-slate-700">No. Handphone</span>
          <!-- Using form state modifiers, the classes can be identical for every input -->
          <input type="text" placeholder="Nomor Handphone" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
        </label>

        <label class="block lg:w-8/12 md:w-8/12 sm:w-full  py-3">
          <span class="block text-sm font-medium text-slate-700">Program Studi</span>
          <select class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500" >
            <option>Pilih Program Studi</option>
            <option selected>Komunikasi dan Penyiaran Islam</option>
            <option>Ilmu Politik</option>
          </select>
        </label>
        <label class="block py-4">

          <button class="rounded-full px-5 py-3 text-white bg-green-600 w-60">Simpan Perubahan</button>
        </label>


      </form>
    </div>
  </div>
</template>

<style scoped>

</style>