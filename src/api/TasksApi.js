import axios from "axios";

const api = axios.create({
  baseURL: "https://5e683dcfd426c00016b7ccbf.mockapi.io/api/task/"
});

export const TasksApi = {
  getTask: async task => {
    const response = await api.get(`/${task.id}/`);
    return response.data;
  },

  listTasks: async () => {
    const response = await api.get("");
    return response.data;
  },

  createTask: async value => {
    const response = await api.post("", { name: value });
    return response.data;
  },

  updateTask: async (task, values) => {
    const response = await api.patch(`/${task.id}/`, values);
    return response.data;
  },

  deleteTask: async task => {
    const response = await api.delete(`${task.id}`);
    return response.data;
  }
};
