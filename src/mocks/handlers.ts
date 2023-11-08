import { http, HttpResponse } from "msw";

const handlers = [
  http.get("https://horrorvision-api.onrender.com/movies", () => {
    return HttpResponse.json([
      {
        id: 7,
        title: "Re-sonator",
        director: "Stuart Gordon",
        year: 1986,
        picture: "https://i.ibb.co/zhqsXjJ/re-sonator.webp",
      },
      {
        id: 8,
        title: "Lost Boys",
        director: "Joel Schumacher",
        year: 1987,
        picture: "https://i.ibb.co/RvSQ4WS/lost-boys.webp",
      },
    ]);
  }),
];

export default handlers;
