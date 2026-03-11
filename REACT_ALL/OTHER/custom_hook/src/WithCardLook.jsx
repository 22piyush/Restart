const WithCardLook = (WrappedComp) => {
  return () => {
    return (
      <>
        <h1>This is nested Component</h1>
        <WrappedComp />
      </>
    );
  };
};

export default WithCardLook;
