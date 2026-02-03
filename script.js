// =======================
// TURAN SEARCH INDEX
// =======================
const data = [
  {
    title: "YouTube",
    category: "Video",
    desc: "YouTube ana sitesi",
    url: "https://www.youtube.com"
  },
  {
    title: "Itch.io",
    category: "Oyun",
    desc: "Indie oyun platformu",
    url: "https://itch.io"
  },
  {
    title: "Canva",
    category: "Tasarım",
    desc: "Online tasarım aracı",
    url: "https://www.canva.com"
  },
  {
    title: "GitHub",
    category: "Kod",
    desc: "Kod depolama ve projeler",
    url: "https://github.com"
  },
  {
    title: "MinnoşAI",
    category: "Yapay Zeka",
    desc: "MinnoşAI Google Colab projesi",
    url: "https://colab.research.google.com/drive/132oIEpta8BM0HL1R_fpYMY-e0M-V76Pj"
  },
  {
    title: "ChatGPT",
    category: "Yapay Zeka",
    desc: "OpenAI ChatGPT",
    url: "https://chat.openai.com"
  },
  {
    title: "Rust Skull Games",
    category: "Oyun Stüdyosu",
    desc: "Rust Skull Games resmi sitesi",
    url: "https://rustskullgames.github.io/"
  },
  {
    title: "TURAN",
    category: "Kişisel",
    desc: "Kişisel arama motorum",
    url: "https://memduh12378.github.io/"
  },
  {
    title: "Roblox",
    category: "Oyunlar",
    desc: "Robloxun ana sayfası",
    url: "https://www.roblox.com/tr"
  },
  {
    title: "Reddit",
    category: "Sosyal Medya",
    desc: "Reddit'in ana sayfası",
    url: "https://www.reddit.com/"
  },
  {
    title: "Piskel",
    category: "Oyunlar",
    desc: "Piksel çizim için mükemmel bir site.",
    url: "https://www.piskelapp.com/"
  },
  {
    title: "PixelLabAI",
    category: "Yapay Zeka",
    desc: "AI karakter oluşturma aracı",
    url: "https://www.pixellab.ai/create-character"
  }
];

// =======================
// SEARCH LOGIC
// =======================
const input = document.getElementById("searchInput");
const results = document.getElementById("results");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase().trim();
  results.innerHTML = "";

  if (query.length < 1) return;

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.desc.toLowerCase().includes(query)
  );

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <small>${item.category}</small>
    `;
    div.onclick = () => window.open(item.url, "_blank");
    results.appendChild(div);
  });
});

// =======================
// THEME TOGGLE (AYNI)
// =======================
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");
});
