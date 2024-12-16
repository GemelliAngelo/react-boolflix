import { useGlobalContext } from "../context/GlobalContext";

export default function Header() {
  const { movies } = useGlobalContext();
  console.log(movies);
  return;
}
