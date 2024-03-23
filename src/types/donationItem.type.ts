export type TDonationItem = {
  _id: string;
  image: string;
  title: string;
  description: string;
  amount: string;
  category: string;
  user: {
    name: string;
    email: string;
  };
};
