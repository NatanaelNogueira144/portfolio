import AboutMeSection from "../../components/home/AboutMeSection";
import ContactSection from "../../components/home/ContactSection";
import ExperiencesSection from "../../components/home/ExperiencesSection";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import HeroSection from "../../components/home/HeroSection";
import Modal from "../../components/shared/Modal";
import ProjectDetails from "../../components/shared/ProjectDetails";
import ProjectsSection from "../../components/home/ProjectsSection";
import ServiceDetails from "../../components/shared/ServiceDetails";
import ServicesSection from "../../components/home/ServicesSection";
import about from "../../data/about";
import contacts from "../../data/contacts";
import experiences from "../../data/experiences";
import headerItems from "../../data/header-items";
import projects from "../../data/projects";
import services from "../../data/services";
import socials from "../../data/socials";
import { Container } from "./styles";
import { IProject } from "../../interfaces/project.interface";
import { IService } from "../../interfaces/service.interface";
import { useState } from "react";

export default function HomePage() {
    const [selectedProject, setSelectedProject] = useState(null as IProject|null);
    const [selectedService, setSelectedService] = useState(null as IService|null);
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container>
            <Header items={headerItems} />
            <HeroSection />
            <AboutMeSection about={about} projects={projects} services={services} />
            <ServicesSection 
                services={services} 
                onCardClick={(service) => {
                    setSelectedProject(null);
                    setSelectedService(service);
                    setModalOpen(true);
                }} 
            />
            <ExperiencesSection experiences={experiences} />
            <ProjectsSection 
                projects={projects} 
                onCardClick={(project) => {
                    setSelectedService(null);
                    setSelectedProject(project);
                    setModalOpen(true);
                }} 
            />
            <ContactSection contacts={contacts} />
            <Footer socials={socials} />
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                {selectedProject != null && <ProjectDetails project={selectedProject} />}
                {selectedService != null && <ServiceDetails service={selectedService} />}
            </Modal>
        </Container>
    );
}