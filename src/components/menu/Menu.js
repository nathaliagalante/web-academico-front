import React from 'react'
import './Menu.css'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'

export const Menu = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>FeMASS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link className="active" aria-current="page" href="/home">
                                <i className="bi bi-house"></i>
                                <span>Página Inicial</span>
                                </Nav.Link>
                            
                            <NavDropdown title="Vida Acadêmica" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/VidaAcademica/FazerMatricula">Fazer Matrícula</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Horario">Consultar Horário</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Boletim">Consultar Boletim</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/Historico">Consultar Histórico</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/CancelarInscricao">Cancelar Inscrição</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/ConsultarACG">Consultar ACG</NavDropdown.Item>
                                <NavDropdown.Item href="/VidaAcademica/ResponderCPA">Responder CPA</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Conta" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/conta/AtualizarCadastro">Atualizar Cadastro</NavDropdown.Item>
                                <NavDropdown.Item href="/conta/AlterarSenha">Alterar Senha</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav>
                            <Nav.Link href="/login" className="text-white">Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
