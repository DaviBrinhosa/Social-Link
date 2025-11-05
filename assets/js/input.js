// Centralizamos todos os textos em um objeto para facilitar a manutenção
const content = {
    main_title: "Lar dos Gateados",

    about_us_title: "Quem Somos",
    about_us_text: `
        O <b>Lar dos Gateados</b> é um importante espaço de acolhimento e proteção animal que atua em favor de cães e gatos em situação de vulnerabilidade.  
        <br><br> Com mais de 10 anos de atuação, a iniciativa se dedica a resgatar, cuidar e encontrar lares responsáveis para os animais. Suas principais atividades incluem:  
        <br><br> <b>🐶🐱 Acolhimento de Cães e Gatos</b>: Oferecem abrigo seguro para animais resgatados, muitos deles vítimas de abandono ou maus-tratos.  
        <br><br> <b>🏥💊 Tratamento e Bem-Estar</b>: Os animais sob seus cuidados são castrados, vacinados e vermifugados, garantindo que sejam encaminhados para a adoção com a saúde em dia.  
        <br><br> <b>🛡️💕 Encaminhamento para Adoção</b>: Um de seus objetivos centrais é encontrar lares definitivos e amorosos, garantindo que os ''gateados'' (como carinhosamente se referem aos bichinhos) tenham a chance de viver com dignidade e segurança.  
        <br><br> Além de acolher seus próprios resgates, o <b>Lar dos Gateados!</b> também tem um papel de apoio a outras protetoras e iniciativas individuais, atuando em uma rede solidária para maximizar o auxílio aos animais que precisam.  
        <br><br> A manutenção do lar e dos cuidados veterinários depende da ajuda da comunidade, sendo fundamental o apoio por meio de doações e a participação em campanhas, como as de castração, que são essenciais para o controle populacional e a saúde dos bichinhos.  
        <br><br> É um trabalho contínuo, movido pela paixão e dedicação à causa animal.  
        <br><br> Você também pode apoiar este trabalho comprando um dos produtos exclusivos oferecidos na nossa loja online.
    `,

    our_store_title: "Nossa Loja",
    our_store_text: `
        Transforme Compras em Ronronares: Apoie o <b>Lar dos Gateados!</b> 🐾
        <br><br> Você sabia que cada item que você compra na nossa loja não é apenas um produto, mas sim uma refeição, uma vacina ou um lar quentinho para um cão ou gato resgatado?  
        <br><br> O <b>Lar dos Gateados!</b> é mais do que um abrigo; é um porto seguro para dezenas de vidas que foram vítimas do abandono.  
        <br><br> É simples fazer parte dessa corrente de amor:  
        <br><br> Ao escolher qualquer produto em nosso catálogo, você está contribuindo diretamente para as despesas de:  
        <br><br> * 🏥 <b>Veterinário</b>: Consultas, exames e cirurgias de emergência.  
        <br><br> * 🥣 <b>Alimentação</b>: Ração de qualidade para cães e gatos de todas as idades.  
        <br><br> * 💊 <b>Saúde</b>: Vacinas, vermífugos e medicamentos essenciais.  
        <br><br> Compre com o coração! Navegue em nossa loja, encontre aquele item que você estava procurando e sinta a satisfação de saber que sua compra está salvando vidas.  
        <br><br> Seu apoio nos move. Sua compra salva!  
        <br><br> VISTA A CAUSA! APOIE O LAR DOS GATEADOS!  
    `,
    our_store_subtitle: " 🛍️ Visite Nossa Loja Solidária ",

    donate_title: "Doações",
    donate_text: `
        Ajude-nos a salvar vidas! 🐾  
        <br><br> Manter o <b>Lar dos Gateados</b> exige muitos cuidados e custos: alimentação, consultas veterinárias, vacinas, medicamentos, castrações e muito mais.  
        <br><br> Você pode fazer a diferença! Cada contribuição, por menor que seja, ajuda a garantir que nossos cães e gatos recebam tudo o que precisam.  
        <br><br> Formas de ajudar:  
        <br><br> * 💳 <b>Doação financeira</b>: via Pix, depósito bancário ou transferência.  
        <br><br> * 🥣 <b>Doação de ração e medicamentos</b>.  
        <br><br> * 🛠️ <b>Voluntariado</b>: ajude com transporte, lar temporário ou apoio em feiras de adoção.  
        <br><br> Escaneie o QR Code abaixo ou utilize o PIX(48 99117-8383) para doar com facilidade:
    `,

    castration_title: "Castração",
    castration_text: `
        A castração salva vidas! ✂️🐱🐶  
        <br><br> A superpopulação de animais abandonados é um dos maiores desafios que enfrentamos.  
        <br><br> Por isso, promovemos campanhas de <b>castração para cães e gatos</b>, ajudando a controlar a população e evitar o abandono.  
        <br><br> Benefícios da castração:  
        <br><br> * 🛡️ <b>Previne doenças graves</b>.  
        <br><br> * 🐾 <b>Reduz o abandono</b>.  
        <br><br> * 💕 <b>Proporciona uma vida mais saudável e tranquila</b>.  
        <br><br> Entre em contato conosco e nos ajude com as castrações no botão abaixo:  
    `,
    castration_subtitle: " 🐾 Vamos juntos salvar mais vidas! ",

    brecho_title: "Brechó de Livros",
    brecho_text: `
        📚 Brechó de Livros: Uma História te Espera! 🐾
        <br><br> Dê uma nova vida a livros novos e usados e, ao mesmo tempo, faça uma grande diferença!
        <br><br> Nosso "Brechó de Livros" está recheado de histórias incríveis, esperando para irem para suas mãos!
        <br><br> O melhor de tudo? Toda a renda obtida com a venda será integralmente revertida para o Lar dos Gateados, ajudando a garantir cuidados, alimentação e um lar seguro para nossos amigos de quatro patas.
    `,
    brecho_subtitle: " ✨ Compre um livro, mude uma vida! ✨ ",


    whatsapp_title: "Contato - WhatsApp",
    instagram_title: "Contato - Instagram - Lar dos Gateados",

    copyright: "Website developed by / Site Desenvolvido por Davi Brinhosa ©2025",
};

// Atualiza automaticamente os elementos da página
Object.entries(content).forEach(([id, text]) => {
    const element = document.getElementById(id);
    if (element) element.innerHTML = text;
});

// Botões de redes sociais
const socialLinks = {
    whatsapp_button: "https://wa.me/554891178383",
    instagram_button: "https://www.instagram.com/lar_dos_gateados/",
};

Object.entries(socialLinks).forEach(([id, url]) => {
    const button = document.getElementById(id);
    if (button) button.onclick = () => window.open(url, "_blank");
});
