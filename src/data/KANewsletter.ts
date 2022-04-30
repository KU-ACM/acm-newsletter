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

const sampleEvent: KAEvent = {
  img_src: "https://i.ibb.co/jgj5sfp/ask-alumni-final.png",
  title: "Ask Alumni - Berker Soyluoğlu",
  date: "25 April Monday",
  time: "20:30",
  venue: "Zoom",
  description:
    "Ask Alumni is here once again! This time in Ask Alumni, Berker Soyluoğlu from Facebook will be our guest and talk about his experiences and his life after graduation. After his talk, he will be answering the students’ questions.",
  cta: "Register now!",
  cta_url: "",
};

const sampleEvent2: KAEvent = {
  img_src: "https://i.ibb.co/SmdWMD9/final.png",
  title: "Basics of LaTeX Workshop",
  date: "25 April Monday",
  time: "20:30",
  venue: "Zoom",
  description:
    "On April 27th, Ahmet Yesevi Nurcan from our club will be teaching the basics of LaTeX. If you want to build a career in Academics or want to create professionally written documents, don’t miss out on the opportunity and sign up for “Basics of LaTeX”!",
  cta: "Register now!",
  cta_url: "",
};

export const sampleNewsletter: KANewsletter = {
  date: "25 April 2022",
  events: [sampleEvent, sampleEvent2],
};
