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
  km: string; 
  doors: number;
  fuel: string;
  slug: string;
  principalimage: string;
  highlight: boolean;
  armored: string;
  images: string[];
  features?: string[];
}