# Challenge Take Blip - chatbot

API desenvolvida para alimentar um chatbot criado na plataforma da Take Blip.

Utiliza a API pública do github para retornar uma lista dos repositórios 
da Take desenvolvidos em C# ordenada de forma crescente pela data de publicação.

Para testar a API fora do chatbot é necessário passar o parâmetro **"nickname"** no header
da requisição para que seja usado na função de acesso à API do github.

![image](https://user-images.githubusercontent.com/33614882/156867309-b5a54bd5-8817-4fa3-a21e-40ef2f026e82.png)

Dos repositórios são retornados pela API somente os campos pertinentes à utilização do chatbot, conforme ilustrado abaixo:

![image](https://user-images.githubusercontent.com/33614882/156867450-8214e3fb-1267-423a-8e8b-bb0cba2c500d.png)
