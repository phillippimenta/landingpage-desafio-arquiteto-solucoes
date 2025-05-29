
document.getElementById('leadForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const form = e.target;
  const messageDiv = document.getElementById('message');

  // Remover máscaras
  const cleanCPF = form.cpf.value.replace(/\D/g, '');
  const cleanPhone = form.phone.value.replace(/\D/g, '');

  const data = {
    name: form.name.value,
    cpf: cleanCPF,
    email: form.email.value,
    phone: cleanPhone,
    consent: true
  };

  try {
    const response = await fetch('http://localhost:8080/api/v1/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      messageDiv.textContent = 'Cadastro realizado com sucesso!';
      messageDiv.className = 'message success';
      form.reset();
    } else {
      const errorData = await response.json();
      messageDiv.textContent = errorData.message || 'Não foi possível concluir o cadastro.';
      messageDiv.className = 'message error';
    }
  } catch (error) {
    messageDiv.textContent = 'Erro de conexão com o servidor. Tente novamente em instantes.';
    messageDiv.className = 'message error';
  }
});

// Máscara de CPF
const cpfInput = document.getElementById('cpf');
cpfInput.setAttribute('maxlength', '14');

cpfInput.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  e.target.value = value;
});

// Máscara de telefone
const phoneInput = document.getElementById('phone');
phoneInput.setAttribute('maxlength', '15');

phoneInput.addEventListener('input', function (e) {
  let value = e.target.value.replace(/\D/g, '');

  if (value.length <= 10) {
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
  } else {
    value = value.replace(/(\d{2})(\d)/, '($1) $2');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');
  }

  e.target.value = value;
});
