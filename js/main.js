function MudaDesenho() {
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const textoo = document.querySelector("p");

    if (valor == "gemeos" || valor == "gêmeos") {
        texto.innerHTML = "Gêmeos";
        imagem.setAttribute("src","img/gemeos.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = " Parabéns!!Você é o cavaleiro de gêmeos: Gêmeos é é um poderoso cavaleiro de ouro, sendo considerado como o mais poderoso dentre os doze cavaleiros de ouro, ele era um exemplo de conduta e comprometimento para com sua deusa Athena. O cavaleiro de gêmeos possuía um irmão gêmeo chamado Kanon, que propôs que eles matassem Athena e comandassem o mundo.";
    
    }

    else if (valor == "escorpiao" || valor == "escorpião") {
        texto.innerHTML = "Escorpião";
        imagem.setAttribute("src", "img/escorpiao.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de escorpião: De personalidade por vezes altiva, porem nobre e justo. Durante a caçada aos Cavaleiros de Bronze influenciado pelo Grande Mestre, o Cavaleiro de Escorpião destruíu a Ilha de Andrômeda acreditando que seus habitantes haviam se rebelado contra o Santuário.";
    }

    else if (valor == "peixes") {
        texto.innerHTML = "Peixes";
        imagem.setAttribute("src", "img/peixes.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de peixes: Pisces Aphrodite (Afrodite de Peixes), é o Cavaleiro de Ouro de Peixes e protetor da última Casa do Zodíaco do século XX. É um poderoso Cavaleiro capaz de gerar e manipular rosas. É um dos Cavaleiros mais poderosos do exército de Atena.";
    }
    else if (valor == "aries" || valor == "áries") {
        texto.innerHTML = "Áries";
        imagem.setAttribute("src", "img/aries.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de áries: Em Alma de Ouro, Mu é o Cavaleiro de Ouro de Áries do século XX, que protege a Casa de Áries no Santuário. Hábil na restauração de Armaduras, é ele quem conserta as Armaduras de Bronze do Seiya e dos outros antes da Batalha das Doze Casas do Zodíaco." ;
    }
    else if (valor == "aquario" || valor == "aquário") {
        texto.innerHTML = "Aquário";
        imagem.setAttribute("src", "img/aquario.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de aquário: É o Cavaleiro de Ouro que protege a Casa de Aquário no Santuário. No mangá, treinou o pequeno Hyoga e Isaak durante seis anos nas geladas terras do leste da Sibéria. foi obrigado a lutar contra Hyoga no Santuário.";

    }
    else if (valor == "leao" || valor == "leão") {
        texto.innerHTML = "Leão";
        imagem.setAttribute("src", "img/leao.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de leão: Cavaleiro de Ouro honrado e orgulhoso, que possui as presas do rei das feras. Seu elemento é o Trovão e ele defende a destruição da Terra ao lado de seu líder.";
    }
    else if (valor == "touro") {
        texto.innerHTML = "Touro";
        imagem.setAttribute("src", "img/touro.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de touto: Aldebaran  é o Cavaleiro de Ouro da Constelação de Touro durante os eventos do Século XX, servindo como o guardião da Casa de Touro no Santuário. Dotado de uma resistência fora do comum, também tem uma grande força física e uma agilidade impressionante para alguém de seu porte. ";

    }
    else if (valor == "libra") {
        texto.innerHTML = "Libra";
        imagem.setAttribute("src", "img/libra.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML = "Parabéns!!Você é o cavaleiro de libra: O aparentemente inofensivo Mestre Ancião nada mais é do que Dohko, o cavaleiro de Libra. Absurdamente poderoso e responsável, o mentor de Shiryu encantou os fãs tanto na forma como o conhecemos, já velhinho e supostamente frágil, quanto atuando no campo de batalha durante a saga de Hades.";
    }
    else if (valor == "sagitario" || valor == "sagitário") {
        texto.innerHTML = "Sagitário";
        imagem.setAttribute("src", "img/sagitario.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML ="Parabéns!!Você é o cavaleiro de sagitário: Aiolos de Sagitário é a encarnação de dois conceitos fundamentais para a história de Cavaleiros do Zodíaco: lealdade e determinação. Mesmo gravemente ferido, o Cavaleiro de Sagitário se esforça ao máximo para salvar a bebê Atena do Mestre do Santuário, sendo atacado por muitos de seus colegas no processo.";
        
    }
    else if (valor == "virgem") {
        texto.innerHTML = "Virgem";
        imagem.setAttribute("src", "img/virgem.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML ="Parabéns!!Você é o cavaleiro de virgem: Considerado como a reencarnação de Buda, possui um poder de observação que permite conhecer a verdade escondida sob as aparências. O poder de ir e vir no tempo e espaço impressiona até outros Cavaleiros de Ouro.";
    }
    else if (valor == "cancer" || valor == "câncer") {
        texto.innerHTML = "Câncer";
        imagem.setAttribute("src", "img/cancer.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML ="Parabéns!!Você é o cavaleiro de câncer: Máscara da Morte é o mais astuto e cruel Cavaleiro de Ouro entre os Cavaleiros de Ouro do Zodíaco. Sua constelação é Câncer, e ele era originalmente o guardião do Templo de mesmo nome, protegendo o caminho para a Câmara Pontifícia e a Estátua de Atenas junto com os outros onze Cavaleiros de Ouro.";

    }
    else if (valor == "capricornio" || valor == "capricórnio") {
        texto.innerHTML = "Capricórnio";
        imagem.setAttribute("src", "img/capricornio.png");
        imagem.setAttribute("width", "300px");
        textoo.innerHTML ="Parabéns!!Você é o cavaleiro de capricórnio: Shura de Capricórnio é o Cavaleiro de Ouro que protege a décima casa do Santuário, a Casa de Capricórnio; é o cavaleiro que carrega o poder da espada Excalibur em seu braço direito. Ele é um dos principais personagens de Saint Seiya, sendo um Cavaleiro de Ouro e se considerando o cavaleiro mais fiel à deusa Atena.";
    }

    else {
        texto.innerHTML = "Cavaleiro não encontrado... =(";
        imagem.setAttribute("src", "img/nãoencontrado.jpg");
        imagem.setAttribute("width", "400");
    }
}