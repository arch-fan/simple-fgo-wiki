import { useParams, type MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple FGO Wiki" },
    { name: "description", content: "EZZZZ!" },
  ];
};

export default function Home() {
  const { id } = useParams();
  return (
    <>
      <h1>Hello {id}</h1>
      <p>Using Remix FGO!</p>
    </>
  );
}
