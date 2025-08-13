import conexaoImage from "@/assets/conexao-section.png";

const ConexaoSection = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <img 
            src={conexaoImage} 
            alt="Como funciona a ASTECPLACE - Conectando compradores e vendedores" 
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ConexaoSection;