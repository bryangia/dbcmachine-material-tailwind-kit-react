import { Home, About, Equipment} from "@/pages";

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
  },
  {
    name: "equipment", 
    path: "/equipment",
    element: <Equipment />,
  }
];

export default routes;
