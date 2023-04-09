import React from 'react';

const JobCategories = () => {
  const categoriesLoader = async () => {
    const res = await fetch('category.json');
    const data = await res.json();
    return(data.category);
  };
  const categories = categoriesLoader();
  console.log(categories);
  return (
    <div className='category-container'>
      <div className='text-center'>
        <p className='text-4xl font-semibold pt-8 md:pt-14 pb-4'>Job Category List</p>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div>
        {/* {
          categories.map(category => console.log(category))
        } */}
      </div>
    </div>
  );
};

export default JobCategories;




// const JobCategories = () => {
//   const [categories, setCategories] = useState([]);

//   const categoriesLoader = async () => {
//     const res = await fetch('category.json');
//     const data = await res.json();
//     return data.category;
//   };

//   useEffect(() => {
//     const loadCategories = async () => {
//       const categoryData = await categoriesLoader();
//       setCategories(categoryData);
//     };
//     loadCategories();
//   }, []);

//   return (
//     <div className='category-container'>
//       <div className='text-center'>
//         <p className='text-4xl font-semibold pt-8 md:pt-14 pb-4'>Job Category List</p>
//         <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
//       </div>
//       <div>
//         {categories.map((category) => (
//           <div key={category.name}>
//             <img src={category.logo} alt={`${category.name} logo`} />
//             <h2>{category.name}</h2>
//             <p>{category.jobs_available} jobs available</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobCategories;