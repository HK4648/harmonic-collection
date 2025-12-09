document.addEventListener("DOMContentLoaded", function () {

  const memories = [
    "Made my first ever Instagram account!",
    "Went to the beach with my classmates.",
    "Learned how to snowboard for the first time!!",
    "Family trip to Gangneung!! Villa was so niceeee",
    "I took graduation photos with my friends!!"
  ];

  const box = document.getElementById("memory-box");
  const button = document.getElementById("memory-button");

  button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * memories.length);
    box.textContent = memories[randomIndex];
  });

});

