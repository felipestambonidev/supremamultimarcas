import { IconType } from "react-icons";
import {
  SiVolkswagen,
  SiChevrolet,
  SiNissan,
  SiHonda,
  SiCitroen,
  SiPeugeot,
  SiJeep,
  SiHyundai,
  SiRenault,
  SiFord,
  SiToyota,
  SiFiat,
  SiBmw,
  SiMercedes
} from "react-icons/si";

type BrandsItens = {
  name: string;
  icon: IconType;
};

export const brandsList: BrandsItens[] = [
  {
    name: "Volkswagen",
    icon: SiVolkswagen,
  },
  {
    name: "Chevrolet",
    icon: SiChevrolet,
  },
  {
    name: "Nissan",
    icon: SiNissan,
  },
  {
    name: "Honda",
    icon: SiHonda,
  },
  {
    name: "Citroën",
    icon: SiCitroen,
  },
  {
    name: "BMW",
    icon: SiBmw,
  },
  {
    name: "Peugeot",
    icon: SiPeugeot,
  },
  {
    name: "Jeep",
    icon: SiJeep,
  },
  {
    name: "Hyundai",
    icon: SiHyundai,
  },
  {
    name: "Renault",
    icon: SiRenault,
  },
  {
    name: "Ford",
    icon: SiFord,
  },
  {
    name: "Mercedes",
    icon: SiMercedes,
  },
  {
    name: "Toyota",
    icon: SiToyota,
  },
  {
    name: "Fiat",
    icon: SiFiat,
  },
];
