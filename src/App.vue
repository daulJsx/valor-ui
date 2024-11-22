<template>
  <div>
    <!--  navbar ketika di halaman agents  -->
    <nav v-if="$route.name === 'agents'" class="p-4 fixed">
      <ul class="flex items-center space-x-4">
        <li>
          <router-link to="/" class="hover:underline"
            ><img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/96/valorant.png"
              alt="valorant"
          /></router-link>
        </li>
        <li>
          <router-link to="/agents" class="valorant-title text-white text-2xl"
            >Agents</router-link
          >
        </li>
      </ul>
    </nav>
    <!--  navbar ketika di halaman weapons  -->
    <nav v-if="$route.name === 'weapons'" class="p-4 fixed z-50">
      <ul class="flex items-center space-x-4">
        <li>
          <router-link to="/" class="hover:underline"
            ><img
              width="48"
              height="48"
              src="https://img.icons8.com/fluency/96/valorant.png"
              alt="valorant"
          /></router-link>
        </li>
        <li>
          <router-link to="/weapons" class="valorant-title text-white text-2xl"
            >Weapons</router-link
          >
        </li>
      </ul>
    </nav>

    <!-- Tampilkan konten halaman sesuai rute -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
nav {
  backdrop-filter: blur(10px); /* Efek blur */
  -webkit-backdrop-filter: blur(10px); /* Dukungan untuk Safari */
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* Garis bawah yang halus */

  width: 100%; /* Pastikan navbar mencakup seluruh lebar */
}
</style>
