import { Product } from '../model/product';

// ? Will run again whenever a request is made to this page
export async function getServerSideProps() {
  console.log('[Server] generating props to the component...');
  const res = await fetch('http://localhost:3000/api/products');
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function Dynamic2(props: any) {
  console.log('[Client] rendering the component...');

  function renderProducts() {
    return props.products.map((p: Product) => {
      return (
        <li key={p.id}>
          {p.id} -- {p.name} has a price of ${p.price}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>Dynamic #02</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
