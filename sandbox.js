const getButton = document.querySelector(".btn");
const textArea = document.querySelector("#phrase");

const getMemes = async () => {
  const response = await fetch("https://techy-api.vercel.app/api/json");
  if (response.status !== 200) {
    throw new Error("Something went wrong!");
  }
  const data = await response.json();
  return data;
};

getButton.addEventListener("click", () => {
  getMemes()
    .then((data) => {
      console.log(data);
      textArea.textContent = data.message;
    })
    .catch((err) => {
      console.log(err);
    });
});
