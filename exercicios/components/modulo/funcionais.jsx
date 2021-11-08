export function Comp1() {
  return <h2>In Component 1</h2>;
}

export const Comp2 = function () {
  return <h2>In Component 2</h2>;
};

export default function Comp3() {
  return (
    <div>
      <h2>(default export) In Component 3</h2>
    </div>
  );
}

export const Comp4 = () => {
  return <h2>In Component 4</h2>;
};

const Comp5 = () => <h2>In Component 5</h2>;

const Comp6 = (props) => (
  <div>
    <h2>In Component 6 - {props.msg}</h2>
  </div>
);

// * Alternative way of exporting instead of using the export prefix keyword
export { Comp5, Comp6 };
