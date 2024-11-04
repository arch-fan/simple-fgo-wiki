import type { MetaFunction } from "react-router";
import pikachu from "~/assets/pikachu.gif";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple FGO Wiki" },
    { name: "description", content: "TODO!" },
  ];
};

export default function Todo() {
  return (
    <>
      <div className="flex flex-col gap-2 flex-1 items-center justify-center">
        <h1>Page under construction</h1>
        <img src={pikachu} alt="Pikachu building" />
      </div>
    </>
  );
}
