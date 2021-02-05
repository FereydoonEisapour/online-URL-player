import React from 'react'
import { Navbar } from 'react-bootstrap'
function Header() {
    return (
        <>
            <Navbar style={{ background: "#6f42c1" }} className="d-flex justify-content-center " variant="dark">
                <Navbar.Brand href="#home" className="display-1">
                    <h1> React Video Player</h1>
                </Navbar.Brand>
            </Navbar>
        </>
    )
}

export default Header
