document.addEventListener("DOMContentLoaded", () => {
  const photoBox = document.getElementById("contactPhoto");
  let dimTimeout;

  if (!photoBox) return;

  photoBox.addEventListener("click", () => {
    // odsłoń zdjęcie
    photoBox.classList.remove("dimmed");

    // reset licznika
    clearTimeout(dimTimeout);

    // po 15 sekundach znowu przygaś
    dimTimeout = setTimeout(() => {
      photoBox.classList.add("dimmed");
    }, 15000);
  });
});
