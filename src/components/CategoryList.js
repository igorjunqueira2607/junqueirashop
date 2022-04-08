import React, { useContext, useEffect } from 'react';
import { getCategories, getItensFromCategory } from '../services/api'
import storeContext from '../context/context';

function CategoryList() {
  const { setCategories, 
    categories, setProductList, setLoading } = useContext(storeContext);

  const requestCategories = async () => {
    const response = await getCategories();
    setCategories(response);
  };

  const handleCategory = async ({ target }) => {
    setLoading(true);
    const response = await getItensFromCategory(target.value);
    setProductList(response.results);
    setLoading(false);
  }

  useEffect(() => {
    requestCategories()
  }, [])

  return (
    <div className=" space-x-2 mt-3 bg-white flex flex-nowrap overflow-auto scrollbar scrollbar-thumb-red-500 scrollbar-thin scrollbar-track-gray-300 pl-3 scrollbar-thumb-rounded">
      {categories.map((category) => (
        <button
          key={ category.id }
          type="button"
          className="mb-4 whitespace-nowrap px-3 py-1 text-white bg-red-500 font-medium text-xs uppercase rounded-xl hover:bg-red-800 transition duration-200"
          onClick={handleCategory}
          value={category.id}
          >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryList;

// const handleClick = async (id) => {
//   const response = await fetchDrinkDetails(id);
//   setRecipesDetails(response.drinks);
//   history.push(`/drinks/${id}`);
// };