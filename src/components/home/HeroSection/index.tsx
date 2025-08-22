import { Banner, Container } from "./styles";

export default function HeroSection() {
    return (
        <Container id="hero">
            <Banner src="images/banner.png" alt="Banner" />
        </Container>
    );
}