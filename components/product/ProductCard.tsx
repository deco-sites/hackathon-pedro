import Image from "deco-sites/std/components/Image.tsx";
import Text from "$store/components/ui/Text.tsx";
import Avatar from "$store/components/ui/Avatar.tsx";
import Button from "$store/components/ui/Button.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import { useVariantPossibilities } from "$store/sdk/useVariantPossiblities.ts";
import type { Product } from "deco-sites/std/commerce/types.ts";

/**
 * A simple, inplace sku selector to be displayed once the user hovers the product card
 * It takes the user to the pdp once the user clicks on a given sku. This is interesting to
 * remove JS from the frontend
 */
function Sizes(product: Product) {
  const possibilities = useVariantPossibilities(product);
  const options = Object.entries(
    possibilities["TAMANHO"] ?? possibilities["Tamanho"] ?? {},
  );

  return (
    <ul class="flex justify-center items-center gap-2">
      {options.map(([url, value]) => (
        <a href={url}>
          <Avatar
            class="bg-default"
            variant="abbreviation"
            content={value}
            disabled={url === product.url}
          />
        </a>
      ))}
    </ul>
  );
}

interface Props {
  product: Product;
  /** Preload card image */
  preload?: boolean;
}

function ProductCard({ product, preload }: Props) {
  const {
    url,
    productID,
    name,
    image: images,
    offers,
  } = product;
  const [front, back] = images ?? [];
  const { listPrice, price, seller, installments } = useOffer(offers);

  const discountPercentage = listPrice
    ? Math.floor(((listPrice - price!) / listPrice) * 100)
    : 0;

  return (
    <div
      id={`product-card-${productID}`}
      class="w-full group relative bg-white rounded p-3 shadow shadow-black"
    >
      <a href={url} aria-label="product link">
        <div class="flex justify-between items-center absolute top-4 left-4 w-[85%] z-10">
          {discountPercentage > 0 && (
            <div class="bg-[#153359] rounded-full h-6 px-3 flex items-center justify-center">
              <span class="font-bold text-xs text-white uppercase">
                {discountPercentage}% off
              </span>
            </div>
          )}
          <div class="ml-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#7f1d1d"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
        </div>

        <div>
          <div class="relative w-full h-full">
            <Image
              src={front.url!}
              alt={front.alternateName}
              width={195}
              height={195}
              class="rounded w-full group-hover:hidden"
              preload={preload}
              loading={preload ? "eager" : "lazy"}
              sizes="(max-width: 640px) 50vw, 20vw"
            />
            <Image
              src={back?.url ?? front.url!}
              alt={back?.alternateName ?? front.alternateName}
              width={195}
              height={195}
              class="rounded w-full hidden group-hover:block"
              sizes="(max-width: 640px) 50vw, 20vw"
            />
          </div>
        </div>
        {seller && (
          <div class="mt-1 block">
            <span class="text-blue-900 text-xs">Le Biscuit</span>
          </div>
        )}

        <div class="pt-6 max-w-[150px] overflow-hidden overflow-ellipsis">
          <span class="w-full overflow-ellipsis whitespace-nowrap font-bold text-default">
            {name}
          </span>
        </div>

        <div class="flex flex-col gap-[2px] pt-4">
          {!!listPrice && (
            <span class="line-through text-[#979899] text-xs">
              De {formatPrice(listPrice, offers!.priceCurrency!)}
            </span>
          )}
          <div class="flex gap-1">
            {!!listPrice && <span class="text-base text-default">Para</span>}
            <span class="font-bold text-base text-[#153359]">
              {formatPrice(price, offers!.priceCurrency!)}
            </span>
          </div>
          {installments && (
            <span class="text-[10px] text-[#153359] font-bold">
              Ou {installments}
            </span>
          )}
        </div>
      </a>
    </div>
  );

  // productID, front.url!
  // return (
  //   <div
  //     id={`product-card-${productID}`}
  //     class="w-full group"
  //   >
  //     <a href={url} aria-label="product link">
  //       <div class="relative w-full h-full">
  //         <Image
  //           src={front.url!}
  //           alt={front.alternateName}
  //           width={200}
  //           height={279}
  //           class="rounded w-full group-hover:hidden"
  //           preload={preload}
  //           loading={preload ? "eager" : "lazy"}
  //           sizes="(max-width: 640px) 50vw, 20vw"
  //         />
  //         <Image
  //           src={back?.url ?? front.url!}
  //           alt={back?.alternateName ?? front.alternateName}
  //           width={200}
  //           height={279}
  //           class="rounded w-full hidden group-hover:block"
  //           sizes="(max-width: 640px) 50vw, 20vw"
  //         />
  //         {seller && (
  //           <div
  //             class="absolute bottom-0 hidden sm:group-hover:flex flex-col gap-2 w-full p-2 bg-opacity-10"
  //             style={{
  //               backgroundColor: "rgba(255, 255, 255, 0.2)",
  //               backdropFilter: "blur(2px)",
  //             }}
  //           >
  //             <Sizes {...product} />
  //             <Button as="a" href={product.url}>Visualizar Produto</Button>
  //           </div>
  //         )}
  //       </div>

  //       <div class="flex flex-col gap-1 py-2">
  //         <Text
  //           class="overflow-hidden overflow-ellipsis whitespace-nowrap"
  //           variant="caption"
  //         >
  //           {name}
  //         </Text>
  //         <div class="flex items-center gap-2">
  //           <Text
  //             class="line-through"
  //             variant="list-price"
  //             tone="subdued"
  //           >
  //             {formatPrice(listPrice, offers!.priceCurrency!)}
  //           </Text>
  //           <Text variant="caption" tone="price">
  //             {formatPrice(price, offers!.priceCurrency!)}
  //           </Text>
  //         </div>
  //       </div>
  //     </a>
  //   </div>
  // );
}

export default ProductCard;
