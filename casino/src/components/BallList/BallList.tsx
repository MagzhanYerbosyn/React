import Ball from './Ball/Ball';
import './BallList.css';

const BallList = ({ numbersPull }: { numbersPull: number[] }) => {
  return (
    <ul className="ball-list">
      {numbersPull.map((numberPull) => {
        return <Ball content={numberPull} />;
      })}
    </ul>
  );
};

export default BallList;
