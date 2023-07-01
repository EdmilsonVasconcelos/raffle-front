import { render, screen } from "@testing-library/react";
import Card from "./index";

describe("Card", () => {
  const props = {
    title: "Product Title",
    img: "image-url.jpg",
    price: 99.99,
    status: "In Stock",
  };

  it("renders the card component with correct props", () => {
    render(<Card {...props} />);

    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(`R$: ${props.price}`)).toBeInTheDocument();
    expect(screen.getByText(`Status: ${props.status}`)).toBeInTheDocument();

    const imgElement = screen.getByAltText("Imagem do produto do leilão");
    expect(imgElement).toBeInTheDocument();
  });

  it('displays the "Comprar" button', () => {
    render(<Card {...props} />);
    const buyButton = screen.getByText("Comprar");
    expect(buyButton).toBeInTheDocument();
  });
});
