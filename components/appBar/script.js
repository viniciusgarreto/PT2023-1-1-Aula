const renderAppBar = () => {
  const appBarElement = document.createElement("div");
  appBarElement.classList.add("app-bar");
  const home = '/Users/josegarreto/Desktop/CJR/PT2023-1-1-Aula/pages/posts/index.html'

  appBarElement.innerHTML = `
      <div>
        <span>Posts</span>
      </div>
      <nav class="links">
          <a class="link" href=${home}>Home</a>
      </nav>
  `;

  document.querySelector("header").appendChild(appBarElement);
};

renderAppBar();
