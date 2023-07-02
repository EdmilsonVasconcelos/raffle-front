import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-testid="footer-container">
      <div className="logo" data-testid="footer-logo">
        <img
          src={process.env.PUBLIC_URL + "/images/logo.svg"}
          alt="Imagem da logo"
        />
      </div>

      <span className="text" data-testid="footer-text-raffle">
        Sorteio promovido com a tecnologia da Baby sorteios.
      </span>
      <span className="text" data-testid="footer-text-rights">
        Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
