const Error = ({ children }) => {
  return (
    <div className="uppercase bg-red-600 font-bold rounded-md content-center mb-3 text-white">
      {children}
    </div>
  );
};

export default Error;
