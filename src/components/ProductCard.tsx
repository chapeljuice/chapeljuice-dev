interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  materials: string[];
  dimensions: string;
  price: number;
  status: string;
  images: string[];
  featured: boolean;
  craftingTime: string;
  year: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden" 
      data-category={product.category}
      data-status={product.status}
    >
      <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center relative">
        {product.featured && (
          <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <span className="text-gray-500 text-sm">Product Image</span>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-amber-600 font-semibold">{product.category}</span>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            product.status === 'Available' 
              ? 'bg-green-100 text-green-800' 
              : product.status === 'Custom Order'
              ? 'bg-blue-100 text-blue-800'
              : 'bg-gray-100 text-gray-800'
          }`}>
            {product.status}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{product.description}</p>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-medium">Materials:</span> {product.materials.join(', ')}
          </p>
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-medium">Dimensions:</span> {product.dimensions}
          </p>
          <p className="text-sm text-gray-500">
            <span className="font-medium">Crafting Time:</span> {product.craftingTime}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-amber-600">
            {formatPrice(product.price)}
          </span>
          
          <button className="bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-semibold silkscreen-regular">
            {product.status === 'Available' ? 'Inquire' : 
             product.status === 'Custom Order' ? 'Discuss' : 'View Details'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 