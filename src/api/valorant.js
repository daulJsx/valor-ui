import axios from "axios";

const API_BASE_URL = "https://valorant-api.com/v1";

// Fetch all agents
export const getAgents = async () => {
  const response = await axios.get(`${API_BASE_URL}/agents`);
  return response.data.data; // 'data.data' karena struktur API nested
};

// Fetch all weapons
export const getWeapons = async () => {
  const response = await axios.get(`${API_BASE_URL}/weapons`);
  return response.data.data;
};

// Fetch agent details by ID
export const getAgentDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/agents/${id}`);
  return response.data.data;
};

// Fetch weapon details by ID
export const getWeaponDetails = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/weapons/${id}`);
  return response.data.data;
};
