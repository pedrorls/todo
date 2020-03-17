import axios from "axios";

const api = axios.create({
  baseURL: "https://5e683dcfd426c00016b7ccbf.mockapi.io/api/tags/"
});

export const TagsApi = {
  getTag: async tag => {
    const response = await api.get(`/${tag.id}/`);
    return response.data;
  },

  listTags: async () => {
    const response = await api.get("");
    return response.data;
  },

  createTag: async value => {
    const response = await api.post("", { name: value });
    return response.data;
  },

  updateTag: async (tag, values) => {
    const response = await api.patch(`/${tag.id}/`, values);
    return response.data;
  },

  deleteTag: async tag => {
    const response = await api.delete(`${tag.id}`);
    return response.data;
  }
};
