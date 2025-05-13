function selectTab(tabName) {
  
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));
  document.getElementById('tab-' + tabName).classList.add('active');

  const labelNome = document.getElementById('label-nome');

  if (tabName === 'cliente') {
    labelNome.textContent = 'Usuário:';
  } else {
    labelNome.textContent = 'Usuário do restaurante:';
  }
}





// Script dos steps do modal
let stepAtual = 1;
let tipoSelecionado = null;

document.querySelector('.option.cliente').addEventListener('click', () => {
  tipoSelecionado = 'cliente';
  document.querySelector('.option.cliente').classList.add('active');
  document.querySelector('.option.vendedor').classList.remove('active');
});

document.querySelector('.option.vendedor').addEventListener('click', () => {
  tipoSelecionado = 'vendedor';
  document.querySelector('.option.vendedor').classList.add('active');
  document.querySelector('.option.cliente').classList.remove('active');
});

document.querySelector('.proximo').addEventListener('click', () => {
  if (!tipoSelecionado && stepAtual === 1) {
    alert('Por favor, selecione uma opção antes de continuar.');
    return;
  }

  if (stepAtual < 3) {
    stepAtual++;
    atualizarEtapa();
  } else {
    alert('Formulário finalizado!');
  }
});

document.querySelector('.voltar').addEventListener('click', () => {
  if (stepAtual > 1) {
    stepAtual--;
    atualizarEtapa();
  }
});

function atualizarEtapa() {
  
  const btnCancelar = document.querySelector('.cancelar');
  const btnVoltar = document.querySelector('.voltar');

  // A partir da etapa 2, exibe "Voltar" e esconde "Cancelar"
  if (stepAtual > 1) {
    btnCancelar.style.display = 'none';
    btnVoltar.style.display = 'inline-block';
  } else {
    btnCancelar.style.display = 'inline-block';
    btnVoltar.style.display = 'none';
  }

  const steps = document.querySelectorAll('.step');
  const barras = document.querySelectorAll('.barra-progresso');
  
  steps.forEach((el, index) => {
    el.classList.toggle('active', index < stepAtual);
    el.classList.toggle('preenchida', index < stepAtual - 1);
  });

  // Atualiza as barras entre os passos
  barras.forEach((barra, index) => {
    barra.classList.toggle('preenchida', index < stepAtual - 1);
  });

  // Atualiza o conteúdo do modal-body dinamicamente
  const body = document.querySelector('.options');
  const conteudo = document.createElement('div');
  conteudo.classList.add('form-step');
  let html = '';

  if (stepAtual === 1) {
    // Etapa 1 – Opções (Cliente ou Vendedor)
    html = `
      <div class="options">
          <button class="option cliente ${tipoSelecionado === 'cliente' ? 'active' : ''}">👤 Sou Cliente</button>
          <button class="option vendedor ${tipoSelecionado === 'vendedor' ? 'active' : ''}">👨‍🍳 Quero vender</button>
      </div>
    `;
  }

  if (stepAtual === 2) {
    if (tipoSelecionado === 'cliente') {
      html = `
        <div class="form-group">
          <label>Nome:</label>
          <input type="text" placeholder="Digite seu nome completo">
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label>Telefone:</label>
            <input type="text" placeholder="Digite seu telefone">
          </div>
          <div class="form-group half">
            <label>Senha:</label>
            <input type="password" placeholder="Escolha um senha">
          </div>
        </div>

        <div class="form-group">
          <label>E-mail:</label>
          <input type="email" placeholder="Digite seu e-mail">
        </div>
      `;
    } else if (tipoSelecionado === 'vendedor') {
      html = `
        <div class="form-group">
          <label>Nome do restaurante:</label>
          <input type="text" placeholder="Digite o nome do seu restaurante">
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label>Frete:</label>
            <input type="text" placeholder="Digite a taxa de entrega">
          </div>
          <div class="form-group half">
            <label>Metodos de pagamento:</label>
            <select placeholder="Selecione um método de pagamento">
              <option value="null">Selecione um método</option>
              <option value="cartao">Cartão de crédito</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group half">
            <label>E-mail:</label>
            <input type="email" placeholder="Digite seu e-mail">
          </div>
          <div class="form-group half">
            <label>Senha:</label>
            <input type="password" placeholder="escolha uma senha">
          </div>          
        </div>
      `;
    }
  }

  if (stepAtual === 3) {
    html = `

      <div class="form-row">
          <div class="form-group half">
            <label>CEP:</label>
            <input type="text" placeholder="Digite o seu CEP">
          </div>
          <div class="form-group half">
            <label>Bairro:</label>
            <input type="text" placeholder="digite seu bairro">
          </div>          
      </div>
      <div class="form-row">
          <div class="form-group half">
            <label>Rua:</label>
            <input type="text" placeholder="Digite o nome da rua">
          </div>
          <div class="form-group half">
            <label>Número:</label>
            <input type="number" placeholder="digite o núemro">
          </div>          
      </div>
      <div class="form-group">
        <label>Complemento:</label>
        <input type="text" placeholder="Digite o complemento">
      </div>
    `;
  }

  conteudo.innerHTML = html;

  body.innerHTML = '';
  body.appendChild(conteudo);
 
}

