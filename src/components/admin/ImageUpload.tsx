import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Loader2, X, Upload } from 'lucide-react';

interface ImageUploadProps {
  bucket: string;
  onUpload: (url: string) => void;
  onRemove?: (url: string) => void;
  images?: string[];
  multiple?: boolean;
  maxFiles?: number;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({
  bucket,
  onUpload,
  onRemove,
  images = [],
  multiple = false,
  maxFiles = 5
}) => {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file: File) => {
    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
      const filePath = `${Date.now()}-${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath);

      onUpload(publicUrl);
      
      toast({
        title: "Sucesso",
        description: "Imagem enviada com sucesso!"
      });
    } catch (error: any) {
      toast({
        title: "Erro no upload",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    if (multiple) {
      const remainingSlots = maxFiles - images.length;
      if (files.length > remainingSlots) {
        toast({
          title: "Limite excedido",
          description: `Você pode adicionar no máximo ${remainingSlots} imagens.`,
          variant: "destructive"
        });
        return;
      }

      for (let i = 0; i < files.length; i++) {
        await uploadImage(files[i]);
      }
    } else {
      await uploadImage(files[0]);
    }

    // Reset input
    event.target.value = '';
  };

  const removeImage = async (imageUrl: string) => {
    try {
      // Extract file path from URL
      const urlParts = imageUrl.split('/');
      const filePath = urlParts[urlParts.length - 1];

      const { error } = await supabase.storage
        .from(bucket)
        .remove([filePath]);

      if (error) throw error;

      if (onRemove) {
        onRemove(imageUrl);
      }

      toast({
        title: "Sucesso",
        description: "Imagem removida com sucesso!"
      });
    } catch (error: any) {
      toast({
        title: "Erro ao remover",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="image-upload">
          {multiple ? 'Imagens' : 'Imagem'} 
          {multiple && ` (máx. ${maxFiles})`}
        </Label>
        <div className="flex items-center gap-2 mt-2">
          <Input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            disabled={uploading || (multiple && images.length >= maxFiles)}
            multiple={multiple}
            className="flex-1"
          />
          <Button
            type="button"
            variant="outline"
            size="sm"
            disabled={uploading || (multiple && images.length >= maxFiles)}
            onClick={() => document.getElementById('image-upload')?.click()}
          >
            {uploading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Upload className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-full h-24 object-cover rounded-md border"
              />
              {onRemove && (
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-1 right-1 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(image)}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};