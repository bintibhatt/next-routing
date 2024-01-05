import Link from "next/link";
import { useRouter } from "next/router";

function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;
  return (
    <div>
      <Link href="/">
        <h3>Home</h3>
      </Link>
      <Link href="/product">
        <h3>Products</h3>
      </Link>
      <h1>Product {productId} Detail</h1>
    </div>
  );
}

export default ProductDetail;
