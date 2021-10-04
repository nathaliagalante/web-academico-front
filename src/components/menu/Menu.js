import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import './Menu.css'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import { Button } from 'antd';
import { HomeOutlined, FileOutlined, UserOutlined, VerticalLeftOutlined } from '@ant-design/icons';

export const Menu = () => {
    const [usuario] = useState([]);
    const[loading, setLoading] = useState(false);
    let history = useHistory();

    const handleLogout = () => {
        setTimeout(() => {
            setLoading(true);
            localStorage.removeItem('usuario', usuario);
            history.push("/");
        }, 2000);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>FeMASS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/home">
                                <HomeOutlined />
                                <span>Página Inicial</span>
                            </Nav.Link>
                            
                            <NavDropdown 
                                title={ <span> <FileOutlined /> <span>Vida Acadêmica</span> </span> } 
                                id="collasible-nav-dropdown"
                                >

                                <NavDropdown.Item href="/VidaAcademica/FazerMatricula">Fazer Matrícula</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Horario">Consultar Horário</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Boletim">Consultar Boletim</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Historico">Consultar Histórico</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/ConsultarACG">Consultar ACG</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/VidaAcademica/ResponderCPA">Responder CPA</NavDropdown.Item>
                            </NavDropdown>
                            
                            <NavDropdown 
                                title={ <span> <UserOutlined /> <span>Conta</span> </span> } 
                                id="collasible-nav-dropdown"
                                >

                                <NavDropdown.Item href="/conta/AtualizarCadastro">Atualizar Cadastro</NavDropdown.Item>
                                <NavDropdown.Item href="/conta/AlterarSenha">Alterar Senha</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>

                        <Nav>
                            <Button 
                            type="link" 
                            className="btn-menu" 
                            onClick={handleLogout}
                            loading={loading}
                            >
                                <span>Sair</span>
                                <VerticalLeftOutlined />
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
