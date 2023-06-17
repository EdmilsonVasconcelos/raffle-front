export interface PaginatedListRaffle {
  totalElements: number;
  raffles: Raffle[];
}

export interface Raffle {
  id: number;
  maximumNumbers: number;
  productName: string;
  description: string;
  price: number;
  raffleStatus: RaffleStatus;
  savedImages: string[];
}

export enum RaffleStatus {
  AVAILABLE,
  WAITING,
  CLOSED,
}
