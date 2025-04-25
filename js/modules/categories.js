export function initCategories() {
  const categoryContainer = document.querySelector('.category ul');
  const categories = [
    'images/category/1.png',
    'images/category/10.png',
    'images/category/11.png',
    'images/category/12.png',
    'images/category/13.png',
    'images/category/14.png',
    'images/category/15.png',
    'images/category/16.png',
  ];

  categoryContainer.innerHTML = '';
  categories.forEach((e) => {
    categoryContainer.innerHTML += `<li class="categoryList">
        <img src="${e}" alt="" />
      </li>`;
  });
}
