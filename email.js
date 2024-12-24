// Inicializa o EmailJS
emailjs.init("Y3Xa_3d8sV9CQe1jK"); // Substitua pela sua chave pública

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const textarea = document.getElementById("mensagem");

  // Função para ajustar a altura do textarea
  textarea.addEventListener('input', function () {
    this.style.height = 'auto';  // Reseta a altura para que o ajuste funcione
    this.style.height = (this.scrollHeight) + 'px';  // Ajusta a altura com base no conteúdo
  });

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o recarregamento padrão da página

    const email = form.email.value; // Obtém o valor do campo de email
    const mensagem = form.mensagem.value; // Obtém o valor do campo de mensagem

    // Validação do email (expressão regular simples para validar o formato)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return; // Impede o envio do formulário
    }

    // Verifica se a mensagem foi preenchida
    if (mensagem.trim() === "") {
      alert("O campo mensagem não pode estar vazio.");
      return; // Impede o envio do formulário
    }

    // Se o email e a mensagem estiverem corretos, envia o email
    const formData = {
      mensagem: mensagem,
      reply_to: email,
    };

    // Usa o EmailJS para enviar o email
    emailjs
      .send("service_ja14hf8", "template_xqeofwi", formData)
      .then(
        function () {
          alert("Email enviado com sucesso!");
          form.reset(); // Limpa os campos do formulário
        },
        function (error) {
          alert("Erro ao enviar email: " + error.text);
        }
      );
  });
});
