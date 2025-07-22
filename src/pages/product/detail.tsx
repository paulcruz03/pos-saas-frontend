import { useParams } from "@tanstack/react-router";

export default function ProductDetailPage() {
  const { productId } = useParams({ strict: false })
  
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>This is the order page where you can manage your orders. {productId}</p>
    </div>
  );
}