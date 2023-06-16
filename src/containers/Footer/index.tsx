import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src="../../images/logo.svg" alt="Imagem da logo" />
      </div>

      <span className="text">
        Sorteio promovido com a tecnologia da Baby sorteios.
      </span>
      <span className="text">Todos os direitos reservados.</span>
    </footer>
  );
};

export default Footer;
