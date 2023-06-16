import "./index.scss";

interface CardProps {
  text?: string;
  img?: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="/images/tracker.png" alt="Imagem do produto do leilão" />
      </div>
      <div className="card-content">
        <h2 className="title-card-content">Tracker</h2>
        <span className="text-card-content">R$ 0,00</span>
        <button className="card-btn-success">Adicionar ao carrinho</button>
      </div>
    </div>
  );
};

export default Card;
