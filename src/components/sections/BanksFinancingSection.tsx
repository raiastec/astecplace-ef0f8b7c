import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";

const BanksFinancingSection = () => {
  const banks = [
    { name: "Banco do Brasil", color: "bg-yellow-500" },
    { name: "Caixa Econômica", color: "bg-blue-600" },
    { name: "Santander", color: "bg-red-600" },
    { name: "Bradesco", color: "bg-red-700" },
    { name: "Itaú", color: "bg-orange-500" },
    { name: "Sicoob", color: "bg-green-700" },
    { name: "Sicredi", color: "bg-green-600" },
    { name: "BV Financeira", color: "bg-blue-800" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bancos Financiadores
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Principais instituições financeiras que oferecem linhas de crédito para energia solar
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {banks.map((bank, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`${bank.color} w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-sm">{bank.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-primary/5 rounded-xl p-6 text-center">
            <p className="text-muted-foreground">
              Entre em contato conosco para descobrir as melhores condições de financiamento para seu projeto de energia solar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BanksFinancingSection;
