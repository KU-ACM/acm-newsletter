export type KAEvent = {
  img_src: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  description: string;
  cta: string;
  cta_url: string;
};

export type KANewsletter = {
  date: string;
  events: KAEvent[];
};

export const emptyEvent: KAEvent = {
  img_src: "",
  title: "",
  date: "",
  time: "",
  venue: "",
  description: "",
  cta: "",
  cta_url: "",
};
