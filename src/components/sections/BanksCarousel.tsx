import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const banks = [
  { name: "Banco do Brasil", logo: "/banks/banco_brasil_rural.png" },
  { name: "Caixa Econômica", logo: "/banks/caixa_rural.png" },
  { name: "Santander", logo: "/banks/santander.png" },
  { name: "Bradesco", logo: "/banks/bradesco.jpg" },
  { name: "Itaú", logo: "/banks/itau.png" },
  { name: "Sicoob", logo: "/banks/sicoob_rural.png" },
  { name: "Sicredi", logo: "/banks/credisis_rural.png" },
  { name: "BV Financeira", logo: "/banks/bv.jpg" },
  { name: "Cresol", logo: "/banks/cresol.png" },
  { name: "Banco da Amazônia", logo: "/banks/banco_amazonia.jpg" },
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
