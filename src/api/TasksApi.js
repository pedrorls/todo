import axios from "axios";

const api = axios.create({
  baseURL: "https://5e683dcfd426c00016b7ccbf.mockapi.io/api/task/"
});

export const TasksApi = {
  getTask: async task => {
    const response = await api.get(`/${task.id}/`);
    return response.data;
  },

  listTasks: async param => {
    const response = await api.get(`?search=${param}`);
    return response.data;
  },

  createTask: async value => {
    const createdAt = new Date();
    const dueDate = new Date(value.dueDate);
    const reminder = new Date(dueDate);
    reminder.setMinutes(reminder.getMinutes() - value.reminder);

    const data = {
      description: value.description,
      tags: value.tags,
      dueDate: dueDate.getTime(),
      reminder: reminder.getTime(),
      createdAt: createdAt.getTime()
    };
    const response = await api.post("", data);
    return response.data;
  },

  updateTask: async task => {
    const response = await api.put(`/${task.id}`, task);
    return response.data;
  },

  deleteTask: async task => {
    const response = await api.delete(`${task.id}`);
    return response.data;
  }
};
