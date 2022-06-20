const baseUrl = "http://localhost:9000";

export const addWordToDB = async (data) => {
  return await fetch(`/add`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const login = async (data) => {
  return await fetch(`/author/login`, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getunverifiedWords = async (token) => {
  return await fetch(`/unverifiedWords`, {
    method: "GET",
    headers: {
      token: token,
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const deleteWord = async (id, token) => {
  return await fetch(`/unverifiedWords/delete/${id}`, {
    method: "DELETE",
    headers: {
      token: token,
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const saveWord = async (data, token) => {
  return await fetch(`/unverifiedwords/save`, {
    method: "POST",
    headers: {
      token: token,
      Accept: "application/json, text/plain",
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => data);
};

export const getAllWords = async () => {
  return await fetch(`/words/getallwords`)
    .then((res) => res.json())
    .then((data) => data);
};
