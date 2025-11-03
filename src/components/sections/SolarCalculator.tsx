import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sun, Zap, TrendingDown, Leaf, Download, Mail } from "lucide-react";
import { toast } from "sonner";

const CITIES_RO = [
  { name: "Porto Velho", tariff: 0.89 },
  { name: "Ariquemes", tariff: 0.87 },
  { name: "Ji-Paraná", tariff: 0.88 },
  { name: "Vilhena", tariff: 0.86 },
  { name: "Cacoal", tariff: 0.87 },
  { name: "Rolim de Moura", tariff: 0.88 },
  { name: "Jaru", tariff: 0.87 },
  { name: "Guajará-Mirim", tariff: 0.89 },
  { name: "Pimenta Bueno", tariff: 0.87 },
  { name: "Ouro Preto do Oeste", tariff: 0.88 },
];

// Constantes para cálculo
const AVERAGE_SOLAR_GENERATION_RO = 5.5; // kWh/kWp/dia em Rondônia
const SYSTEM_EFFICIENCY = 0.8; // 80% de eficiência do sistema
const CO2_PER_KWH = 0.0817; // kg de CO₂ por kWh (média Brasil)

const SolarCalculator = () => {
  const [monthlyConsumption, setMonthlyConsumption] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailDialog, setShowEmailDialog] = useState(false);

  const getCurrentTariff = () => {
    const city = CITIES_RO.find(c => c.name === selectedCity);
    return city?.tariff || 0.88;
  };

  const calculateSystemSize = () => {
    const consumption = parseFloat(monthlyConsumption);
    if (!consumption) return 0;
    
    const dailyConsumption = consumption / 30;
    const systemSize = dailyConsumption / (AVERAGE_SOLAR_GENERATION_RO * SYSTEM_EFFICIENCY);
    return systemSize;
  };

  const calculateMonthlyGeneration = () => {
    const systemSize = calculateSystemSize();
    return systemSize * AVERAGE_SOLAR_GENERATION_RO * 30 * SYSTEM_EFFICIENCY;
  };

  const calculateMonthlySavings = () => {
    const generation = calculateMonthlyGeneration();
    const tariff = getCurrentTariff();
    return generation * tariff;
  };

  const calculateYearlySavings = () => {
    return calculateMonthlySavings() * 12;
  };

  const calculateCO2Reduction = () => {
    const yearlyGeneration = calculateMonthlyGeneration() * 12;
    return yearlyGeneration * CO2_PER_KWH;
  };

  const calculatePayback = () => {
    const systemSize = calculateSystemSize();
    const systemCost = systemSize * 4500; // R$ 4.500 por kWp (média mercado)
    const yearlySavings = calculateYearlySavings();
    return systemCost / yearlySavings;
  };

  const handleCalculate = () => {
    if (!monthlyConsumption || parseFloat(monthlyConsumption) <= 0) {
      toast.error("Por favor, insira um consumo válido");
      return;
    }
    if (!selectedCity) {
      toast.error("Por favor, selecione uma cidade");
      return;
    }
    setShowResults(true);
    toast.success("Cálculo realizado com sucesso!");
  };

  const handleDownloadReport = () => {
    const consumption = parseFloat(monthlyConsumption);
    const systemSize = calculateSystemSize();
    const monthlyGeneration = calculateMonthlyGeneration();
    const monthlySavings = calculateMonthlySavings();
    const yearlySavings = calculateYearlySavings();
    const co2Reduction = calculateCO2Reduction();
    const payback = calculatePayback();
    const tariff = getCurrentTariff();

    const reportContent = `
RELATÓRIO DE VIABILIDADE - ENERGIA SOLAR
==========================================

DADOS DO CLIENTE
Cidade: ${selectedCity}
Consumo médio mensal: ${consumption} kWh
Tarifa de energia: R$ ${tariff.toFixed(2)}/kWh

SISTEMA RECOMENDADO
Potência: ${systemSize.toFixed(2)} kWp
Geração média mensal: ${monthlyGeneration.toFixed(0)} kWh

ECONOMIA ESTIMADA
Mensal: R$ ${monthlySavings.toFixed(2)}
Anual: R$ ${yearlySavings.toFixed(2)}

IMPACTO AMBIENTAL
Redução de CO₂: ${co2Reduction.toFixed(0)} kg/ano
Equivalente a: ${(co2Reduction / 20).toFixed(0)} árvores plantadas

RETORNO DO INVESTIMENTO
Payback estimado: ${payback.toFixed(1)} anos

==========================================
Relatório gerado por AstecPlace
www.astecplace.com
    `.trim();

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `relatorio-solar-${selectedCity}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success("Relatório baixado com sucesso!");
  };

  const handleSendEmail = async () => {
    if (!email || !email.includes('@')) {
      toast.error("Por favor, insira um e-mail válido");
      return;
    }

    try {
      const reportContent = `
RELATÓRIO DE ECONOMIA SOLAR - RONDÔNIA

Dados da Simulação:
- Consumo Mensal: ${monthlyConsumption} kWh
- Cidade: ${selectedCity}
- Tarifa Atual: R$ ${getCurrentTariff().toFixed(2)}/kWh

Resultados:
- Tamanho do Sistema: ${calculateSystemSize().toFixed(2)} kWp
- Geração Mensal: ${calculateMonthlyGeneration().toFixed(2)} kWh
- Economia Mensal: R$ ${calculateMonthlySavings().toFixed(2)}
- Economia Anual: R$ ${calculateYearlySavings().toFixed(2)}
- Redução de CO₂: ${calculateCO2Reduction().toFixed(2)} kg/ano
- Payback Estimado: ${calculatePayback().toFixed(1)} anos

Relatório gerado em ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}
      `;

      const response = await fetch('https://uzopxniwvpzafjapeykp.supabase.co/functions/v1/bitrix24-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            TITLE: `Simulação Solar - ${selectedCity}`,
            NAME: email.split('@')[0],
            EMAIL: [{ VALUE: email, VALUE_TYPE: 'WORK' }],
            COMMENTS: reportContent,
            SOURCE_ID: 'WEB',
            OPPORTUNITY: calculateYearlySavings()
          }
        })
      });

      if (response.ok) {
        toast.success('Relatório enviado com sucesso!');
      } else {
        toast.error('Erro ao enviar relatório. Tente novamente.');
      }
      
      setShowEmailDialog(false);
      setEmail('');
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      toast.error('Erro ao enviar relatório. Tente novamente.');
    }
  };

  return (
    <Card id="calculadora" className="bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-br from-yellow-400 to-green-500 p-4 rounded-full">
            <Sun className="h-8 w-8 text-white" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold text-green-800">
          Calculadora de Energia Solar
        </CardTitle>
        <CardDescription className="text-lg">
          Descubra quanto você pode economizar com energia solar em Rondônia
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Input Form */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="consumption" className="text-base font-semibold">
              Consumo médio mensal (kWh)
            </Label>
            <Input
              id="consumption"
              type="number"
              placeholder="Ex: 450"
              value={monthlyConsumption}
              onChange={(e) => setMonthlyConsumption(e.target.value)}
              className="text-lg h-12"
            />
            <p className="text-sm text-muted-foreground">
              Consulte sua conta de energia
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-base font-semibold">
              Cidade
            </Label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger id="city" className="text-lg h-12">
                <SelectValue placeholder="Selecione sua cidade" />
              </SelectTrigger>
              <SelectContent>
                {CITIES_RO.map((city) => (
                  <SelectItem key={city.name} value={city.name}>
                    {city.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {selectedCity && (
              <p className="text-sm text-muted-foreground">
                Tarifa: R$ {getCurrentTariff().toFixed(2)}/kWh
              </p>
            )}
          </div>
        </div>

        <Button 
          onClick={handleCalculate}
          className="w-full h-14 text-lg bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600"
        >
          <Zap className="mr-2 h-5 w-5" />
          Simular Economia
        </Button>

        {/* Results */}
        {showResults && (
          <div className="space-y-6 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200">
              <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">
                Resumo Gerado
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Sun className="h-6 w-6 text-blue-600" />
                    <p className="text-sm font-medium text-blue-800">Sistema Recomendado</p>
                  </div>
                  <p className="text-3xl font-bold text-blue-900">
                    {calculateSystemSize().toFixed(2)} kWp
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="h-6 w-6 text-green-600" />
                    <p className="text-sm font-medium text-green-800">Geração Mensal</p>
                  </div>
                  <p className="text-3xl font-bold text-green-900">
                    {calculateMonthlyGeneration().toFixed(0)} kWh
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center gap-3 mb-2">
                    <TrendingDown className="h-6 w-6 text-yellow-600" />
                    <p className="text-sm font-medium text-yellow-800">Economia Mensal</p>
                  </div>
                  <p className="text-3xl font-bold text-yellow-900">
                    R$ {calculateMonthlySavings().toFixed(2)}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-lg border border-emerald-200">
                  <div className="flex items-center gap-3 mb-2">
                    <Leaf className="h-6 w-6 text-emerald-600" />
                    <p className="text-sm font-medium text-emerald-800">Redução CO₂/ano</p>
                  </div>
                  <p className="text-3xl font-bold text-emerald-900">
                    {calculateCO2Reduction().toFixed(0)} kg
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-100 to-yellow-100 p-4 rounded-lg border-2 border-green-300 mb-6">
                <p className="text-lg text-center">
                  <span className="font-semibold text-green-800">Economia anual estimada:</span>{" "}
                  <span className="text-2xl font-bold text-green-900">
                    R$ {calculateYearlySavings().toFixed(2)}
                  </span>
                </p>
                <p className="text-sm text-center mt-2 text-green-700">
                  Payback aproximado: {calculatePayback().toFixed(1)} anos
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleDownloadReport}
                  variant="outline"
                  className="flex-1 h-12 border-green-600 text-green-700 hover:bg-green-50"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Baixar Relatório
                </Button>

                <Dialog open={showEmailDialog} onOpenChange={setShowEmailDialog}>
                  <DialogTrigger asChild>
                    <Button className="flex-1 h-12 bg-green-600 hover:bg-green-700">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar por E-mail
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Enviar Relatório por E-mail</DialogTitle>
                      <DialogDescription>
                        Digite seu e-mail para receber o relatório completo de viabilidade
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="seu@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <Button 
                        onClick={handleSendEmail}
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        Enviar Relatório
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SolarCalculator;
