import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple FGO Wiki" },
    { name: "description", content: "EZZZZ!" },
  ];
};

export default function Home() {
  return (
    <>
      <h1>Hello</h1>
      <p>Using Remix FGO!</p>
    </>
  );
}
