// ====== ARAMA VERİSİ ======
const data = [
  {
    title: "TURAN Search",
    desc: "Kişisel arama motoru projem.",
    url: "https://memduh12378.github.io"
  },
  {
    title: "Zombi Oyunu",
    desc: "Hayatta kalma korku oyunu geliştirme süreci.",
    url: "https://example.com"
  },
  {
    title: "YouTube Kanalım",
    desc: "Oyun geliştirme ve içerik videoları.",
    url: "https://youtube.com"
  }
];

// ====== SEARCH ======
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {
  const q = input.value.toLowerCase();
  results.innerHTML = "";

  if (q.length < 2) return;

  data
    .filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q)
    )
    .forEach(item => {
      const div = document.createElement("div");
      div.className = "result";
      div.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      `;
      div.onclick = () => window.open(item.url, "_blank");
      results.appendChild(div);
    });
});

// ====== TEMA ======
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
