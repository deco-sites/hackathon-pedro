import Image from "deco-sites/std/components/Image.tsx";
import AddToCartButton from "$store/islands/AddToCartButton.tsx";
import Container from "$store/components/ui/Container.tsx";
import Text from "$store/components/ui/Text.tsx";
import Breadcrumb from "$store/components/ui/Breadcrumb.tsx";
import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import { useOffer } from "$store/sdk/useOffer.ts";
import { formatPrice } from "$store/sdk/format.ts";
import type { LoaderReturnType } from "$live/types.ts";
import type { ProductDetailsPage } from "deco-sites/std/commerce/types.ts";

import ProductSelector from "./ProductVariantSelector.tsx";

export interface Props {
  page: LoaderReturnType<ProductDetailsPage | null>;
}

function NotFound() {
  return (
    <div class="w-full flex justify-center items-center py-28">
      <div class="flex flex-col items-center justify-center gap-6">
        <Text variant="heading-2">Página não encontrada</Text>
        <a href="/">
          <Button>Voltar à página inicial</Button>
        </a>
      </div>
    </div>
  );
}

function Details({ page }: { page: ProductDetailsPage }) {
  const {
    breadcrumbList,
    product,
  } = page;
  const {
    description,
    productID,
    offers,
    image: images,
    name,
    gtin,
  } = product;
  const { price, listPrice, seller, installments } = useOffer(offers);
  const [front, back] = images ?? [];

  console.log(JSON.stringify(offers, null, 2));

  return (
    <Container class="pt-[135px]">
      <div class="flex flex-col gap-4 sm:flex-row sm:gap-10">
        {/* Breadcrumb */}
        <div class="w-full px-4">
          <Breadcrumb
            itemListElement={breadcrumbList?.itemListElement.slice(0, -1)}
          />
        </div>
        {/* Image Gallery */}
        <div class="flex flex-row overflow-auto snap-x snap-mandatory scroll-smooth sm:gap-2">
          {[front, back ?? front].map((img, index) => (
            <Image
              style={{ aspectRatio: "360 / 500" }}
              class="snap-center min-w-[100vw] sm:min-w-0 sm:w-auto sm:h-[600px]"
              sizes="(max-width: 640px) 100vw, 30vw"
              src={img.url!}
              alt={img.alternateName}
              width={360}
              height={500}
              // Preload LCP image for better web vitals
              preload={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {/* Product Info */}
        <div class="flex-auto sm:px-0">
          <div class="flex flex-col w-full pb-3 border-b border-b-[#efefef]">
            {/* Code and name */}
            <div class="mt-4 px-4">
              <h1 class="m-0 p-0 text-lg uppercase text-default font-bold tracking-[.64px]">
                {name}
              </h1>
              <div class="flex gap-1">
                <span class="text-[##212528] text-xs">Vendido por</span>
                <span class="text-[#153359] font-bold text-xs">{seller}</span>
              </div>
            </div>
          </div>
          {/* Sku Selector */}
          <div class="mt-4 px-4">
            <ProductSelector product={product} />
          </div>
          {/* Prices */}
          <div class="mt-4 px-4">
            <div class="flex flex-row gap-2 items-center">
              <Text
                class="line-through"
                tone="subdued"
                variant="list-price"
              >
                {formatPrice(listPrice, offers!.priceCurrency!)}
              </Text>
              <Text tone="price" variant="heading-3">
                {formatPrice(price, offers!.priceCurrency!)}
              </Text>
            </div>
            <Text tone="subdued" variant="caption">
              {installments}
            </Text>
          </div>

          {/* Add to Cart and Favorites button */}
          <div class="mt-4 sm:mt-10 flex flex-col gap-2">
            {seller && (
              <AddToCartButton
                skuId={productID}
                sellerId={seller}
              />
            )}
            <Button variant="secondary">
              <Icon id="Heart" width={20} height={20} strokeWidth={2} />{" "}
              Favoritar
            </Button>
          </div>
          {/* Description card */}
          <div class="mt-4 sm:mt-6">
            <Text variant="caption">
              {description && (
                <details>
                  <summary class="cursor-pointer">Descrição</summary>
                  <div class="ml-2 mt-2">{description}</div>
                </details>
              )}
            </Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

function ProductDetails({ page }: Props) {
  if (page) {
    return <Details page={page} />;
  }

  return <NotFound />;
}

export default ProductDetails;
