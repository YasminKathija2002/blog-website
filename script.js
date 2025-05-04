const blogContainer = document.getElementById("blog-container");

function addPost() {
  const title = document.getElementById("title").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!title || !content) {
    alert("Please fill in both fields.");
    return;
  }

  const postElement = document.createElement("div");
  postElement.className = "post";
  postElement.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  blogContainer.prepend(postElement);

  // Clear inputs
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
