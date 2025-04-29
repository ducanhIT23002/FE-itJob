import { useRoutes } from "react-router-dom";
import {Routers } from "../routers/client/index"

function AllRoute() {
  const elements = useRoutes(Routers);
  return elements;
}

export default AllRoute;