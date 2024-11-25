<template>
  <div class="block flex-1 cursor-pointer" @click="navigateToDetail">
    <div
      class="bg-opacity-80 bg-gray-900 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden flex flex-col h-full hover:outline hover:outline-offset-2 hover:outline-4 hover:outline-red-500"
    >
      <!-- Bagian gambar sebagai navigasi -->
      <img
        class="w-full h-48 object-contain hover:transition-transform hover:scale-110"
        :src="weapon.displayIcon"
        :alt="weapon.displayName"
      />
      <div class="p-5 bg-opacity-60 backdrop-blur-md text-left">
        <h2 class="text-2xl font-bold text-white">
          {{ weapon.displayName }}
        </h2>
        <span
          class="badge inline-block px-3 py-1 border-2 border-red-500 text-red-500 rounded-md text-sm mt-2"
        >
          {{ weapon.shopData?.category || "No Category" }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeaponCard",
  props: {
    weapon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToDetail() {
      this.$router.push({
        name: "weapon-detail",
        params: { id: this.weapon.uuid },
      });
    },
  },
};
</script>
