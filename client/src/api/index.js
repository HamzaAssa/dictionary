const baseUrl = "http://localhost:9000/";

export const addWordToDB = async (data) => {
  return await fetch(`${baseUrl}add`, {
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
  return await fetch(`${baseUrl}author/login`, {
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
  return await fetch(`${baseUrl}unverifiedWords`, {
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
  return await fetch(`${baseUrl}unverifiedWords/delete/${id}`, {
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
  console.log(data);
  return await fetch(`${baseUrl}unverifiedwords/save`, {
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
  return await fetch(`${baseUrl}words/getallwords`)
    .then((res) => res.json())
    .then((data) => data);
};
