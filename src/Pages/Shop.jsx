import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
import { products } from '../Utils/Data';
import { FaFilter } from 'react-icons/fa6';
// const products = [
//     { id: 1, name: "Apple", category: "Fruits", price: 2.5 },
//     { id: 2, name: "Banana", category: "Fruits", price: 1.2 },
//     { id: 3, name: "Carrot", category: "Vegetables", price: 1.8 },
//     { id: 4, name: "Tomato", category: "Vegetables", price: 2.0 },
//     { id: 5, name: "Milk", category: "Dairy", price: 1.5 },
//     { id: 6, name: "Cheese", category: "Dairy", price: 5.0 },
//     { id: 7, name: "Bread", category: "Bakery", price: 2.5 },
//     { id: 8, name: "Butter", category: "Dairy", price: 3.5 },
//   ];



const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [openFilter, setOpenFilter] = useState(false)

  // console.log("checking" , products);

  const toggleFilter = () => {
    setOpenFilter(!openFilter)
  }


  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  // console.log("checking", filteredProducts);


  return (
    <div className=" max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 mt-24 h-max">
      {/* Filter Section */}
      <div className="col-span-1 p-4 bg-gray-100 h-max rounded-lg fixed w-[280px] mb-10 hidden md:block">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        <input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4 bg-white p-2 w-full rounded-md"
        />
        <select
          className="w-full p-2 border rounded mb-4"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </select>
        <div className="mb-4 ">
          <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
          {/* <Slider
            min={0}
            max={5}
            step={0.5}
            value={priceRange}
            onChange={(value) => setPriceRange(value)}
          /> */}
          <input type="range"
            min="0"
            max="500"
            value={priceRange[1]} 
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} 
            // className='text-green-600'
            />
        </div>
        <button onClick={() => { setSearch(''); setCategory(''); setPriceRange([0, 500]); }} className='bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer'>Reset Filters</button>
      </div>

      <div className={`md:hidden bg-gray-100 flex justify-between items-center mx-4 px-4 py-3 ${openFilter ? "rounded-t-md" : "rounded-md"}`}>
        <h1 className='font-semibold text-lg'>Filters</h1>
        <FaFilter onClick={() => toggleFilter()} className='text-gray-800 cursor-pointer' />
      </div>
      {
        openFilter ? <div className='bg-gray-100 p-4 mx-4 rounded-b-md md:hidden '>
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-4 bg-white p-2 w-full rounded-md"
          />
          <select
            className="w-full p-2 border rounded mb-4"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
          </select>
          <div className="mb-4 flex flex-col gap-2">
          <label>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
       
          <input type="range"
            min="0"
            max="500"
            value={priceRange[1]} 
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} 
            className='w-[150px]'
            />
        </div>
          <button onClick={() => { setSearch(''); setCategory(''); setPriceRange([0, 500]); }} className='bg-red-500 px-3 py-1 rounded-md text-white cursor-pointer'>Reset Filters</button>
        </div> : ""
      }

      {/* Product Listing */}
      <div className="col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0">
        {filteredProducts.map((product) => (
          // <div key={product.id} className="p-4 border border-gray-200">
          //   <img src={product.image} alt={product.name} className="w-full h-50 object-cover mb-2 rounded bg-gray-200" />
          //   <div>
          //     <p className="text-gray-600">{product.category}</p>
          //     <h3 className="text-lg font-semibold">{product.name}</h3>
          //     <p className="text-gray-800 font-bold">${product.price}</p>
          //     <button className="mt-2 w-full bg-green-500 text-white py-1 rounded-md">Add to Cart</button>
          //   </div>
          // </div>
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop
