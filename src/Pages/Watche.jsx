

// import React, { useEffect, useState } from 'react';

// export default function Watche() {
//   const [watches, setWatches] = useState([]); // Watches data store karne ke liye state
//   const [categories, setCategories] = useState([]); // Categories data store karne ke liye state
//   const [loading, setLoading] = useState(true); // Loading indicator ke liye state

//   useEffect(() => {
//     // Fetch categories
//     fetch('https://dummyjson.com/products/categories')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Categories:', data); // Debugging purpose
//         setCategories(data); // Save categories in state
//       })
//       .catch((error) => console.error('Error fetching categories:', error));

//     // Fetch watches
//     fetch('https://dummyjson.com/products/category/watches')
//       .then((res) => res.json())
//       .then((data) => {
//         console.log('Watches:', data); // Debugging purpose
//         setWatches(data.products); // Save watches in state
//         setLoading(false); // Stop loading when data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching watches:', error);
//         setLoading(false); // Stop loading even if there’s an error
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Watches</h1>
//       <div>
//         <h2>Categories</h2>
//         {categories.length > 0 ? (
//           <ul>
//             {categories.map((category, index) => (
//               // Ensure category is a string. If it's an object, use a specific property like category.name or category.slug
//               <li key={index}>{typeof category === 'string' ? category : category.name}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>Loading categories...</p>
//         )}
//       </div>
//       {loading ? (
//         <p>Loading watches...</p> // Loading state dikhana
//       ) : (
//         <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
//           {watches.map((watch, index) => (
//             <div
//               key={index}
//               style={{
//                 border: '1px solid #ccc',
//                 borderRadius: '8px',
//                 padding: '16px',
//                 width: '200px',
//                 textAlign: 'center',
//               }}
//             >
//               <img
//                 src={watch.thumbnail} // Assuming API returns a `thumbnail` URL
//                 alt={watch.title} // Changed to `title` assuming the API returns this
//                 style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
//               />
//               <h3>{watch.title}</h3> 
//               <p>${watch.price}</p> {/* Watch ki price */}
//               <button style={{ padding: '8px 16px', cursor: 'pointer' }}>
//                 Buy Now
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from 'react';

export default function Laptops() {
  const [laptops, setLaptops] = useState([]); // Store laptop data
  const [loading, setLoading] = useState(true); // Loading indicator

  useEffect(() => {
    // Fetch laptop data
    fetch('https://dummyjson.com/products/category/laptops')
      .then((res) => res.json())
      .then((data) => {
        console.log('Laptops:', data); // Debugging
        setLaptops(data.products); // Save laptop data in state
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching laptops:', error);
        setLoading(false); // Stop loading even if there’s an error
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Laptops</h1>
      {loading ? (
        <p>Loading laptops...</p> // Show loading state
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {laptops.map((laptop, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                maxWidth: '300px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                // backgroundColor:  "#D8D8D8",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow =
                  '0 6px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow =
                  '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={laptop.thumbnail} // Laptop image
                alt={laptop.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              <h3 style={{ margin: '10px 0' }}>{laptop.title}</h3> {/* Title */}
              <p>${laptop.price}</p> {/* Price */}
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#212529',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Buy Now
              </button>
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
}






