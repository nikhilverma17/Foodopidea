import React, { useEffect } from 'react';
import './CategoryPage.scss';
import { useMealContext } from '../../context/mealContext';
import MealList from '../../components/Meal/MealList';
import { useParams } from 'react-router-dom';
import { startFetchMealByCategory } from '../../actions/mealsActions';

const CategoryPage = () => {
  const { name } = useParams();
  const { categoryMeals, dispatch, categories } = useMealContext();
  
  useEffect(() => {
    startFetchMealByCategory(dispatch, name);
  }, [name, dispatch]);

  return (
    <main className='main-content py-5'>
      <div className='container'>
        {/* You can remove the cat-description section completely */}
      
      {
        (categoryMeals?.length) ? <MealList meals={categoryMeals} /> : null
      }
      </div>
    </main>
    
  );
};

export default CategoryPage;
