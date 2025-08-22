import IconEmail from "../components/icons/IconEmail";
import IconGithub from "../components/icons/IconGithub";
import IconInstagram from "../components/icons/IconInstagram";
import IconLinkedin from "../components/icons/IconLinkedin";
import IconWhatsApp from "../components/icons/IconWhatsApp";
import IconYoutube from "../components/icons/IconYoutube";
import { ISocial } from "../interfaces/social.interface";

const socials = [
    {
        title: 'Email',
        url: 'mailto:natanael.nogueira144@gmail.com',
        hoverColor: 'orange',
        icon: IconEmail
    },
    {
        title: 'GitHub',
        url: 'https://github.com/NatanaelNogueira144',
        hoverColor: 'black',
        icon: IconGithub
    },
    {
        title: 'Instagram',
        url: 'https://www.instagram.com/natanael.nogueira144',
        hoverColor: '#E1306C',
        icon: IconInstagram
    },
    {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/natanael-nogueira-714327320/',
        hoverColor: '#0A66C2',
        icon: IconLinkedin
    },
    {
        title: 'WhatsApp',
        url: 'https://whatsa.me/5511943416538',
        hoverColor: '#25D366',
        icon: IconWhatsApp
    },
    {
        title: 'YouTube',
        url: 'https://www.youtube.com/@NatanaelNogueira144',
        hoverColor: 'red',
        icon: IconYoutube
    }
] as ISocial[];

export default socials;