import { useState, useEffect } from 'react';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Fetch error:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-20">Loading products...</div>;
  if (products.length === 0) return <div className="text-center py-20">No products found</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Latest Collection */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          <span className="text-gray-500">Latest</span> Collection
        </h2>
        <div className="w-20 h-1 bg-pink-500 mx-auto mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.slice(0, 10).map(product => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="font-semibold line-clamp-2">{product.title}</h3>
            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="font-bold text-lg mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}