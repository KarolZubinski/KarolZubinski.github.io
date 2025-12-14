document.addEventListener("DOMContentLoaded", () => {
  const photoBox = document.getElementById("contactPhoto");
  if (!photoBox) return;

  const wrapper = photoBox.querySelector(".photo-wrapper");
  let dimTimeout;

  wrapper.addEventListener("click", () => {
    wrapper.classList.remove("dimmed");
    clearTimeout(dimTimeout);

    dimTimeout = setTimeout(() => {
      wrapper.classList.add("dimmed");
    }, 15000);
  });
});
