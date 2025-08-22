import { IProject } from "../interfaces/project.interface";

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
        images: [
            'images/projects/vivadoracao/1.png',
            'images/projects/vivadoracao/2.png',
            'images/projects/vivadoracao/3.png',
            'images/projects/vivadoracao/4.png',
            'images/projects/vivadoracao/5.png',
            'images/projects/vivadoracao/6.png',
            'images/projects/vivadoracao/7.png',
            'images/projects/vivadoracao/8.png',
            'images/projects/vivadoracao/9.png',
            'images/projects/vivadoracao/10.png',
            'images/projects/vivadoracao/11.png',
            'images/projects/vivadoracao/12.png',
            'images/projects/vivadoracao/13.png',
            'images/projects/vivadoracao/14.png',
            'images/projects/vivadoracao/15.png',
            'images/projects/vivadoracao/16.png',
            'images/projects/vivadoracao/17.png'
        ],
        liveProject: 'https://vivadoracao.com.br'
    },
    {
        title: 'Carteira Digital',
        type: 'webapplication',
        technologies: ['react', 'nestjs', 'html', 'css', 'javascript', 'prisma'],
        cardImage: 'images/projects/carteira-digital/4.png',
        description: `Controle financeiro de entradas e saídas, com um layout elegante, gráficos informativos e 
        dois temas de cores. Inclui autenticação, sistemas CRUD e responsividade.`,
        images: [
            'images/projects/carteira-digital/1.png',
            'images/projects/carteira-digital/2.png',
            'images/projects/carteira-digital/3.png',
            'images/projects/carteira-digital/4.png',
            'images/projects/carteira-digital/5.png',
            'images/projects/carteira-digital/6.png',
            'images/projects/carteira-digital/7.png',
            'images/projects/carteira-digital/8.png',
            'images/projects/carteira-digital/9.png',
            'images/projects/carteira-digital/10.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/carteira-digital'
    },
    {
        title: 'Espaço Lírio Visitas',
        type: 'webapplication',
        technologies: ['php', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'],
        cardImage: 'images/projects/espaco-lirio-visitas/1.png',
        description: `Aplicação que tem a finalidade de gerenciar visitas, eventos e gerar contratos automatizados 
        do "Espaço Lírio Eventos". Inclui autenticação, sistemas CRUD e responsividade, além de assinatura digital.`,
        images: [
            'images/projects/espaco-lirio-visitas/1.png',
            'images/projects/espaco-lirio-visitas/2.png',
            'images/projects/espaco-lirio-visitas/3.png',
            'images/projects/espaco-lirio-visitas/4.png',
            'images/projects/espaco-lirio-visitas/5.png',
            'images/projects/espaco-lirio-visitas/6.png',
            'images/projects/espaco-lirio-visitas/7.png',
            'images/projects/espaco-lirio-visitas/8.png',
            'images/projects/espaco-lirio-visitas/9.png',
            'images/projects/espaco-lirio-visitas/10.png'
        ]
    },
    {
        title: 'Smart House Aluguéis',
        type: 'webapplication',
        technologies: ['php', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'],
        cardImage: 'images/projects/smart-houses-alugueis/1.png',
        description: `Aplicação que tem a finalidade de gerenciar aluguéis, faturas e pagamentos, além de gerar 
        contratos automatizados das casas de aluguel do "Smart Houses". Inclui autenticação, sistemas CRUD e 
        responsividade, além de assinatura digital.`,
        images: [
            'images/projects/smart-houses-alugueis/1.png',
            'images/projects/smart-houses-alugueis/2.png',
            'images/projects/smart-houses-alugueis/3.png',
            'images/projects/smart-houses-alugueis/4.png',
            'images/projects/smart-houses-alugueis/5.png',
            'images/projects/smart-houses-alugueis/6.png'
        ]
    },
    {
        title: 'API da Bíblia',
        type: 'api',
        technologies: ['laravel', 'php', 'html', 'css', 'mysql'],
        cardImage: 'images/projects/bible-api/0.png',
        description: `API da Bíblia onde é possível extrair passagens bíblicas em diferentes versões, além de 
        apresentar dois planos diferentes de leitura bíblica anual. É de fácil integração com outros sistemas.`,
        images: [
            'images/projects/bible-api/1.png',
            'images/projects/bible-api/2.png',
            'images/projects/bible-api/3.png',
            'images/projects/bible-api/4.png',
            'images/projects/bible-api/5.png',
            'images/projects/bible-api/6.png',
            'images/projects/bible-api/7.png',
            'images/projects/bible-api/8.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/bible-api'
    },
    {
        title: 'IPPV',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/ippv/0.png',
        description: `Site institucional da empresa de treinamentos "Instituto Princípios Para Viver". 
        Inclui informações da empresa, como seus serviços, trainers e eventos, além de responsividade.`,
        images: [
            'images/projects/ippv/1.png',
            'images/projects/ippv/2.png',
            'images/projects/ippv/3.png',
            'images/projects/ippv/4.png',
            'images/projects/ippv/5.png'
        ],
        liveProject: 'https://ippv.com.br'
    },
    {
        title: 'IPPV Coach',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/ippv-coach/0.png',
        description: `Site de coaching da empresa "Instituto Princípios Para Viver". Inclui informações dos 
        treinamentos, trainers e eventos, além de um blog com posts da Harvard Business Review. Site responsivo.`,
        images: [
            'images/projects/ippv-coach/1.png',
            'images/projects/ippv-coach/2.png',
            'images/projects/ippv-coach/3.png',
            'images/projects/ippv-coach/4.png',
            'images/projects/ippv-coach/5.png',
            'images/projects/ippv-coach/6.png',
        ],
        liveProject: 'https://ippv.com.br/coach'
    },
    {
        title: 'IPPV Master',
        type: 'website',
        technologies: ['wordpress', 'php', 'html', 'css', 'javascript', 'mysql'],
        cardImage: 'images/projects/ippv-master/0.png',
        description: `Site da masterclass da empresa "Instituto Princípios Para Viver". Inclui informações sobre a 
        masterclass, trainers e localização. Site responsivo.`,
        images: [
            'images/projects/ippv-master/1.png',
            'images/projects/ippv-master/2.png',
            'images/projects/ippv-master/3.png'
        ],
        liveProject: 'https://ippv.com.br/master'
    },
    {
        title: 'Teste das Cinco Linguagens do Amor',
        type: 'webapplication',
        technologies: ['laravel', 'php', 'html', 'css', 'javascript', 'mysql', 'bootstrap'],
        cardImage: 'images/projects/teste-cinco-linguagens/0.png',
        description: `Aplicação com a finalidade de descobrir as linguagens do amor predominantes de um indivíduo. 
        Inclui autenticação, sistemas CRUD  e responsividade.`,
        images: [
            'images/projects/teste-cinco-linguagens/1.png',
            'images/projects/teste-cinco-linguagens/2.png',
            'images/projects/teste-cinco-linguagens/3.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/teste-cinco-linguagens'
    },
    {
        title: 'Teste de Inteligência Espiritual',
        type: 'webapplication',
        technologies: ['laravel', 'php', 'html', 'css', 'javascript', 'mysql', 'bootstrap'],
        cardImage: 'images/projects/teste-inteligencia-espiritual/0.png',
        description: `Aplicação com a finalidade de descobrir o nível de inteligência espiritual de um indivíduo. 
        Inclui autenticação, sistemas CRUD  e responsividade.`,
        images: [
            'images/projects/teste-inteligencia-espiritual/1.png',
            'images/projects/teste-inteligencia-espiritual/2.png',
            'images/projects/teste-inteligencia-espiritual/3.png'
        ],
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
        images: [
            'images/projects/koji-split/1.png',
            'images/projects/koji-split/2.png',
            'images/projects/koji-split/3.png',
            'images/projects/koji-split/4.png',
            'images/projects/koji-split/5.png',
            'images/projects/koji-split/6.png',
            'images/projects/koji-split/7.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/koji-split'
    },
    {
        title: 'Jogo da Memória',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/memory-game/2.png',
        description: `Jogo da memória com três dificuldades, cálculo de pontuação e ranking local. Inclui 
        responsividade.`,
        images: [
            'images/projects/memory-game/1.png',
            'images/projects/memory-game/2.png',
            'images/projects/memory-game/3.png',
            'images/projects/memory-game/4.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/memory-game'
    },
    {
        title: 'Calculadora Científica',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/calculadora-cientifica/0.png',
        description: `Uma calculadora científica simples. Além das operações e expressões matemáticas, possui funções 
        como seno, cosseno, tangente e logatírmo.`,
        images: [
            'images/projects/calculadora-cientifica/1.png',
            'images/projects/calculadora-cientifica/2.png',
            'images/projects/calculadora-cientifica/3.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/calculadora-cientifica'
    },
    {
        title: 'PS1 Input Viewer',
        type: 'webapplication',
        technologies: ['html', 'css', 'javascript'],
        cardImage: 'images/projects/ps1-input-viewer/1.png',
        description: `Um visualizador de inputs de um controle de PS1. Útil para gravar detonados, 
        speedruns ou tutoriais de jogos de PS1.`,
        images: [
            'images/projects/ps1-input-viewer/1.png',
            'images/projects/ps1-input-viewer/2.png'
        ],
        repositoryUrl: 'https://github.com/NatanaelNogueira144/ps1-input-viewer'
    }
] as IProject[];

export default projects;