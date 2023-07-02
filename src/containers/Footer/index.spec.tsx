import { render, screen } from "@testing-library/react";
import Footer from ".";

describe("Footer", () => {
  it("should return all of the texts in the footer", () => {
    render(<Footer />);

    const textRaffle = screen.getByTestId("footer-text-raffle");
    const textRights = screen.getByTestId("footer-text-rights");
    const img = screen.getByAltText("Imagem da logo");

    expect(img).toHaveAttribute(
      "src",
      process.env.PUBLIC_URL + "/images/logo.svg"
    );

    expect(textRaffle.textContent).toBe(
      "Sorteio promovido com a tecnologia da Baby sorteios."
    );

    expect(textRights.textContent).toBe("Todos os direitos reservados.");
  });
});
