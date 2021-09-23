import React from 'react'
import { useLocation } from "react-router-dom";
import './Menu.css'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import { HomeOutlined, FileOutlined, UserOutlined, VerticalLeftOutlined } from '@ant-design/icons';

export const Menu = () => {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>FeMASS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/home" className={splitLocation[1] === "" ? "active" : ""}>
                                <HomeOutlined />
                                <span>Página Inicial</span>
                            </Nav.Link>
                            
                            <NavDropdown 
                                title={ <span> <FileOutlined /> <span>Vida Acadêmica</span> </span> } 
                                id="collasible-nav-dropdown"
                                className={splitLocation[1] === "" ? "active" : ""}
                                >

                                <NavDropdown.Item href="/VidaAcademica/FazerMatricula">Fazer Matrícula</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Horario">Consultar Horário</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Boletim">Consultar Boletim</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Historico">Consultar Histórico</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/ConsultarACG">Consultar ACG</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/CancelarInscricao">Cancelar Inscrição</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/VidaAcademica/ResponderCPA">Responder CPA</NavDropdown.Item>
                            </NavDropdown>
                            
                            <NavDropdown 
                                title={ <span> <UserOutlined /> <span>Conta</span> </span> } 
                                id="collasible-nav-dropdown"
                                className={splitLocation[1] === "" ? "active" : ""}
                                >

                                <NavDropdown.Item href="/conta/AtualizarCadastro">Atualizar Cadastro</NavDropdown.Item>
                                <NavDropdown.Item href="/conta/AlterarSenha">Alterar Senha</NavDropdown.Item>
                            </NavDropdown>
                            
                        </Nav>

                        <Nav>
                            <Nav.Link href="/login" className="text-white">
                                <span>Sair</span>
                                <VerticalLeftOutlined />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
