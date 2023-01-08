const heading = document.getElementById("myHeading");
const audio = document.getElementById("myAudio");

async function getAudio() {
  const response = await fetch(
    "https://owen-wilson-wow-api.onrender.com/wows/random"
  );
  const data = await response.json();
  return data[0].audio;
}

heading.addEventListener("mouseover", async () => {
  audio.setAttribute("src", await getAudio());
  audio.play();
});
