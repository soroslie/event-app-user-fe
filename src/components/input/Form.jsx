function Form({ onSubmit, children }) {
  return (
    <div className="max-w-screen-sm mx-auto px-10">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  );
}

export default Form;
