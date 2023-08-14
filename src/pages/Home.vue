<template>
  <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-8">
    <div class="flex sm:col-span-2 lg:col-span-6 relative flex-grow-0 ">
      <div class="bg-white border rounded-2xl p-5 h-auto w-full">
        <div class="header">
          <h1 class="text-2xl font-medium">Riwayat Pengajuan</h1>
        </div>
        <div class="content py-3 w-full">
          <table class="table-auto w-full">
            <tbody>
            <tr>
              <td>1</td>
              <td class="text-md text-gray-600 pl-4">Surat ijin penelitian</td>
              <td>22 Juli 2023</td>
              <td class="text-right pr-4"><label class="mr-0 text-right text-green-600">Diterima</label></td>
            </tr>
            <tr>
              <td>2</td>
              <td class="text-md text-gray-600 pl-4">Surat Keterangan Aktif</td>
              <td>22 Juli 2023</td>
              <td class="text-right pr-4"><label class="text-green-600">Diterima</label></td>
            </tr>
            <tr>

              <td>3</td>
              <td class="text-md text-gray-600 pl-4">Shining Star</td>
              <td>22 Juli 2023</td>
              <td class="text-right pr-4"><label class="text-purple-600">Pending</label></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="grid sm:col-span-2 lg:col-span-2 bg-white p-5 gap-5">
      <div class="header">
        <h1 class="text-2xl font-medium">
          Verifikasi
        </h1>
      </div>
      <div class="card-content grid-flow-row grid-cols-1  gap-5 grid rounded-2xl">
        <div class="bg-purple-50 rounded-xl p-5">
          <div class="grid grid-cols-4">
            <div class="col-span-1 flex">
              <tw-icon name="heroicons-outline:credit-card" class="w-12 h-12 text-purple-500 my-auto"/>

            </div>
            <div class="col-span-3">
              <h2 class="text-black-500 text-xl ">
                Pending
              </h2>
              <h3 class="mt-2 text-green-500 text-sm">
                6
              </h3>

            </div>
          </div>
        </div>
        <div class="bg-green-50 rounded-xl p-5">
          <div class="grid grid-cols-4">
            <div class="col-span-1 flex">
              <tw-icon name="heroicons-outline:credit-card" class="w-12 h-12 text-green-500 my-auto"/>

            </div>
            <div class="col-span-3">
              <h2 class="text-black-500 text-xl ">
                Diterima
              </h2>
              <h3 class="mt-2 text-green-500 text-sm">
                6
              </h3>

            </div>
          </div>
        </div>

      </div>
    </div>

  </div>

  <div class="w-full flex-row p-5 bg-white my-5 rounded-2xl">

    <div class="w-full border-b-2 p-3">
      <h1 class="text-black text-xl">
        Pengumuman
      </h1>

    </div>
    <div class="w-full p-4">
      <div class="pengumuman w-full border-b mt-2">
        <div class="title">
          <h2 class="text-md text-black">
            Pengumiman 1
          </h2>
        </div>
        <div class="pengumuman-contents">
          <p class="text-sm text-gray-500 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque id nesciunt consectetur facilis nisi illum, nam ratione, maxime sit error maiores beatae, molestias iure quam ullam tempora commodi! Optio odit maiores, repudiandae similique sapiente, quia sint quisquam suscipit pariatur eaque voluptatibus. Quo, sint! Officiis mollitia neque soluta corrupti error enim, praesentium quibusdam assumenda magni ullam asperiores molestiae voluptatem, aliquam totam doloremque dicta facere illo a iusto inventore vel nemo provident omnis hic? Similique aliquid optio modi, accusamus animi veniam id minima veritatis distinctio officia necessitatibus quod ducimus amet voluptatem, asperiores ipsa dicta atque quam eaque! Mollitia id molestias placeat!</p>
          <br>
        </div>
      </div>
      <div class="pengumuman w-full border-b mt-2">
        <div class="title">
          <h2 class="text-md text-black">
            Pengumiman 2
          </h2>
        </div>
        <div class="pengumuman-contents">
          <p class="text-sm text-gray-500 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque id nesciunt consectetur facilis nisi illum, nam ratione, maxime sit error maiores beatae, molestias iure quam ullam tempora commodi! Optio odit maiores, repudiandae similique sapiente, quia sint quisquam suscipit pariatur eaque voluptatibus. Quo, sint! Officiis mollitia neque soluta corrupti error enim, praesentium quibusdam assumenda magni ullam asperiores molestiae voluptatem, aliquam totam doloremque dicta facere illo a iusto inventore vel nemo provident omnis hic? Similique aliquid optio modi, accusamus animi veniam id minima veritatis distinctio officia necessitatibus quod ducimus amet voluptatem, asperiores ipsa dicta atque quam eaque! Mollitia id molestias placeat!</p>
          <br>
        </div>
      </div>
      <div class="pengumuman w-full border-b mt-2">
        <div class="title">
          <h2 class="text-md text-black">
            Pengumiman 3
          </h2>
        </div>
        <div class="pengumuman-contents">
          <p class="text-sm text-gray-500 py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque id nesciunt consectetur facilis nisi illum, nam ratione, maxime sit error maiores beatae, molestias iure quam ullam tempora commodi! Optio odit maiores, repudiandae similique sapiente, quia sint quisquam suscipit pariatur eaque voluptatibus. Quo, sint! Officiis mollitia neque soluta corrupti error enim, praesentium quibusdam assumenda magni ullam asperiores molestiae voluptatem, aliquam totam doloremque dicta facere illo a iusto inventore vel nemo provident omnis hic? Similique aliquid optio modi, accusamus animi veniam id minima veritatis distinctio officia necessitatibus quod ducimus amet voluptatem, asperiores ipsa dicta atque quam eaque! Mollitia id molestias placeat!</p>
          <br>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>