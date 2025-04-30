export interface Carro {
  id: number;
  brand: string;
  model: string;
  description: string;
  year: number;
  price: string;
  endofplate: string;
  carchange: string;
  bodywork: string;
  color: string;
  km: string; // km é uma string no seu JSON
  doors: number;
  fuel: string;
  slug: string;
  principalimage: string;
  highlight: boolean;
  armored: string;
  images: string[];
}