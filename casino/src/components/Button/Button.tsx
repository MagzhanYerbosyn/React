import './Button.css';

interface IButtonProps {
  children: string;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IButtonProps) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
