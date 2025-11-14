const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-amber-400 text-white tracking-wide px-5 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
