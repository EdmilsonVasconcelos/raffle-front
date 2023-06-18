import "./index.scss";

interface PageSubTitleProps {
  text: string;
  img: string;
}

const PageSubTitle: React.FC<PageSubTitleProps> = (props) => {
  return (
    <div className="container-subtitle">
      <img src={process.env.PUBLIC_URL + props.img} alt="Imagem do subtitle" />
      <h2 className="subtitle">{props.text}</h2>
    </div>
  );
};

export default PageSubTitle;
