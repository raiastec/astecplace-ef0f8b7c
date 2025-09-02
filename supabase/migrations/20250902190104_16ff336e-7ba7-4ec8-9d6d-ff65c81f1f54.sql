-- Atualizar o primeiro usuário para ser admin
UPDATE profiles 
SET role = 'admin' 
WHERE email = 'raiani.diniz.astec@gmail.com';