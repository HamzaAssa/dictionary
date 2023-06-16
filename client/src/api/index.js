// const baseUrl = "/";
const baseUrl = "http://localhost:7060/";

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
export const addDefinationToDB = async (data) => {
  return await fetch(`${baseUrl}addDefination`, {
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
export const addExampleToDB = async (data) => {
  return await fetch(`${baseUrl}addExample`, {
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

export const getUnverifiedData = async (token) => {
  return await fetch(`${baseUrl}unverified/data`, {
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
// Get all unverified words
// export const getunverifiedWords = async (token) => {
//   return await fetch(`${baseUrl}unverified/words`, {
//     method: "GET",
//     headers: {
//       token: token,
//       Accept: "application/json, text/plain",
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// };

// // Get an unverified Example
// export const getAnUnverifiedExample = async (token) => {
//   return await fetch(`${baseUrl}unverified/examples`, {
//     method: "GET",
//     headers: {
//       token: token,
//       Accept: "application/json, text/plain",
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// };

// // Get an unverified Example
// export const getAnUnverifiedDefination = async (token) => {
//   return await fetch(`${baseUrl}unverified/definations`, {
//     method: "GET",
//     headers: {
//       token: token,
//       Accept: "application/json, text/plain",
//       "Content-type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => data);
// };

export const deleteData = async (wordId, exampleId, definationId, token) => {
  return await fetch(
    `${baseUrl}unverified/delete/${wordId}/${exampleId}/${definationId}`,
    {
      method: "DELETE",
      headers: {
        token: token,
        Accept: "application/json, text/plain",
        "Content-type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data);
};

// Verfiy dectionary data including word, definations, examples
export const verifyData = async (data, token) => {
  return await fetch(`${baseUrl}unverified/verify`, {
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

// Verified words
export const getAllWords = async () => {
  return await fetch(`${baseUrl}verfied/words`)
    .then((res) => res.json())
    .then((data) => data);
};
// Verified data
export const getAllVerifiedData = async () => {
  return await fetch(`${baseUrl}verfied/data`)
    .then((res) => res.json())
    .then((data) => data);
};
