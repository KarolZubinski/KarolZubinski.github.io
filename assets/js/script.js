// Linie kodu (Playwright + logi QA)
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
  ""
];

// Generowanie tła
let output = "";
for (let i = 0; i < 80; i++) {
  output += lines[i % lines.length] + "\n";
}
document.getElementById("bg-code").textContent = output;


// ===============================
// MOBILE: zamiana na linie
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  const p = document.getElementById("hero-line");
  if (!p) return;

  if (window.innerWidth <= 480) {
    const raw = p.textContent.trim();

    // dzielimy tylko po "•"
    const parts = raw.split("•").map(t => t.trim()).filter(Boolean);

    // wstawiamy <br> między elementami
    p.innerHTML = parts.join("<br>");
  }
});
