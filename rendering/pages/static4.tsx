import { Product } from '../model/product';

// ? will only run once when the app is compiled, meaning even if values of the
// ? api endpoint change, the HTML content won't change
export async function getStaticProps() {
  console.log('[Server] generating props to the component...');
  const res = await fetch('http://localhost:3000/api/products');
  const products: Product[] = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function Static4(props: any) {
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
      <h1>Static #04</h1>
      <ul>{renderProducts()}</ul>
    </div>
  );
}
