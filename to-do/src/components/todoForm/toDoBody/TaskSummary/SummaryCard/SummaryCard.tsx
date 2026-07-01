import './SummaryCard.css';

type TSummaryCard = {
  stat: number;
  statName: string;
  pending?: boolean;
};

const SummaryCard = ({ stat, statName, pending = false }: TSummaryCard) => {
  return (
    <div className="card-summary">
      <span className={`card-summary__stat ${pending && 'pending'}`}>{stat}</span>
      <span className="card-summary__description">{statName}</span>
    </div>
  );
};

export default SummaryCard;
