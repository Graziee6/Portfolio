const create = document.querySelector(".create");
const blogButtons = document.querySelectorAll(".blog-btn");
const createBtn = document.querySelector("#create");
const blogTitle = document.querySelector("#title");
const blogBody = document.querySelector("#body");

const displayCreateForm = function () {
  blogButtons.forEach((e) => {
    e.style.opacity = "0";
  });
  document.querySelector(".blog-form").style.opacity = "1";
};

const createBlog = function () {
  if (blogTitle.innerHTML == "" || blogBody.innerHTML == "") {
    document.querySelector("#error").style.opacity = "1";
  }
};

create.addEventListener("click", displayCreateForm);
createBtn.addEventListener("click", createBlog);
