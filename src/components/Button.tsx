interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "blue" | "red";
}

const Button = ({ children, onClick, type = "blue" }: ButtonProps) => {
  const bgColor = type === "blue" ? "bg-blue-500" : "bg-red-500";
  const hoverColor = type === "blue" ? "hover:bg-blue-600" : "hover:bg-red-600";
  return (
    <button
      className={`w-[150px] ${bgColor} text-white px-4 py-2 rounded-lg shadow-md ${hoverColor} transition-colors duration-300 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
