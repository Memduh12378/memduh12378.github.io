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
