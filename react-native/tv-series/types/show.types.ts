export type TShow = {
  id: number;
  url: string;
  name: string;
  image: {
    original: string;
  };
  premiered: string;
  genres: string[];
  status: string;
  summary: string;
};
