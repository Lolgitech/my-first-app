function PropertiesDesructuring(props) {
  const { title, anotherName } = props;

  return (
    <div>
      <h1> {title}</h1>
      <h3>this is a destructured component</h3>
      <p> {anotherName} </p>
    </div>
  );
}

export default PropertiesDesructuring