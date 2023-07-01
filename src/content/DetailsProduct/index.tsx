import { useParams } from "react-router-dom";
import Main from "../../containers/Main";

const DetailsProduct = () => {
  const { id } = useParams();

  return (
    <>
      <Main>
        <div className="content-details-product">
          <div className="content-left"></div>
          <div className="content-right"></div>
        </div>
      </Main>
    </>
  );
};

export default DetailsProduct;
