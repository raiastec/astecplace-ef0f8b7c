import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Loader2, MessageSquare } from 'lucide-react';
import { z } from 'zod';

const generalContactSchema = z.object({
  nome: z.string().trim().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  telefone: z.string().trim().min(1, 'Telefone é obrigatório').max(20, 'Telefone inválido'),
  cidade: z.string().trim().min(1, 'Cidade é obrigatória').max(100, 'Cidade muito longa'),
  mensagem: z.string().trim().max(1000, 'Mensagem muito longa').optional()
});

interface GeneralContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'anunciar' | 'consultor';
}

const GeneralContactForm: React.FC<GeneralContactFormProps> = ({ isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getFormTitle = () => {
    return formType === 'anunciar' ? 'Anunciar Produto/Serviço' : 'Falar com Consultor';
  };

  const getFormDescription = () => {
    return formType === 'anunciar' 
      ? 'Preencha os dados abaixo para começar a anunciar seus produtos.' 
      : 'Preencha os dados abaixo e nossa equipe entrará em contato.';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    try {
      generalContactSchema.parse(formData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: 'Erro de validação',
          description: error.errors[0].message,
          variant: 'destructive'
        });
      }
      return;
    }

    setIsSubmitting(true);

    try {
      const serviceType = formType === 'anunciar' ? 'Anunciar Produto/Serviço' : 'Consultor Especializado';
      
      // Integração com Bitrix24
      const bitrixData = {
        fields: {
          NAME: formData.nome,
          PHONE: [{ VALUE: formData.telefone, VALUE_TYPE: 'WORK' }],
          ADDRESS_CITY: formData.cidade,
          COMMENTS: `Serviço solicitado: ${serviceType}\n\nMensagem: ${formData.mensagem}`,
          SOURCE_ID: 'WEB',
          SOURCE_DESCRIPTION: `Formulário ${serviceType} - ASTECPLACE`
        }
      };

      const response = await fetch('https://astecassessoriaagropecuaria.bitrix24.com.br/rest/31/xxnbvv4is9jfat4j/crm.lead.add.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bitrixData)
      });

      const result = await response.json();

      if (result.result) {
        toast({
          title: 'Mensagem enviada com sucesso!',
          description: 'Nossa equipe entrará em contato em breve.',
        });
        
        // Limpar formulário
        setFormData({
          nome: '',
          telefone: '',
          cidade: '',
          mensagem: ''
        });
        
        onClose();
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar para Bitrix:', error);
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Tente novamente ou entre em contato pelo WhatsApp.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            {getFormTitle()}
          </DialogTitle>
          <DialogDescription>
            {getFormDescription()}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome">Nome Completo *</Label>
            <Input
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              placeholder="Seu nome completo"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefone">Telefone *</Label>
            <Input
              id="telefone"
              name="telefone"
              type="tel"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cidade">Cidade *</Label>
            <Input
              id="cidade"
              name="cidade"
              value={formData.cidade}
              onChange={handleChange}
              placeholder="Sua cidade"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensagem">Mensagem (opcional)</Label>
            <Textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder={formType === 'anunciar' ? 'Descreva o que deseja anunciar...' : 'Deixe sua mensagem...'}
              rows={3}
            />
          </div>

          <div className="flex gap-2 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
              Enviar
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GeneralContactForm;