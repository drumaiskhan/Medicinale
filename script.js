// script.js
document.getElementById("qaForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const q = this.question.value;
  const qaList = document.getElementById("qaList");
  const p = document.createElement("p");
  p.textContent = `Q: ${q}`;
  qaList.appendChild(p);
  this.reset();
});

document.getElementById("articleForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const title = this.title.value;
  const content = this.content.value;
  const articleList = document.getElementById("articleList");
  const div = document.createElement("div");
  div.innerHTML = `<h4>${title}</h4><p>${content}</p><hr>`;
  articleList.appendChild(div);
  this.reset();
});