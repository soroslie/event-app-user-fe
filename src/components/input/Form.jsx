function Form({ onSubmit, children }) {
  return (
    <div className="max-w-screen-md mx-auto px-10">
      <div className="shadow-lg max-w-2xl mx-auto px-4 py-6 rounded-lg bg-white">
        <form onSubmit={onSubmit}>{children}</form>
      </div>
    </div>
  );
}

export default Form;
