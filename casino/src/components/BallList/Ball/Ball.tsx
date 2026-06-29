import './Ball.css';

const Ball = ({ content }: { content: number }) => {
  return (
    <li className="ball-item">
      <div className="ball-item__inner">{content}</div>
    </li>
  );
};

export default Ball;
