# 📱 Gerador de Senhas Seguras  

Este é um aplicativo mobile desenvolvido com **React Native** que permite criar senhas aleatórias e seguras. O projeto faz parte dos meus estudos no curso de React Native da DIO e marca o início da minha jornada no desenvolvimento mobile! 🚀  

---

## ✨ **Funcionalidades**  
- **Gerar Senhas Seguras**: Criação de senhas aleatórias com apenas um toque.  
- **Copiar para a Área de Transferência**: Copie as senhas geradas para usar em seus logins e cadastros.  
- **Interface Intuitiva**: Design simples e funcional para facilitar a experiência do usuário.  

---

## 🛠️ **Tecnologias e Recursos Utilizados**  
### **Tecnologias**  
- **React Native**  
- **Expo**  
- **TypeScript**  
- **Node.js**  

### **Principais Recursos**  
1. **Clipboard do Expo**  
   - Instalação:  
     ```bash  
     npx expo install expo-clipboard  
     ```  
   - Importação:  
     ```javascript  
     import * as Clipboard from 'expo-clipboard';  
     ```  
   - Uso:  
     Copiar a senha gerada para a área de transferência.  

2. **useState do React**  
   - Importação:  
     ```javascript  
     import React, { useState } from 'react';  
     ```  
   - Definição de estado para armazenar a senha gerada:  
     ```javascript  
     const [pass, setPass] = useState('');  
     ```  

3. **Pressable do React Native**  
   - Código de exemplo:  
     ```javascript  
     <InputText pass={pass}/>  
     <Pressable onPress={handleGeneratButton} style={styles.buttonGenerat}>  
       <Text style={styles.textButton}>  
         <Image source={arrow}/>  
           Gerar Senha  
       </Text>  
     </Pressable>  
     <Pressable onPress={handleCopyButton} style={styles.buttonCopy}>  
       <Text style={styles.textButton}>  
         <Image source={copy}/>  
           Copiar Senha  
       </Text>  
     </Pressable>  
     ```  

---

## 📂 **Organização do Projeto**  
O projeto foi estruturado da seguinte maneira:  
```plaintext  
src/  
├── components/  
│   ├── ButtonInput/  
│   │   ├── ButtonInput.tsx  
│   │   └── ButtonInputStyles.tsx  
│   ├── InputText/  
│   │   ├── InputText.tsx  
│   │   └── InputTextStyles.tsx  
│   └── Logo/  
│       ├── Logo.tsx  
│       └── LogoStyles.tsx  
├── screens/  
│   └── Home/  
│       ├── Home.tsx  
│       └── HomeStyles.tsx  
└── service/  
    └── PassGeneratService.ts  
```  

### **Descrição das Pastas e Arquivos**  
- **components/**: Contém componentes reutilizáveis com estilos organizados em arquivos separados.  
- **screens/**: Contém a estrutura principal de telas, como a tela **Home**.  
- **service/**: Contém a lógica para geração de senhas no arquivo `PassGeneratService.ts`.  

---

## 📂 **Trabalhando com Arquivos de Mídia**  
Para trabalhar com arquivos como **.jpeg**, **.png**, **.svg**, foi necessário criar um arquivo de configuração na pasta `src/`. Esse arquivo define como essas extensões são tratadas durante a execução do projeto.  

---

## 🚀 **Como Executar o Projeto**  
1. **Clone este repositório**:  
   ```bash  
   git clone https://github.com/marioluizguimaraes/React-Native  
   ```  

2. **Acesse o diretório do projeto**:  
   ```bash  
   cd Sequenciador-de-senhas/my-app2  
   ```  

3. **Instale as dependências**:  
   ```bash  
   npm install  
   ```  

4. **Inicie o servidor de desenvolvimento**:  
   ```bash  
   npx expo start  
   ```  

5. **Teste no Expo Go**:  
   - Escaneie o QR Code gerado com o aplicativo **Expo Go** (disponível na App Store e Google Play).  

---

## 🎯 **Próximos Passos**  
- Adicionar opções para personalizar o tamanho da senha. 
- Melhorar o design com novas bibliotecas de estilização.  
