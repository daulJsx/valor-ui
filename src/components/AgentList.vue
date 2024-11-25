<template>
  <div class="container mx-auto p-4 mt-24">
    <!-- Filter: Pencarian dan Filter Berdasarkan Role -->
    <div class="flex space-x-4 mb-4">
      <!-- Input Pencarian -->
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by agent name"
        class="p-2 border border-gray-300 rounded-md"
      />
      <!-- Dropdown Filter Role -->
      <select
        v-model="selectedRole"
        class="p-2 border border-gray-300 rounded-md"
      >
        <option value="">All Roles</option>
        <option value="Initiator">Initiator</option>
        <option value="Controller">Controller</option>
        <option value="Duelist">Duelist</option>
        <option value="Sentinel">Sentinel</option>
      </select>
    </div>

    <div
      v-if="filteredAgents.length === 0"
      class="text-center text-gray-500 font-bold"
    >
      No agents found.
    </div>

    <!-- Daftar Agen yang sudah difilter -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <AgentCard
        v-for="agent in filteredAgents"
        :key="agent.uuid"
        :agent="agent"
      />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { getAgents } from "@/api/valorant";
import AgentCard from "@/components/AgentCard.vue";

export default {
  name: "AgentsList",
  components: {
    AgentCard,
  },
  setup() {
    const agents = ref([]);
    const searchQuery = ref("");
    const selectedRole = ref("");

    // Ambil data agen dari API
    onMounted(async () => {
      const allAgents = await getAgents();
      agents.value = allAgents.filter((agent) => agent.isPlayableCharacter);
    });

    // Filter agen berdasarkan pencarian dan role
    const filteredAgents = computed(() => {
      return agents.value.filter((agent) => {
        const matchesName = agent.displayName
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
        const matchesRole =
          selectedRole.value === "" ||
          (agent.role && agent.role.displayName === selectedRole.value);

        return matchesName && matchesRole;
      });
    });

    return {
      searchQuery,
      selectedRole,
      filteredAgents,
    };
  },
};
</script>

<style scoped>
/* Tambahkan styling jika diperlukan */
</style>
