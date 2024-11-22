<template>
  <div class="valor-bg">
    <div class="container mx-auto p-4 mt-24">
      <div v-if="weapons">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <WeaponCard
            v-for="weapon in weapons"
            :key="weapon.uuid"
            :weapon="weapon"
          />
        </div>
      </div>
      <div v-else>
        <p class="text-center text-gray-400">Loading all weapon...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import WeaponCard from "@/components/WeaponCard.vue";
import { getWeapons } from "@/api/valorant"; // Endpoint API untuk senjata

export default {
  name: "WeaponsView",
  components: {
    WeaponCard,
  },
  setup() {
    const weapons = ref([]);

    onMounted(async () => {
      try {
        weapons.value = await getWeapons(); // Ambil data senjata dari API
      } catch (error) {
        console.error("Failed to fetch weapons:", error);
      }
    });

    return {
      weapons,
    };
  },
};
</script>
