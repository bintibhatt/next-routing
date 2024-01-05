import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <div>
      <Link href="/">
        <h3>Home</h3>
      </Link>
      <Link href="/product/1">
        <h2>Product 1</h2>
      </Link>
      <Link href="/product/2">
        <h2>Product 2</h2>
      </Link>
      {/* <Link href="/product/3" replace> */}
      <Link href="/product/3">
        <h2>Product 3</h2>
      </Link>
      <Link href={`/product/${productId}`}>
        <h2>Product {productId}</h2>
      </Link>
    </div>
  );
}

export default ProductList;
