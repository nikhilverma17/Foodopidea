import React from 'react';
import { Link } from 'react-router-dom';
import "./Category.scss";

const CategoryList = ({ categories }) => {
  // Filter out categories with specific titles
  const excludedCategories = ['beef', 'lamb', 'pork', 'miscellaneous'];
  const filteredCategories = categories.filter(category => !excludedCategories.includes(category.strCategory.toLowerCase()));

  // Create separate arrays for different categories
  const starterCategories = [];
  const vegetarianCategories = [];
  const breakfastCategories = [];
  const chickenCategories = [];
  const goatCategories = [];
  const pastaCategories = [];
  const seafoodCategories = [];
  const veganCategories = [];
  const sideCategories = [];
  const dessertCategories = [];
  const otherCategories = [];

  filteredCategories.forEach(category => {
    const { idCategory: id, strCategory: title, strCategoryThumb: thumbnail } = category;
    
    if (title.toLowerCase() === "starter") {
      starterCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "vegetarian") {
      vegetarianCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "breakfast") {
      breakfastCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "chicken") {
      chickenCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "goat") {
      goatCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "pasta") {
      pastaCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "seafood") {
      seafoodCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "vegan") {
      veganCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "side") {
      sideCategories.push({ id, title, thumbnail });
    } else if (title.toLowerCase() === "dessert") {
      dessertCategories.push({ id, title, thumbnail });
    } else {
      otherCategories.push({ id, title, thumbnail });
    }
  });

  // Combine the arrays in the desired order
  const arrangedCategories = [
    ...starterCategories,
    ...vegetarianCategories,
    ...breakfastCategories,
    ...chickenCategories,
    ...goatCategories,
    ...pastaCategories,
    ...seafoodCategories,
    ...veganCategories,
    ...sideCategories,
    ...dessertCategories,
    ...otherCategories
  ];

  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className='container'>
        <div className='sc-title'>categories</div>
        <section className='sc-category grid'>
          {arrangedCategories.map(category => (
            <Link to={`/meal/category/${category.title}`} className="category-itm align-center justify-center" key={category.id}>
              <div className='category-itm-img h-100 w-100 flex align-center justify-center'>
                <img src={category.thumbnail} alt={category.title} />
                <div className='category-itm-title bg-orange'>
                  <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{category.title}</h3>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}

export default CategoryList;
