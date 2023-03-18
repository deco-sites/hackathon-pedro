import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Text from "$store/components/ui/Text.tsx";
import Container from "$store/components/ui/Container.tsx";
import Image from "deco-sites/std/components/Image.tsx";

import Newsletter from "./Newsletter.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};

export type Item = StringItem | IconItem;

export type Section = {
  label: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <Text variant="caption" tone="default-inverse">
      {isIcon(item)
        ? (
          <div class="border-default border-1 py-1.5 px-2.5">
            <Icon
              id={item.icon}
              width={25}
              height={20}
              strokeWidth={0.01}
            />
          </div>
        )
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </Text>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  logoUrl?: string;
}
function Footer({ logoUrl }: Props) {
  return (
    <footer class="w-full bg-[#2f3538] flex flex-col divide-y-1 divide-default">
      <div>
        <Container class="w-full flex flex-col divide-y-1 divide-default px-4">
          <div class="flex flex-col w-full items-center justify-center gap-2 pt-9">
            <span class="text-white font-bold">
              Acompanhe nossas redes sociais
            </span>
            <span class="text-white text-sm">
              Fique por dentro das promoções, horários de
              <br />
              funcionamento e novidades em primeira mão!
            </span>
            <div class="w-full h-full max-w-[185px] max-h-[52px]">
              {logoUrl && (
                <Image
                  src={logoUrl}
                  alt={"Logo"}
                  width={185}
                  height={52}
                  class="rounded w-full"
                  preload={false}
                  loading={"lazy"}
                />
              )}
            </div>
            <div class="flex flex-col w-full gap-4 mt-12">
              <span class="text-white text-sm">
                Av. Guilherme Campos, 500 – Jardim Santa Genebra Campinas, SP –
                CEP: 13087-901J
              </span>

              <div class="flex w-full">
                <iframe
                  class="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3676.787613319934!2d-47.06499848443638!3d-22.847345941498027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c683e592fc29%3A0x503fbf7eb72ec1c1!2sParque%20D.%20Pedro%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1664376581720!5m2!1spt-BR!2sbr"
                >
                </iframe>
              </div>

              <div class="flex w-full mt-4">
                <a
                  href="https://www.google.com/maps/dir//Av.+Vicente+de+Carvalho,+909+-+Vila+da+Penha,+Rio+de+Janeiro+-+RJ,+21210-623/@-22.8510766,-43.313811,15.47z/data=!4m8!4m7!1m0!1m5!1m1!1s0x997ca292ed71df:0xc7d0c3a3058b3da2!2m2!1d-43.3115069!2d-22.8500572?hl=pt-BR"
                  class="py-4 px-6 border border-white rounded font-bold"
                >
                  Como chegar
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div>
        <Container class="w-full">
          <div class="flex justify-between w-full px-4">
            <Text
              class="flex items-center gap-1"
              variant="body"
              tone="default-inverse"
            >
              Powered by{" "}
              <a
                href="https://www.deco.cx"
                aria-label="powered by https://www.deco.cx"
              >
                <Icon id="Deco" height={20} width={60} strokeWidth={0.01} />
              </a>
            </Text>

            <ul class="flex items-center justify-center gap-2">
              <li>
                <a
                  href="https://www.instagram.com/deco.cx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Instagram"
                    strokeWidth={1}
                  />
                </a>
              </li>
              <li>
                <a
                  href="http://www.deco.cx/discord"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Discord logo"
                >
                  <Icon
                    class="text-default-inverse"
                    width={32}
                    height={32}
                    id="Discord"
                    strokeWidth={5}
                  />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
