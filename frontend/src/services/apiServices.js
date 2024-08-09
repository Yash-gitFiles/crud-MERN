import { allApi } from "../utils/allApi";

export function addUsers() {
  return fetch(`${allApi.addUser.url}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function createUser(sendData) {
  return fetch(`${allApi.addUser.url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sendData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function deleteUserApi(id) {
  return fetch(`${allApi.deleteUser.url}/${id}`, {
    method: "DELETE",
  })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function updateUserApi(id, data) {
  return fetch(`${allApi.updateUser.url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
