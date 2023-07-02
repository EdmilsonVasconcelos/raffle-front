import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer" data-testid="footer-container">
      <div className="logo" data-testid="footer-logo">
        <a href="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.svg"}
            alt="Imagem da logo"
          />
        </a>
      </div>

      <span className="text" data-testid="footer-text-sorteio">
        Sorteio promovido com a tecnologia da Baby sorteios.
      </span>
      <span className="text" data-testid="footer-text-direitos">
        Todos os direitos reservados.
      </span>
    </footer>
  );
};

export default Footer;
