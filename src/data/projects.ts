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