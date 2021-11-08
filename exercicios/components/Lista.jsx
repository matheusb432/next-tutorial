export default function Lista(props) {
  return (
    <div>
      <h1>Lista com props children</h1>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          border: '1px solid orange',
          color: 'orange',
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}
