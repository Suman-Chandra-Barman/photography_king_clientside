const setAuthToken = (user) => {
  fetch("https://photography-king-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("photography_king_jwt", data.token);
    })
    .catch((error) => console.log(error));
};

export default setAuthToken;
