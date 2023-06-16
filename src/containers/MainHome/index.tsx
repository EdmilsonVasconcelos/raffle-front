import Card from "../../components/Card";
import PageSubTitle from "../../components/PageSubtitle";
import PageTitle from "../../components/PageTitle";

import "./index.scss";

const MainHome: React.FC = () => {
  return (
    <div className="body-home">
      <PageTitle title="Você pode ser mais um vencedor!" />;
      <PageSubTitle text="Conheça nossas premiações" img="/images/rocket.svg" />
      <div className="content-home">
        <div className="content-home-cards">
          <div className="content-home-card">
            <Card />
          </div>

          <div className="content-home-card">
            <Card />
          </div>

          <div className="content-home-card">
            <Card />
          </div>
          <div className="content-home-card">
            <Card />
          </div>
          <div className="content-home-card">
            <Card />
          </div>
          <div className="content-home-card">
            <Card />
          </div>
        </div>
      </div>
      <div className="img-hexagonal">
        <img
          src="../../images/hexagonal.png"
          alt="Imagem de um hexagonal verde "
        />
      </div>
      <div className="social-media">
        <img
          src="/images/insta-icon.svg"
          alt="Imagem de um ícone do instagram"
        />
        <span className="text">@babysorteios</span>
      </div>
    </div>
  );
};

export default MainHome;
