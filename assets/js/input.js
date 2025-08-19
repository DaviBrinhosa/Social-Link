let main_title = "Lar dos Gateados";

let about_us_title = "Quem Somos";
let about_us_text = "Somos amigas desde 1988. E desde sempre pensávamos em trabalhar juntas. No entanto, a vida nos colocou em caminhos diferentes por muitos anos.<br><br> Nesse meio tempo, fizemos faculdade, tivemos filhos, construímos nossas carreiras (não necessariamente nessa mesma ordem), mas em caminhos distintos: Elisiane na Educação e Marcelli no Meio Ambiente. <br><br> Os filhos cresceram, a vida foi de certa forma se acalmando. Por vezes não nos entendíamos enquanto mulheres: o que queríamos, quem éramos, o que precisávamos entender. <br><br> Cada uma a sua maneira buscou o autoconhecimento, buscou a sua essência. E quis o destino que aqui a junção se concretizasse: Percebemos que, apesar de termos escolhido ferramentas diferentes para nos orientar nesse “Olhar para dentro”, elas se complementavam.<br><br> <b>Assim surge o Espaço La Vie.</b>";
let about_us_img = '<img id="img_01" class="img_01" src="./assets/img/quem-sou-elisiane.png" />';

let our_store_title = "Nossa Loja";
let our_store_text = "A <b>Terapia Quântica Integrativa</b> é o resultado da junção do conjunto de práticas e técnicas com foco nos cuidados com a saúde, considerando essa como “um estado de completo bem-estar físico, mental e social e não apenas a ausência de doença”(OMS, 1947). <br><br> O conceito de <b>Terapia Quântica Integrativa</b> representa uma perspectiva ampliada da relação entre terapeuta e cliente, visando promover uma vida com bem-estar e equilíbrio, conduzindo o indivíduo na Jornada de autoconhecimento, reduzindo ou eliminando as dificuldades existentes, ressignificando e instrumentalizando o indivíduo para que possa lidar com maior parcimônia na resolução de seus problemas físicos, mentais e emocionais. O objetivo é trabalhar o estado do 'ser', permitindo a melhora do equilíbrio entre corpo, mente e espírito, proporcionar equilíbrio e ampliação da qualidade de vida. <br><br> A <b>Terapia Quântica Integrativa</b> traz na sua essência uma visão holística que integra o corpo, as emoções e a alma da pessoa, ou seja, oferece uma visão mais ampla do ser humano nas áreas da vida.<br><br><br> <b>Agende uma sessão!</b> ";

let donate_title = "Doações";
let donate_text = "O que é tarot? <br><br> O Tarot é um jogo de 78 cartas, dividido entre 22 arcanos maiores e 56 arcanos menores. Em seu nível mais simples, o Tarot é uma variedade de símbolos arquetípicos.<br><br> O poder do Tarot é a sua capacidade de guia-la, desenvolver a sua intuição, saber o que você quer da vida e direcioná-la no caminho apontado.<br><br> Através da sincronicidade, as cartas revelam a energia a sua volta, ao mesmo tempo que trazem para fora fatos ou informações que você desconhece.<br><br> O Tarot é como um espelho, refletindo uma imagem de si mesmo no momento em que você olha pra ele.<br><br> Ele traz a tona suas esperanças e medos e aponta direções para concretiza-los ou não. Quer conhecer um pouco mais sobre o Tarot?<br><br> <b>Agende sua consulta!</b> <br><br> Ficaremos muito felizes em lhe apresentar essa maravilhosa ferramenta de autoconhecimento.<br><br> Fonte: BARTLETT, S. A Biblia do Tarot. 2021.";

let castration_title = "Castração";
let castration_text = "O que são os Oráculos? <br><br> Os Oráculos são instrumentos de leitura energética, servindo como mediadores entre as mensagens que você necessita e seu eu de hoje. <br><br> Eles transmitem aprendizados e sentimentos que podem ser utilizados como guias para entender situações e dar um direcionamento sobre qual melhor caminho seguir. <br><br> Até mesmo, para colocar em evidência algo que você precisa aprender, mas não imaginava a importância. <br><br> Oráculos funcionam tendo como base influências energéticas para que, ao fazer uma consulta, você receba uma mensagem que esteia conectada com a sua própria energia naquele momento. <br><br> Os Oráculos auxiliam na promoção de autoconhecimento e nos auxiliam no processo terapêutico, revelando o que precisa tomar conhecimento e trabalhar dentro de si naquele momento. <br><br> Eles te apresentam a mensagem que seu próprio coração almeja que seja transmitida. Os Oráculos revelam seu modo de ser e estar no mundo e apontam caminhos, os quais são escolhas que devemos ou não seguir. <br><br> Quer conhecer um pouco mais sobre os Oráculos? <br><br> <b>Agende sua consulta! </b> <br><br> Ficaremos muito felizes em lhes apresentar essa maravilhosa ferramenta de autoconhecimento.";

let whatsapp_title = "Contato - Elisiane (WhatsApp)";
let instagram_title = "Contato - Elisiane (Instagram)";

let copyright = "Website developed by / Site Desenvolvido por Davi Brinhosa ©2022";

document.getElementById("main_title").innerHTML = `${main_title}`;
document.getElementById("about_us_title").innerHTML = `${about_us_title}`;
document.getElementById("about_us_text").innerHTML = `${about_us_text}`;
document.getElementById("about_us_img").innerHTML = `${about_us_img}`;
document.getElementById("our_store_title").innerHTML = `${our_store_title}`;
document.getElementById("our_store_text").innerHTML = `${our_store_text}`;
document.getElementById("donate_title").innerHTML = `${donate_title}`;
document.getElementById("donate_text").innerHTML = `${donate_text}`;
document.getElementById("castration_title").innerHTML = `${castration_title}`;
document.getElementById("castration_text").innerHTML = `${castration_text}`;
document.getElementById("whatsapp_title").innerHTML = `${whatsapp_title}`;
document.getElementById("instagram_title").innerHTML = `${instagram_title}`;
document.getElementById("copyright").innerHTML = `${copyright}`;

document.getElementById("whatsapp_button").onclick  = function() {
    window.open('https://wa.me/554891178383','_blank');
}

document.getElementById("instagram_button").onclick  = function() {
    window.open('https://www.instagram.com/lar_dos_gateados/','_blank');
}