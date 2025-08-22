import IconEmail from "../components/icons/IconEmail";
import IconLinkedin from "../components/icons/IconLinkedin";
import IconWhatsApp from "../components/icons/IconWhatsApp";
import { IContact } from "../interfaces/contact.interface";

const contacts = [
    {
        title: 'E-mail',
        subtitle: 'natanael.nogueira144@gmail.com',
        url: 'mailto:natanael.nogueira144@gmail.com',
        icon: IconEmail,
        iconColor: 'orange'
    },
    {
        title: 'WhatsApp',
        subtitle: '+55 (11) 94341-6538',
        url: 'https://whatsa.me/5511943416538',
        icon: IconWhatsApp,
        iconColor: '#25D366'
    },
    {
        title: 'LinkedIn',
        subtitle: 'Natanael Nogueira',
        url: 'https://www.linkedin.com/in/natanael-nogueira-714327320/',
        icon: IconLinkedin,
        iconColor: '#0A66C2'
    }
] as IContact[];

export default contacts;