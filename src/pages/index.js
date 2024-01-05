import Link from "next/link";

function Home() {
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
    </div>
  );
}

export default Home;
