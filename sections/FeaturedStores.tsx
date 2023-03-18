import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  stores: Array<{
    image: LiveImage;
    alt?: string;
  }>;
}

export default function FeaturedStores({ stores }: Props) {
  return (
    <section className="flex flex-col w-full mt-[132px] px-4">
      <h2 className="font-bold text-lg uppercase my-4">Lojas em destaque</h2>

      <div className="flex w-full overflow-auto pb-12 gap-4">
        {stores && stores.length > 0
          ? stores.map((item, index) => (
            <div
              key={index}
              className="py-4 px-1 min-w-[167px] shadow-md shadow-black rounded-sm"
            >
              <img
                src={item.image}
                alt={item.alt ?? "Loja em destaque"}
                className="w-full h-full object-cover"
              />
            </div>
          ))
          : <div />}
      </div>
    </section>
  );
}
