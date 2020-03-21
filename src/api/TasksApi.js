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
    return response.data.map(task => ({
      id: task.id,
      description: task.description,
      finished: task.finished,
      reminder: task.reminded,
      dueDate: new Date(task.dueDate).toLocaleDateString("pt-BR"),
      createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR")
    }));
  },

  createTask: async value => {
    const createdAt = new Date();
    const dueDate = new Date(value.dueDate);

    const data = {
      description: value.description,
      tags: value.tags,
      dueDate: dueDate.getTime(),
      reminder: value.reminder,
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
