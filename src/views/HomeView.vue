<template>
  <main class="flex items-center justify-center p-0 m-0 min-h-screen">
    <div
      class="flex flex-wrap flex-col md:flex-nowrap md:flex-row items-center justify-center relative w-full h-full"
    >
      <!-- Bagian Kiri (Gambar Agents) -->
      <div
        class="relative hover-zoom flex-1 overflow-hidden group max-h-[50vh] lg:min-h-screen"
      >
        <router-link to="/agents" class="hover:underline">
          <img
            alt="Agents Wallpaper"
            class="w-full object-cover transition-transform duration-300 transform will-change-transform"
            src="@/assets/images/agent.jpg"
          />
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity"
          >
            <span
              class="text-white valorant-title text-[32px] md:text-2xl lg:text-7xl font-bold overlay-text"
            >
              Agents
            </span>
          </div>
        </router-link>
      </div>

      <!-- Divider Tengah -->
      <div
        class="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-3 bg-red-500 z-10 hidden md:block"
      ></div>
      <div
        class="absolute top-1./2 left-1/2 transform -translate-x-1/2 w-full h-3 bg-red-500 z-10 md:hidden"
      ></div>

      <!-- Logo di Tengah -->
      <img
        alt="Logo"
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 object-cover z-20 rounded-full"
        height="64"
        src="@/assets/images/logo.jpg"
        width="64"
      />

      <!-- Bagian Kanan (Gambar Weapons) -->
      <div
        class="relative hover-zoom flex-1 overflow-hidden group max-h-[50vh] lg:min-h-screen"
      >
        <router-link to="/weapons" class="hover:underline">
          <img
            alt="Weapons Wallpaper"
            class="w-full object-cover transition-transform duration-300 transform will-change-transform"
            src="@/assets/images/weapons.jpg"
          />
          <div
            class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 will-change-opacity"
          >
            <span
              class="text-white valorant-title text-[32px] md:text-2xl lg:text-7xl font-bold overlay-text"
            >
              Weapons
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
/* Efek zoom saat hover tanpa mengubah lebar konten */
.hover-zoom:hover img {
  transform: scale(1.1);
  filter: blur(10px);
}

/* Mengatur teks overlay saat hover */
.group:hover .overlay-text {
  opacity: 1 !important;
}

/* Styling untuk overlay teks */
.overlay-text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}
</style>
