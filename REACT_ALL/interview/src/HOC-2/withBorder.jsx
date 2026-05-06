
function withBorder(Component) {
  return () => {
    return <div style={{ border: "4px solid black" }}><Component/></div>;
  };
}

export default withBorder;
