import { IProject } from "../interfaces/project.interface";

function getProjectImages(dir: string, numberOfImages: number): string[] {
    let images: string[] = [];
    for (let i = 1; i <= numberOfImages; i++) {
        images.push(`images/projects/${dir}/${i}.png`);
    }
    return images;
}

const projects = [
    {
        title: 'Igreja Vivadoração',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/vivadoracao/0.png',
        description: `Site institucional da "Igreja Vivadoração". Possui informações sobre a estrutura da igreja, 
        além de informações sobre os eventos, ministérios e redes da igreja. Também inclui informações sobre a 
        membresia da igreja, além de formulários de inscrição para eventos, membresia e voluntariado. Site 
        responsivo.`,
        images: getProjectImages('vivadoracao', 17),
        liveProject: 'https://vivadoracao.com.br'
    },
    {
        title: 'Carteira Digital',
        type: 'webapplication',
        technologies: ['react', 'nestjs', 'html', 'css', 'javascript', 'prisma'],
        cardImage: 'images/projects/carteira-digital/4.png',
        description: `Controle financeiro de entradas e saídas, com um layout elegante, gráficos informativos e 
        dois temas de cores. Inclui autenticação, sistemas CRUD e responsividade.`,
        images: getProjectImages('carteira-digital', 10),
        repositoryUrl: 'https://github.com/NatanaelNogueira144/carteira-digital-frontend'
    },
    {
        title: 'Espaço Lírio Visitas',
        type: 'webapplication',
        technologies: ['php', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'],
        cardImage: 'images/projects/espaco-lirio-visitas/1.png',
        description: `Aplicação que tem a finalidade de gerenciar visitas, eventos e gerar contratos automatizados 
        do "Espaço Lírio Eventos". Inclui autenticação, sistemas CRUD e responsividade, além de assinatura digital.`,
        images: getProjectImages('espaco-lirio-visitas', 10)
    },
    {
        title: 'Smart House Aluguéis',
        type: 'webapplication',
        technologies: ['php', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'],
        cardImage: 'images/projects/smart-houses-alugueis/1.png',
        description: `Aplicação que tem a finalidade de gerenciar aluguéis, faturas e pagamentos, além de gerar 
        contratos automatizados das casas de aluguel do "Smart Houses". Inclui autenticação, sistemas CRUD e 
        responsividade, além de assinatura digital.`,
        images: getProjectImages('smart-houses-alugueis', 6)
    },
    {
        title: 'API da Bíblia',
        type: 'api',
        technologies: ['laravel', 'php', 'html', 'css', 'mysql'],
        cardImage: 'images/projects/bible-api/0.png',
        description: `API da Bíblia onde é possível extrair passagens bíblicas em diferentes versões, além de 
        apresentar dois planos diferentes de leitura bíblica anual. É de fácil integração com outros sistemas.`,
        images: getProjectImages('bible-api', 8),
        repositoryUrl: 'https://github.com/NatanaelNogueira144/bible-api'
    },
    {
        title: 'IPPV',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/ippv/0.png',
        description: `Site institucional da empresa de treinamentos "Instituto Princípios Para Viver". 
        Inclui informações da empresa, como seus serviços, trainers e eventos, além de responsividade.`,
        images: getProjectImages('ippv', 5),
        liveProject: 'https://ippv.com.br'
    },
    {
        title: 'IPPV Coach',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/ippv-coach/0.png',
        description: `Site de coaching da empresa "Instituto Princípios Para Viver". Inclui informações dos 
        treinamentos, trainers e eventos, além de um blog com posts da Harvard Business Review. Site responsivo.`,
        images: getProjectImages('ippv-coach', 6),
        liveProject: 'https://ippv.com.br/coach'
    },
    {
        title: 'IPPV Master',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/ippv-master/0.png',
        description: `Site da masterclass da empresa "Instituto Princípios Para Viver". Inclui informações sobre a 
        masterclass, trainers e localização. Site responsivo.`,
        images: getProjectImages('ippv-master', 3),
        liveProject: 'https://ippv.com.br/master'
    },
    {
        title: 'Teste das Cinco Linguagens do Amor',
        type: 'webapplication',
        technologies: ['laravel', 'php', 'html', 'css', 'javascript', 'mysql', 'bootstrap'],
        cardImage: 'images/projects/teste-cinco-linguagens/0.png',
        description: `Aplicação com a finalidade de descobrir as linguagens do amor predominantes de um indivíduo. 
        Inclui autenticação, sistemas CRUD  e responsividade.`,
        images: getProjectImages('teste-cinco-linguagens', 3),
        repositoryUrl: 'https://github.com/NatanaelNogueira144/teste-cinco-linguagens'
    },
    {
        title: 'Teste de Inteligência Espiritual',
        type: 'webapplication',
        technologies: ['laravel', 'php', 'html', 'css', 'javascript', 'mysql', 'bootstrap'],
        cardImage: 'images/projects/teste-inteligencia-espiritual/0.png',
        description: `Aplicação com a finalidade de descobrir o nível de inteligência espiritual de um indivíduo. 
        Inclui autenticação, sistemas CRUD e responsividade.`,
        images: getProjectImages('teste-inteligencia-espiritual', 3),
        repositoryUrl: 'https://github.com/NatanaelNogueira144/teste-inteligencia-espiritual'
    },
    {
        title: 'MIDI Viewer',
        type: 'webapplication',
        technologies: ['react', 'html', 'css', 'javascript'],
        cardImage: 'images/projects/midi-viewer/3.png',
        description: `Um visualizador de arquivos MIDI em um piano virtual. Funcionalidade similar ao "Synthesia".`,
        images: getProjectImages('midi-viewer', 7),
        liveProject: 'https://natanaelnogueira144.github.io/midi-viewer',
        repositoryUrl: 'https://github.com/NatanaelNogueira144/midi-viewer'
    },
    {
        title: 'KojiSplit',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/koji-split/0.png',
        description: `Um splitter para ser usado em speedrunning. Inclui responsividade e 
        funcionalidades como criar, editar e deletar categorias e segmentos, além de um cronômetro 
        e a possibilidade de pausar, reiniciar, voltar ou pular um segmento.`,
        images: getProjectImages('koji-split', 7),
        liveProject: 'https://natanaelnogueira144.github.io/koji-split',
        repositoryUrl: 'https://github.com/NatanaelNogueira144/koji-split'
    },
    {
        title: 'Jogo da Memória',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/jogo-da-memoria/2.png',
        description: `Jogo da memória com três dificuldades, cálculo de pontuação e ranking local. Inclui 
        responsividade.`,
        images: getProjectImages('jogo-da-memoria', 4),
        liveProject: 'https://natanaelnogueira144.github.io/jogo-da-memoria',
        repositoryUrl: 'https://github.com/NatanaelNogueira144/jogo-da-memoria'
    },
    {
        title: 'Calculadora Científica',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/calculadora-cientifica/0.png',
        description: `Uma calculadora científica simples. Além das operações e expressões matemáticas, possui funções 
        como seno, cosseno, tangente e logatírmo.`,
        images: getProjectImages('calculadora-cientifica', 3),
        liveProject: 'https://natanaelnogueira144.github.io/calculadora-cientifica',
        repositoryUrl: 'https://github.com/NatanaelNogueira144/calculadora-cientifica'
    },
    {
        title: 'PS1 Input Viewer',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/ps1-input-viewer/1.png',
        description: `Um visualizador de inputs de um controle de PS1. Útil para gravar detonados, 
        speedruns ou tutoriais de jogos de PS1.`,
        images: getProjectImages('ps1-input-viewer', 2),
        liveProject: 'https://natanaelnogueira144.github.io/ps1-input-viewer',
        repositoryUrl: 'https://github.com/NatanaelNogueira144/ps1-input-viewer'
    }
] as IProject[];

export default projects;