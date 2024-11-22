<template>
  <div
    class="max-w-sm bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden"
  >
    <router-link :to="'/agents/' + agent.uuid" class="block">
      <img
        class="w-full hover:transition-transform hover:scale-110"
        :src="agent.displayIcon"
        alt="Agent Icon"
      />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2 text-white">
          {{ agent.displayName }}
        </div>
        <p class="text-red-500 text-base">
          {{ agent.role.displayName }}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "AgentCard",
  props: {
    agent: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Styling khusus untuk AgentCard */
</style>
