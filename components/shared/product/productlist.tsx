/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from "./product-card";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className="my-10 ">
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}

      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {data.map((product: any) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="first-letter:">No products found.</div>
      )}
    </div>
  );
};

export default ProductList;
