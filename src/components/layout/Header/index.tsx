import Logo from '../../shared/Logo';
import { Container, Item, Link, List, Navigation, ToggleButton } from './styles';
import { IHeaderItem } from '../../../interfaces/header-item.interface';
import { useState } from 'react';

interface HeaderProps {
    items: IHeaderItem[];
}

export default function Header({ items }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Container>
            <Logo />
            <ToggleButton onClick={() => setMenuOpen(!menuOpen)}>
                <span />
                <span />
                <span />
            </ToggleButton>
            <Navigation>
                <List opened={menuOpen}>
                    {items.map((item, key) => (
                        <Item key={key}>
                            <Link href={item.path} onClick={() => setMenuOpen(false)}>
                                {item.title}
                            </Link>
                        </Item>
                    ))}
                </List>
            </Navigation>
        </Container>
    );
}