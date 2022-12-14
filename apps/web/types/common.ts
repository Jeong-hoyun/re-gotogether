export type typeReservation = {
  reservationId: number;
  paymentState: number;
  personnel: number;
  productId: number;
  reservationDate: number;
};

export type typeSearchData = {
  title: string;
  productId: number;
  price: string;
  images: string;
};

export type typeLoginResponse = {
  username: string;
  email: string;
  insertDate: number;
};
export type typeLoginData = {
  email: string;
  password: string;
};

export type typeSignupData = {
  email: string;
  password: string;
  username: string;
  phoneNumber: string;
  birth: string;
  gender: string;
};
