import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import bancoDoBrasil from "@/assets/banks/banco_brasil_rural.png";
import caixa from "@/assets/banks/caixa_rural.png";
// import santander from "@/assets/banks/santander.png";
// import bradesco from "@/assets/banks/bradesco.png";
// import itau from "@/assets/banks/itau.png";
import sicoob from "@/assets/banks/sicoob_rural.png";
import sicredi from "@/assets/banks/credisis_rural.png";
// import bv from "@/assets/banks/bv.png";
import cresol from "@/assets/banks/cresol.png";
import bancoAmazonia from "@/assets/banks/Banco_da_Amazônia.png";

const banks = [
  { name: "Banco do Brasil", logo: bancoDoBrasil },
  { name: "Caixa Econômica", logo: caixa },
 // { name: "Santander", logo: santander },
 // { name: "Bradesco", logo: bradesco },
 // { name: "Itaú", logo: itau },
  { name: "Sicoob", logo: sicoob },
  { name: "Sicredi", logo: sicredi },
  // { name: "BV Financeira", logo: bv },
  { name: "Cresol", logo: cresol },
  { name: "Banco da Amazônia", logo: bancoAmazonia },
];

const BanksCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      dragFree: true,
    },
    [
      AutoScroll({ 
        playOnInit: true,
        speed: 1,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      })
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-8">
        {/* Duplicate banks for seamless loop */}
        {[...banks, ...banks].map((bank, index) => (
          <div
            key={index}
            className="flex-[0_0_200px] min-w-0 flex items-center justify-center p-6 bg-card rounded-lg border"
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="max-w-full h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BanksCarousel;
