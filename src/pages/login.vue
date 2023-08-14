<script setup>

</script>

<template>
  <div class="mx-auto lg:mt-36 sm:mt-20 my-auto">
    <div class=" rounded-3xl w-96 m-auto bg-white flex-row p-5 pt-10">
      <div class="image mx-auto w-full my-5">
        <img src="@/assets/logofksp1.png" alt="" class="mx-auto w-2/5">
      </div>
      <div class="w-full text-center">
        <h2 class="text-xl my-3">FKSP UNSIQ</h2>
      </div>
      <div class="form-s w-full py-4">
        <form action="/">
          <label class="block w-full py-2 px-1">
            <span class="block text-sm font-medium text-slate-700">NIM</span>
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <input type="text" placeholder="Masukan NIM" class="mt-1 block w-full px-4 py-3 bg-white border border-slate-300  text-md shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              rounded-xl
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label class="block w-full py-2 px-1">
            <span class="block text-sm font-medium text-slate-700">Password</span>
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <input type="password" placeholder="*******" class="mt-1 block w-full px-4 py-3 bg-white border border-slate-300  text-md shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              rounded-xl
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500
            "/>
          </label>
          <label class="block w-full py-3 px-1">
            <!-- Using form state modifiers, the classes can be identical for every input -->
            <button class="w-full rounded-full py-3 text-center bg-green-600 text-white" >
              Login
            </button>
          </label>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>