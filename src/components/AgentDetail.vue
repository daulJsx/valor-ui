<template>
  <div class="valor-bg relative p-7">
    <div v-if="agent" class="flex flex-col min-h-screen relative text-white">
      <!-- Main Container -->
      <main class="flex flex-1 relative">
        <!-- Left Section -->
        <section class="flex-1 p-8 relative z-10">
          <!-- Header -->
          <div class="flex justify-between items-center mb-8 relative z-10">
            <div>
              <!-- Back Button -->
              <router-link
                to="/agents"
                class="btn-secondary px-4 py-2 rounded mb-4 inline-block"
              >
                Back to Agents
              </router-link>
              <!-- Agent Name -->
              <h1 class="valorant-title text-6xl font-bold uppercase">
                {{ agent.displayName }}
              </h1>
              <!-- Agent Description -->
              <p class="mt-4 max-w-lg">{{ agent.description }}</p>
            </div>
          </div>

          <!-- Abilities Grid -->
          <div class="grid grid-cols-4 gap-4 relative z-10">
            <div
              v-for="ability in agent.abilities"
              :key="ability.slot"
              class="bg-opacity-10 bg-slate-800 backdrop-blur-lg rounded-lg shadow p-4"
            >
              <img
                :src="ability.displayIcon"
                alt="Ability Icon"
                class="w-10 h-10 mb-2"
              />
              <h2 class="text-xl font-bold">{{ ability.displayName }}</h2>
              <p class="text-sm">{{ ability.description }}</p>
            </div>
          </div>
        </section>

        <!-- Background Character Image -->
        <img
          :src="agent.background"
          alt="Agent Background"
          class="character-bg -z-2"
        />
        <img
          :src="agent.fullPortrait"
          alt="Agent Background"
          class="character-image -z-1"
        />
      </main>
    </div>

    <div v-else class="text-center p-6 text-white">Loading...</div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getAgents } from "@/api/valorant";

export default {
  name: "AgentDetail",
  setup() {
    const route = useRoute();
    const agent = ref(null);

    // Fetch Agent Data
    onMounted(async () => {
      const agents = await getAgents();
      const agentId = route.params.id;
      agent.value = agents.find((ag) => ag.uuid === agentId);
    });

    return {
      agent,
    };
  },
};
</script>

<style scoped>
/* General Styling */
body {
  font-family: "Roboto", sans-serif;
  background-color: #1a1a1a;
  color: #ffffff;
}
.btn-secondary {
  background-color: #2c2c2c;
  color: #ffffff;
}
.btn-secondary:hover {
  background-color: #3d3d3d;
}
.character-image,
.character-bg {
  position: absolute;
  top: 0;
  height: 100%;
  object-fit: cover;
}

.character-image {
  right: 0;
}

.character-bg {
  right: 9rem;
}
</style>
