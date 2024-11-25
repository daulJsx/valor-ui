<template>
  <div class="valor-bg text-white min-h-screen">
    <div class="container mx-auto p-6">
      <!-- Pastikan weapon tidak null sebelum merender -->
      <div v-if="weapon">
        <!-- Header & Weapon Image -->
        <!-- Back Button -->
        <router-link
          to="/weapons"
          class="bg-black/30 px-4 py-2 rounded mb-4 inline-block"
        >
          Back to Weapons
        </router-link>
        <div class="flex flex-col justify-center items-center gap-5 mb-6">
          <div class="text-center mb-6">
            <h1 class="valorant-title text-7xl font-bold">
              {{ weapon.displayName }}
            </h1>
            <p v-if="shopData">
              {{ weapon.shopData.category }}
            </p>
          </div>

          <img
            :src="weapon.displayIcon"
            :alt="weapon.displayName + ' weapon icon'"
            class="w-auto h-auto"
          />
        </div>

        <!-- Weapon Details -->
        <div
          v-if="weapon.weaponStats"
          class="py-9 mx-auto bg-black/20 backdrop-blur-lg rounded-lg shadow-lg mb-6 max-w-xl"
        >
          <h2 class="text-2xl font-semibold text-center">Details</h2>
          <div class="mb-6 flex items-center justify-around p-6">
            <div class="grid grid-cols-2 gap-4">
              <!-- Cost -->
              <div v-if="weapon?.shopData">
                <p class="text-gray-400">Cost:</p>
                <p class="text-xl font-bold">
                  {{ weapon.shopData.cost || "N/A" }}
                </p>
              </div>

              <!-- Fire Rate -->
              <div v-if="weapon?.weaponStats">
                <p class="text-gray-400">Fire Rate:</p>
                <p class="text-xl font-bold">
                  {{ weapon.weaponStats.fireRate || "N/A" }}
                </p>
              </div>

              <!-- Magazine Size -->
              <div v-if="weapon?.weaponStats">
                <p class="text-gray-400">Magazine:</p>
                <p class="text-xl font-bold">
                  {{ weapon.weaponStats.magazineSize || "N/A" }}
                </p>
              </div>

              <!-- Reload Time -->
              <div v-if="weapon?.weaponStats">
                <p class="text-gray-400">Reload Time:</p>
                <p class="text-xl font-bold">
                  {{ weapon.weaponStats.reloadTimeSeconds || "N/A" }} s
                </p>
              </div>

              <!-- Damage Ranges -->
              <div
                v-for="(damage, index) in weapon?.weaponStats?.damageRanges ||
                []"
                :key="index"
                class="space-y-3"
              >
                <div>
                  <p class="text-gray-400">
                    Head Damage at {{ damage.rangeStartMeters }} -
                    {{ damage.rangeEndMeters }} meters:
                  </p>
                  <p class="text-lg font-bold">
                    {{ damage.headDamage || "N/A" }}
                  </p>
                </div>
                <div>
                  <p class="text-gray-400">
                    Body Damage at {{ damage.rangeStartMeters }} -
                    {{ damage.rangeEndMeters }} meters:
                  </p>
                  <p class="text-lg font-bold">
                    {{ damage.bodyDamage || "N/A" }}
                  </p>
                </div>
                <div>
                  <p class="text-gray-400">
                    Leg Damage at {{ damage.rangeStartMeters }} -
                    {{ damage.rangeEndMeters }} meters:
                  </p>
                  <p class="text-lg font-bold">
                    {{ damage.legDamage || "N/A" }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Skins Section -->
        <div class="mt-6">
          <h2 class="valorant-title text-5xl text-center py-3">Skins</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              v-for="skin in weapon.skins"
              :key="skin.uuid"
              class="bg-black/20 backdrop-blur-lg rounded-lg shadow-lg p-4"
            >
              <!-- Skin Image -->
              <img
                :src="skin.displayIcon"
                :alt="skin.displayName + ' skin icon'"
                class="w-full h-auto object-cover mb-4"
              />
              <h3 class="text-xl font-bold mb-2">{{ skin.displayName }}</h3>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-else class="text-center text-gray-400">
        <p>Loading weapon details...</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { getWeaponDetails } from "@/api/valorant";

export default {
  name: "WeaponDetail",
  setup() {
    const route = useRoute();
    const weapon = ref(null);

    // Fetch weapon details
    const fetchWeapon = async (id) => {
      weapon.value = await getWeaponDetails(id);
    };
    onMounted(() => fetchWeapon(route.params.id));

    // watch(
    //   () => route.params.id,
    //   (newId) => fetchWeapon(newId)
    // );

    return { weapon };
  },
};
</script>

<style scoped></style>
