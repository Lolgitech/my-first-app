function ComponentBasic(parameter) {
  return (
    <div>
      <h3>This is a basic component</h3>

      <img
        src="https://images.unsplash.com/photo-1670195280352-12edb06125cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
        alt={parameter.alt}
      />

      <p id="testerbilde" className="testbilde"> New text here (example: this is a door)</p>
    </div>
  );
}

export default ComponentBasic;
