import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Download, Mail, TrendingDown } from "lucide-react";
import { toast } from "sonner";

const SolarCalculator = () => {
  const [monthlyBill, setMonthlyBill] = useState<string>("");
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [showEmailInput, setShowEmailInput] = useState(false);

  // Calculation assumptions
  const SOLAR_SAVINGS_PERCENTAGE = 0.95; // 95% reduction
  const SYSTEM_LIFETIME_YEARS = 25;
  const AVERAGE_INCREASE_RATE = 0.08; // 8% annual increase in energy costs

  const calculateSavings = () => {
    const monthly = parseFloat(monthlyBill);
    if (isNaN(monthly) || monthly <= 0) {
      toast.error("Por favor, insira um valor válido");
      return;
    }

    setShowResults(true);
  };

  const getMonthlySavings = () => {
    const monthly = parseFloat(monthlyBill);
    return monthly * SOLAR_SAVINGS_PERCENTAGE;
  };

  const getYearlySavings = () => {
    return getMonthlySavings() * 12;
  };

  const getLifetimeSavings = () => {
    const yearly = getYearlySavings();
    let total = 0;
    for (let year = 0; year < SYSTEM_LIFETIME_YEARS; year++) {
      total += yearly * Math.pow(1 + AVERAGE_INCREASE_RATE, year);
    }
    return total;
  };

  const handleSendEmail = () => {
    if (!email || !email.includes('@')) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    // In a real application, this would send the report via email
    toast.success("Relatório enviado com sucesso para " + email);
    setShowEmailInput(false);
    setEmail("");
  };

  return (
    <div className="py-16 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Calculadora de Economia Solar
            </h2>
            <p className="text-muted-foreground text-lg">
              Descubra quanto você pode economizar com energia solar
            </p>
          </div>

          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-6 h-6 text-green-600" />
                Calcule sua Economia
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="monthly-bill">
                  Quanto você gasta de energia por mês? (R$)
                </Label>
                <Input
                  id="monthly-bill"
                  type="number"
                  placeholder="Ex: 500"
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(e.target.value)}
                  min="0"
                  step="0.01"
                />
              </div>

              <Button 
                onClick={calculateSavings} 
                className="w-full bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calcular Economia
              </Button>

              {showResults && (
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-green-600">
                    <TrendingDown className="w-5 h-5" />
                    Sua Economia Estimada
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200">
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-2">Por Mês</p>
                        <p className="text-2xl font-bold text-green-600">
                          R$ {getMonthlySavings().toFixed(2)}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200">
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-2">Por Ano</p>
                        <p className="text-2xl font-bold text-green-600">
                          R$ {getYearlySavings().toFixed(2)}
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 dark:bg-green-950/20 border-green-200">
                      <CardContent className="pt-6">
                        <p className="text-sm text-muted-foreground mb-2">Em 25 Anos</p>
                        <p className="text-2xl font-bold text-green-600">
                          R$ {getLifetimeSavings().toLocaleString('pt-BR', { maximumFractionDigits: 0 })}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      * Cálculo baseado em 95% de redução na conta de luz e aumento médio de 8% ao ano nas tarifas de energia.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4">
                    {!showEmailInput ? (
                      <Button 
                        onClick={() => setShowEmailInput(true)}
                        variant="outline"
                        className="w-full"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Gerar Relatório
                      </Button>
                    ) : (
                      <div className="space-y-3 p-4 bg-secondary/20 rounded-lg">
                        <Label htmlFor="email">
                          Enviar relatório por e-mail (opcional)
                        </Label>
                        <div className="flex gap-2">
                          <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <Button onClick={handleSendEmail} className="bg-green-600 hover:bg-green-700">
                            <Mail className="w-4 h-4 mr-2" />
                            Enviar
                          </Button>
                        </div>
                        <Button 
                          onClick={() => setShowEmailInput(false)}
                          variant="ghost"
                          size="sm"
                        >
                          Cancelar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;
