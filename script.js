//=========================
// PRIME E-BOOKS V2
//=========================

const loader = document.getElementById("loader");
const header = document.getElementById("header");
const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");

//=========================
// LOADER
//=========================

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

      loader.style.display = "none";

    }, 500);

  }, 1200);

});

//=========================
// MENU MOBILE
//=========================

menuBtn.addEventListener("click", () => {

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {

    menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  } else {

    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

  }

});

//=========================
// FECHAR MENU AO CLICAR
//=========================

document.querySelectorAll(".menu a").forEach(link => {

  link.addEventListener("click", () => {

    menu.classList.remove("active");

    menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

  });

});

//=========================
// HEADER AO ROLAR
//=========================

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {

    header.style.background = "rgba(7,17,31,.95)";

    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

  } else {

    header.style.background = "rgba(7,17,31,.82)";

    header.style.boxShadow = "none";

  }

});//=========================
// FAQ
//=========================

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

  question.addEventListener("click", () => {

    const answer = question.nextElementSibling;
    const icon = question.querySelector("i");

    document.querySelectorAll(".faq-answer").forEach(item => {

      if (item !== answer) {

        item.style.display = "none";

      }

    });

    document.querySelectorAll(".faq-question i").forEach(item => {

      if (item !== icon) {

        item.style.transform = "rotate(0deg)";

      }

    });

    if (answer.style.display === "block") {

      answer.style.display = "none";
      icon.style.transform = "rotate(0deg)";

    } else {

      answer.style.display = "block";
      icon.style.transform = "rotate(180deg)";

    }

  });

});

//=========================
// BOTÃO VOLTAR AO TOPO
//=========================

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

  if (window.scrollY > 500) {

    backTop.style.display = "flex";

  } else {

    backTop.style.display = "none";

  }

});

backTop.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});//=========================
// PRIME ASSISTENTE
//=========================

const chat = document.getElementById("chat");
const openChat = document.getElementById("openChat");
const closeChat = document.getElementById("closeChat");

const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendChat = document.getElementById("sendChat");

// Abrir chat

openChat.addEventListener("click", () => {

    chat.style.display = "block";

    if(chatBody.innerHTML === ""){

        addBotMessage("👋 Olá! Eu sou o Prime Assistente.");

        addBotMessage("Posso responder dúvidas sobre nossos e-books, pagamentos e entrega.");

    }

});

// Fechar chat

closeChat.addEventListener("click", () => {

    chat.style.display = "none";

});

// Enviar mensagem

sendChat.addEventListener("click", sendMessage);

chatInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        sendMessage();

    }

});

function sendMessage(){

    const message = chatInput.value.trim();

    if(message === "") return;

    addUserMessage(message);

    botReply(message.toLowerCase());

    chatInput.value = "";

}

// Mensagem do usuário

function addUserMessage(text){

    chatBody.innerHTML += `

    <div class="user-message">

        ${text}

    </div>

    `;

    chatBody.scrollTop = chatBody.scrollHeight;

}

// Mensagem do robô

function addBotMessage(text){

    chatBody.innerHTML += `

    <div class="bot-message">

        ${text}

    </div>

    `;

    chatBody.scrollTop = chatBody.scrollHeight;

}//=========================
// RESPOSTAS DO ASSISTENTE
//=========================

function botReply(msg){

let resposta = "";

if(msg.includes("oi") || msg.includes("olá") || msg.includes("ola")){

resposta = "👋 Olá! Seja bem-vindo à Prime E-books. Como posso ajudar?";

}

else if(msg.includes("ebook") || msg.includes("livro")){

resposta = "📚 Temos e-books sobre Empreendedorismo Virtual, IA na Prática, Instagram que Vende, Controle Financeiro, Psicologia da Negociação e Segredo do Sono Infantil.";

}

else if(msg.includes("pagamento") || msg.includes("pix") || msg.includes("cartão")){

resposta = "💳 Os pagamentos são processados pela Kiwify. As formas disponíveis aparecem na página de pagamento.";

}

else if(msg.includes("comprar")){

resposta = "🛒 Basta clicar no botão 'Comprar Agora' do e-book desejado para ser direcionado à página de pagamento.";

}

else if(msg.includes("entrega") || msg.includes("receber")){

resposta = "⚡ Após a aprovação do pagamento, o acesso ao e-book é enviado automaticamente para seu e-mail.";

}

else if(msg.includes("seguro")){

resposta = "🔒 Sim! Toda a compra é realizada pela plataforma Kiwify em ambiente seguro.";

}

else if(msg.includes("obrigado")){

resposta = "😊 Eu que agradeço! Espero que aproveite nossos e-books.";

}

else{

resposta = "🤖 Desculpe, ainda estou aprendendo. Tente perguntar sobre pagamentos, entrega, e-books ou compras.";

}

setTimeout(()=>{

addBotMessage(resposta);

},600);

}

//=========================
// ANO AUTOMÁTICO
//=========================

const year = document.getElementById("year");

if(year){

year.textContent = new Date().getFullYear();

}