import React, { useEffect, useState } from 'react';
import Order from './Order';
let selectedProduct;


const Product = () => {
  
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [senddata, setSenddata] = useState(''); // Initialize senddata as null
  
  async function fetchProducts() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (Array.isArray(products)) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [query, products]);

  const handleSingleDate = (productTitle) => {
     selectedProduct = filteredProducts.find((product) => product.title === productTitle);
    setSenddata(selectedProduct); 
    console.log(senddata)
  };

  return (
    <div className="bg-white m-4">
      {senddata ? ( 
        <div>
          <Order seltitle={selectedProduct.title}
           selimage={selectedProduct.image} 
           seldes={selectedProduct.description}
           selprice={selectedProduct.price}
           />
        </div>
      ) : (
        <div>
          <nav className="rounded-lg bg-gradient-to-b from-red-500 to-blue-600 m-2 p-1 flex flex-wrap sm::backdrop">
        <div className="my-auto flex-wrap flex text-xl font-bold text-fuchsia-400 font-serif">
          CoingNinja
        </div>
        <div className="mx-auto my-auto">
          <ul className="hidden sm:flex items-center flex-wrap text-xl font-bold text-yellow-300">
            <li className="mx-2">Home</li>
            <li className="mx-2">Services</li>
            <li className="mx-2">Product</li>
            <li className="mx-2">Contact Us</li>
          </ul>
          <div className="sm:hidden relative group">
            <button className="text-xl font-bold text-red-500">Menu</button>
            <ul className="hidden absolute left-0 mt-2 space-y-2 py-2 bg-white rounded-lg shadow-lg group-hover:block">
              <li className="mx-2">Home</li>
              <li className="mx-2">Services</li>
              <li className="mx-2">Product</li>
              <li className="mx-2">Contact Us</li>
            </ul>
          </div>
        </div>

        <div className="my-auto">
          <input
            type="text"
            placeholder="Search Product Here"
            value={query}
            className="p-1 px-2 rounded-xl border-2 border-blue-600"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </nav>
          <div className="max-w-2xl sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8 m-2 p-1">
            <div className="grid grid-cols-1 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group border-2  p-5 w-64 rounded-xl m-2">
                  <div className="border aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 p-4">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="rounded-2xl h-72 w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="font-bold mt-4 text-gray-700">
                    Price : ${product.price}
                  </h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    <marquee behavior="scroll" direction="right">
                      {product.title}
                    </marquee>
                  </p>

                  <div className="flex justify-between mt-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                      onClick={() => handleSingleDate(product.title)}
                    >
                      Buy
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};



export default Product;
