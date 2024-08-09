const backendUrl = "http://localhost:8000";

export const allApi = {
  getAllUser: {
    method: "GET",
    url: `${backendUrl}`,
  },
  getUserById: {
    method: "GET",
    url: `${backendUrl}`,
  },
  addUser: {
    method: "POST",
    url: `${backendUrl}`,
  },
  deleteUser: {
    method: "DELETE",
    url: `${backendUrl}`,
  },
  updateUser: {
    method: "PUT",
    url: `${backendUrl}`,
  },
};
