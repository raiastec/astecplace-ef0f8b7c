import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';
import { Loader2, Phone } from 'lucide-react';
import { z } from 'zod';

const contactSchema = z.object({
  nome: z.string().trim().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  telefone: z.string().trim().min(1, 'Telefone é obrigatório').max(20, 'Telefone inválido'),
  cidade: z.string().trim().min(1, 'Cidade é obrigatória').max(100, 'Cidade muito longa'),
  produto: z.string().trim().min(1, 'Produto é obrigatório').max(200, 'Nome do produto muito longo'),
  mensagem: z.string().trim().max(1000, 'Mensagem muito longa').optional()
});

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose, productName = '' }) => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    cidade: '',
    produto: productName,
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate input
    try {
      contactSchema.parse(formData);
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
      // Integração com Bitrix24 via Edge Function
      const leadData = {
        TITLE: `Lead - ${formData.produto}`,
        NAME: formData.nome,
        PHONE: [{ VALUE: formData.telefone, VALUE_TYPE: 'WORK' }],
        ADDRESS_CITY: formData.cidade,
        COMMENTS: `Produto de interesse: ${formData.produto}\n\nMensagem: ${formData.mensagem}`
      };

      const response = await fetch('https://uzopxniwvpzafjapeykp.supabase.co/functions/v1/bitrix24-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: 'Mensagem enviada com sucesso!',
          description: 'Nossa equipe entrará em contato em breve.',
        });
        
        // Limpar formulário
        setFormData({
          nome: '',
          telefone: '',
          cidade: '',
          produto: productName,
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
            <Phone className="h-5 w-5" />
            Entre em Contato
          </DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e nossa equipe entrará em contato.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="produto">Produto de Interesse</Label>
            <Input
              id="produto"
              name="produto"
              value={formData.produto}
              onChange={handleChange}
              placeholder="Nome do produto"
              required
              readOnly={!!productName}
              className={productName ? 'bg-muted' : ''}
            />
          </div>

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
              placeholder="Deixe sua mensagem..."
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

export default ContactForm;