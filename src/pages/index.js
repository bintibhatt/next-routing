import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/product");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">
        <h3>Blog</h3>
      </Link>
      <br></br>
      <Link href="/product">
        <h3>Products</h3>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
