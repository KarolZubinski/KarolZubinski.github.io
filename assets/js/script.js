// ===============================
// LINIJKI KODU W TLE
// ===============================

const lines = [
  "POST /api/cart/add -> 201 Created",
  "Checking logs...",
  "CI Status: RUNNING | stage=test",
  "Memory usage stable",
  "Retrying failed test...",
  "Bug found: null pointer @ checkout.js:221",
  "Re-running smoke tests...",
  "system stable",
  "",
  "test('login test', async ({ page }) => {",
  "  await page.goto('/login');",
  "  await page.fill('#email', 'test@test.com');",
  "  await page.fill('#password', '123456');",
  "  await page.click('button[type=submit]');",
  "  await expect(page).toHaveURL('/dashboard');",
  "});",
  "",
  "GET /api/user -> 200 OK",
  "Running regression suite...",
  "[PASS] testLogin()",
  "[PASS] testProductList()",
  "[FAIL] testPaymentGatewayTimeout",
  "Engineer enters debug mode… coffee level: CRITICAL",
  "Applying hotfix: added semicolon of destiny",
  "CI bot whispers: “are you sure about that?”",
  "checkout-service: \"I was not prepared for this...\"",
  "POST /api/coffee/refill -> 418 I'm a teapot",
  "Running tests again, hoping for a miracle…",
  "[WARN] testFlakyTest() is feeling moody today",
  "Auto-healing module enabled: giving server a motivational speech",
  "Server response: “ok fine, I'll work”",
  "Deploy hamster starts spinning the wheel faster",
  "[INFO] System morale: HIGH",
  "[PASS] testUniverseMakesSense() — unexpectedly",
  "Preparing deploy… summoning senior engineer for moral support",
  ""
];

// generujemy długi pasek kodu
let block = "";
for (let i = 0; i < 80; i++) {
  block += lines[i % lines.length] + "\n";
}
document.getElementById("scroll-inner").textContent = block.repeat(6);


// ===============================
// MOBILE: podział 4 słów na 4 linie
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 480) return;

  const p = document.getElementById("hero-line");
  if (!p) return;

  p.innerHTML = `
    QA Engineer<br>
    Testowanie<br>
    Automatyzacje<br>
    Accessibility
  `;

  // MOBILE: rozbijamy nagłówek na 3 linie
document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 480) return;

  const title = document.getElementById("hero-title");
  if (!title) return;

  title.innerHTML = `
    Odkrywam to,<br>
    co nie działa,<br>
    zanim zrobi to użytkownik.
  `;
});

});
