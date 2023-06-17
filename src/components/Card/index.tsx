import "./index.scss";

interface CardProps {
  title: string;
  img: string;
  price: number;
  status: string;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="Imagem do produto do leilão" />
      </div>

      <div className="card-content">
        <h2 className="title-card-content">{props.title}</h2>
        <span className="text-card-content">{`R$: ${props.price}`}</span>
        <span className="text-card-content">{`Status: ${props.status}`}</span>
        <button className="card-btn-success">Comprar</button>
      </div>
    </div>
  );
};

export default Card;
