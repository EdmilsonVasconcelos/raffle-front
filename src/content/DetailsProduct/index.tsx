import { useParams } from "react-router-dom";
import Main from "../../containers/Main";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../utils/api";
import { Raffle } from "../../interfaces/raffle";
import { useEffect, useState } from "react";

const DetailsProduct = () => {
  const { id } = useParams();

  const [raffle, setRaffle] = useState<Raffle>();

  useEffect(() => {
    fetchRaffleById(Number(id));
  }, []);

  const fetchRaffleById = (id: number): void => {
    axios
      .get(`${BASE_URL}/raffle/${id}`)
      .then(function (response: AxiosResponse<Raffle>) {
        setRaffle(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Main>
        <div className="content-details-product">
          <div className="content-left">
            <img
              src={raffle?.savedImages[0]}
              alt="Imagem do leilão na página de detalhes"
            />
          </div>
          <div className="content-right">
            <div className="title">{raffle?.productName}</div>
            <div className="text">{raffle?.raffleStatus}</div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default DetailsProduct;
