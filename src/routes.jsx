import { Home, Profile, About} from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "profile",
    path: "/profile",
    element: <Profile />,
  },
  {
    name: "about", 
    path: "/about",
    element: <About />,
  }
];

export default routes;
