export default function NumeroDisplay(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: `${props.size}`,
        width: `${props.size}`,
        borderRadius: '50px',
        backgroundColor: '#222',
        color: '#fff',
        fontSize: '2rem',
        margin: '20px',
      }}>
      {props.num}
    </div>
  );
}
