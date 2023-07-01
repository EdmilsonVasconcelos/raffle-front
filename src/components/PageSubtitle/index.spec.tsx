import { render, screen } from "@testing-library/react";
import PageSubTitle from ".";

describe("PageSubtitle", () => {
  const props = {
    text: "Product Title",
    img: "image-url.jpg",
  };

  it("renders the card component with correct props", () => {
    render(<PageSubTitle {...props} />);

    expect(screen.getByText(props.text)).toBeInTheDocument();

    const imgElement = screen.getByAltText("Imagem do subtitle");
    expect(imgElement).toBeInTheDocument();
  });

  it('displays the "Pagesubitle" component', () => {
    render(<PageSubTitle {...props} />);
    const buyButton = screen.getByText("Product Title");
    expect(buyButton).toBeInTheDocument();
  });
});
