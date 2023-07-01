import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  render(<Footer />);

  it("should return all of the texts in the footer", () => {
    const textSorteio = screen.getByTestId("footer-text-sorteio");
    const textDireitos = screen.getByTestId("footer-text-direitos");
    const imagem = screen.getByAltText("Imagem da logo");

    expect(imagem).toHaveAttribute(
      "src",
      process.env.PUBLIC_URL + "/images/logo.svg"
    );

    expect(textSorteio.textContent).toBe(
      "Sorteio promovido com a tecnologia da Baby sorteios."
    );

    expect(textDireitos.textContent).toBe("Todos os direitos reservados.");
  });
});
