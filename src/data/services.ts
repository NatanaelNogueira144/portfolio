import IconWeb from "../components/icons/IconWeb";
import IconWebApplication from "../components/icons/IconWebApplication";
import projects from "./projects";
import { IService } from "../interfaces/service.interface";

function getServiceImages(id: string) {
    return projects
        .filter((p) => p.type === id)
        .map(p => p.images)
        .reduce((acc, curr) => acc.concat(curr), [])
        .slice(0, 24);
}

const services = [
    {
        id: 'website',
        title: 'Websites',
        description: `Sites institucionais, landing pages, lojas virtuais e portfólios, desenvolvidos de acordo com 
        o gosto do cliente. Sites responsivos, modernos e interativos, com foco na experiência do usuário.`,
        icon: IconWeb,
        color: '#7CB46B',
        images: getServiceImages('website'),
        cardImage: 'images/services/website.png',
        projectsCount: 10
    },
    {
        id: 'webapplication',
        title: 'Aplicações Web',
        description: `Controle de estoque, gestão do negócio, automatização de processos e relatórios informativos, 
        personalizados conforme a regra de negócio. Aplicações responsivas, inteligentes e com foco na experiência 
        do usuário.`,
        icon: IconWebApplication,
        color: '#4682B4',
        images: getServiceImages('webapplication'),
        cardImage: 'images/services/webapplication.png',
        projectsCount: 15
    },
    {
        id: 'api',
        title: 'APIs',
        description: `Back-end de aplicações e APIs REST, de fácil integração com outros sistemas. São valorizadas as 
        boas práticas de programação, segurança das informações e foco em performance.`,
        icon: IconWebApplication,
        color: '#606060',
        images: getServiceImages('api'),
        cardImage: 'images/services/api.png',
        projectsCount: 5
    }
] as IService[];

export default services;