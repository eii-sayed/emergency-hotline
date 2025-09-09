const heartCount = document.getElementById("heart-count");
const hearts = document.getElementsByClassName("fa-heart");

for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const currentCount = parseInt(heartCount.innerText);
    let newCount;

    if (heart.classList.contains("text-red- 500")) {
      heart.classList.remove("text-red-500");
      heart.classList.add("text-gray-500");
      newCount = currentCount - 1;
    } else {
      heart.classList.remove("text-gray-500");
      heart.classList.add("text-red-500");
      newCount = currentCount + 1;
    }

    heartCount.innerText = newCount;
  });
}
