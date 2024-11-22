<template>
  <div class="valor-bg">
    <AgentList />
  </div>
</template>

<script>
import AgentList from "@/components/AgentList.vue";

export default {
  name: "AgentsView",
  components: {
    AgentList,
  },
};
</script>

<style scoped></style>
