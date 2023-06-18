import { useEffect, useState } from "react";
import Card from "../../components/Card";
import PageSubTitle from "../../components/PageSubtitle";
import PageTitle from "../../components/PageTitle";
import { PaginatedListRaffle, RaffleStatus } from "../../interfaces/raffle";

import "./index.scss";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../utils/api";
import Pagination from "../../components/Pagination";

const MainHome: React.FC = () => {
  const [paginatedRaffles, setPaginatedRaffles] =
    useState<PaginatedListRaffle>();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchRaffles(currentPage);
  }, [currentPage]);

  const fetchRaffles = (page: number) => {
    axios
      .get(`${BASE_URL}/raffle?page=${page >= 1 ? page - 1 : page}`)
      .then(function (response: AxiosResponse<PaginatedListRaffle>) {
        setPaginatedRaffles(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const translateRaffleStatus = (raffleStatus: RaffleStatus): string => {
    if (raffleStatus?.toString() === "WAITING") {
      return "Aguardando";
    }

    if (raffleStatus?.toString() === "AVAILABLE") {
      return "disponível";
    }

    if (raffleStatus?.toString() === "CLOSED") {
      return "Encerrado";
    }

    return "Aguardando";
  };

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
  };

  return (
    <div className="body-home">
      <PageTitle title="Você pode ser mais um vencedor!" />
      <PageSubTitle text="Conheça nossas premiações" img="/images/rocket.svg" />
      <div className="content-home">
        <div className="content-home-cards">
          {paginatedRaffles?.raffles?.map((raffle) => {
            return (
              <div className="content-home-card" key={raffle.id}>
                <Card
                  title={raffle.productName}
                  price={raffle.price}
                  img={raffle.savedImages[0]}
                  status={translateRaffleStatus(raffle.raffleStatus)}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="img-hexagonal">
        <img src="images/hexagonal.png" alt="Imagem de um hexagonal verde " />
      </div> */}
      <div className="social-media">
        <img
          src={process.env.PUBLIC_URL + "/images/insta-icon.svg"}
          alt="Imagem de um ícone do instagram"
        />
        <span className="text">@babysorteios</span>
      </div>

      <Pagination
        totalItems={paginatedRaffles?.totalElements || 0}
        itemsPerPage={6}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default MainHome;
