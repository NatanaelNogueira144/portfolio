import { IExperience } from "../interfaces/experience.interface";

const experiences = [
    {
        company: 'Instituto Princípios Para Viver',
        role: 'Desenvolvedor Full Stack',
        location: 'São Paulo, Brasil',
        workingDay: 'Meio Período',
        format: 'Híbrido',
        start: new Date(2019, 2),
        end: new Date(2022, 1),
        description: 'Responsável pelo desenvolvimento de aplicações web completas, manutenção de sites em WordPress e tradução de artigos para os sites e redes sociais da empresa.'
    },
    {
        company: 'Smart Houses',
        role: 'Desenvolvedor Full Stack',
        location: 'São Paulo, Brasil',
        workingDay: 'Integral',
        format: 'Híbrido',
        start: new Date(2022, 1),
        end: new Date(2024, 1),
        description: 'Responsável pelo desenvolvimento de aplicações web completas, desenvolvimento de sites em WordPress e manutenção de bancos de dados SQL.'
    },
    {
        company: 'Home Office',
        role: 'Desenvolvedor Full Stack',
        location: 'São Paulo, Brasil',
        workingDay: 'Integral',
        format: 'Remoto',
        start: new Date(2024, 2),
        end: new Date(),
        description: 'Venho trabalhando em projetos pessoais, buscando estudar e aprimorar minhas habilidades, até que surja uma oportunidade no mercado de trabalho.'
    }
] as IExperience[];

export default experiences;