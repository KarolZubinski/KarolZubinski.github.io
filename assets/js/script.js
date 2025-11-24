/*
  Skrypt odpowiada za:
  - ukrycie nakładki po kliknięciu
  - przywrócenie nakładki po określonym czasie (tutaj 15000ms = 15s)
  - dodanie klasy fade-in żeby pojawienie było animowane
*/

// TIMEOUT_MS — ustaw tutaj czas (ms) po którym nakładka wróci
const TIMEOUT_MS = 5000; // 5000ms = 5 sekund (zmień na 20000 dla 20s)

// Funkcja wywoływana z onclick w elemencie nakładki
function revealImage() {
  const cover = document.getElementById("imageCover");
  if (!cover) return;

  // Ukrywamy nakładkę natychmiast
  cover.style.display = "none";

  // Jeśli był wcześniej ustawiony timer — czyścimy (bezpieczeństwo)
  if (cover._returnTimer) {
    clearTimeout(cover._returnTimer);
  }

  // Ustawiamy timer, po którym nakładka wróci z animacją
  cover._returnTimer = setTimeout(() => {
    // Przywróć display
    cover.style.display = "flex";

    // Dodaj klasę, aby animacja fade-in zadziałała
    cover.classList.add("fade-in");

    // Po zakończeniu animacji usuwamy klasę, żeby można ją było ponownie użyć
    setTimeout(() => {
      cover.classList.remove("fade-in");
      // usuń referencję do timera
      delete cover._returnTimer;
    }, 1300); // powinno być trochę dłużej niż czas animacji (1.2s)
  }, TIMEOUT_MS);
}

// DODATKOWA BEZPIECZNOŚĆ:
// Jeżeli użytkownik zmieni kartę i wróci, lub przeładuje, upewniamy się, że nakładka
// jest widoczna (nie chcemy by było permanentnie ukryta bez możliwości przywrócenia).
window.addEventListener("pageshow", () => {
  const cover = document.getElementById("imageCover");
  if (cover && !cover._returnTimer && cover.style.display === "none") {
    // jeśli nie ma timera (np. strona załadowana po raz drugi), przywróć cover
    cover.style.display = "flex";
  }
});
