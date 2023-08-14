<template>
  <div
    class="min-h-screen w-full"
    >

    <!-- Content -->
    <div class="w-full h-screen">
      <div class="mx-auto bg-green-600 h-screen flex">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'DefaultLayout',
  components: {
  },
  setup() {

  }
}
</script>