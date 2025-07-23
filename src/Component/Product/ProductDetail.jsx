import { useParams } from 'react-router-dom';
import products from '../../../Data/whitecub-2025-07-18 (1).json';

const ProductDetail = () => {
  const { slug } = useParams();
  const slugify = (name) => name.toLowerCase().replace(/\s+/g, '-');
  const product = products.find((p) => slugify(p.name) === slug);

  if (!product) return <div className='bg-red-500 h-screen'>Product not found.</div>;

  return (
    <div className="bg-amber-200 flex items-center justify-center h-screen p-10">
      <img
          src={(product.image)?`${product.image}`:`/${product.name}.png`}
          alt={product.name}
          className="h-55 object-cover hover:scale-105 transition-transform duration-300"
          />
      <h2 className="text-4xl font-bold">{product.name}</h2>
      <p className="text-lg mt-4">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
