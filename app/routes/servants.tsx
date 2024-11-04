import { LoaderCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, type MetaFunction } from "react-router";
import { Input } from "~/components/ui/input";
import type { ServantsData } from "~/types/api/jp";

export const meta: MetaFunction = () => {
  return [
    { title: "Simple FGO Wiki" },
    { name: "description", content: "EZZZZ!" },
  ];
};

export default function Home() {
  const [servants, setServants] = useState<ServantsData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://api.atlasacademy.io/export/JP/basic_servant_lang_en.json")
      .then((res) => res.json())
      .then((data) => setServants(data));
  });

  const filteredServants = useMemo(() => {
    if (!servants) return [];
    if (!search) return servants;
    return servants.filter((servant) =>
      servant.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [servants, search]);

  if (filteredServants.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <LoaderCircle className="size-24 animate-spin" />
      </div>
    );
  }

  return (
    <>
      <Input
        placeholder="Search servant..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-4 grid lg:grid-cols-8 sm:grid-cols-3 grid-cols-2">
        {filteredServants.map((servant) => (
          <Link to={`/servants/${servant.id}`} key={servant.id} className="p-5">
            <div className="relative w-full h-auto aspect-square">
              <img
                src={servant.face}
                alt={servant.className}
                className="rounded-lg absolute object-cover size-full"
              />
              <img
                src={`https://static.atlasacademy.io/JP/ClassIcons/class${
                  servant.rarity > 3 ? 3 : servant.rarity
                }_${servant.classId}.png`}
                alt={servant.className}
                className="absolute size-12 top-0 right-0 translate-x-1/2 -translate-y-1/2"
              />
            </div>
            <h2 className="text-center">{servant.name}</h2>
            <h3 className="text-xs text-zinc-400 text-center">{`(${servant.originalName})`}</h3>
          </Link>
        ))}
      </div>
    </>
  );
}
