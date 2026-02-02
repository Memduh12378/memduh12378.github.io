const data = [
  {
    title: "Turan Search Projesi",
    desc: "Kendi yaptığım kişisel arama motoru projesi.",
    url: "https://memduh12378.github.io",
    type: "site"
  },
  {
    title: "Zombi Oyunu Devlog",
    desc: "Hayatta kalma korku oyunu geliştirme süreci.",
    url: "https://example.com/zombi",
    type: "blog"
  },
  {
    title: "YouTube Oyun Kanalım",
    desc: "Oyun geliştirme ve korku içerikleri.",
    url: "https://youtube.com",
    type: "youtube"
  }
];

const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

const input = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

input.addEventListener("keyup", (e) => {
  const query = input.value.toLowerCase();
  resultsDiv.innerHTML = "";

  if (query.length < 2) return;

  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.desc.toLowerCase().includes(query)
  );

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span class="badge">${item.type}</span>
    `;
    div.onclick = () => window.open(item.url, "_blank");
    resultsDiv.appendChild(div);
  });
});
