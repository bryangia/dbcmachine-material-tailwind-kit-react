import { Home, About} from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "about", 
    path: "/about",
    element: <About />,
  }
];

export default routes;
