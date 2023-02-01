function ComponentWithChildren(props) {
  return (
    <div>
      <h1> this comp has children </h1>
      {props.children}
      <div>
        <h4> this is a child of the custom container</h4>
        <p>Some more elements</p>
      </div>
    </div>
  );
}

export default ComponentWithChildren;
