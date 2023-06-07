import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Logout from "../Auth/Logout";
import ThemeToggle from "./themeToggle";
import { useSelector } from "react-redux";

export default function TheNav(props) {
  const isPremium = useSelector((state) => state.expense.premieum);
  return (
    <div style={{ backgroundColor: props.darkMode ? "#333" : "#f8f9fa" }}>
      <Navbar
        expand="md"
        variant="light"
        style={{ borderBottom: "1px solid #dee2e6" }}
      >
        <Container style={{ color: props.darkMode ? "#f8f9fa" : "#6c757d" }}>
          <Navbar.Brand
            href="/welcome"
            style={{
              fontWeight: "bold",
              color: props.darkMode ? "#f8f9fa" : "#6c757d",
            }}
          >
            Expense Tracker
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/profile"
                style={{
                  fontWeight: "bold",
                  color: props.darkMode ? "#f8f9fa" : "#6c757d",
                }}
              >
                Profile Page
              </Nav.Link>
              <Nav.Link
                href="/verify"
                style={{
                  fontWeight: "bold",
                  color: props.darkMode ? "#f8f9fa" : "#6c757d",
                }}
              >
                Verify Email
              </Nav.Link>
              <Nav.Link
                href="/dailyexp"
                style={{
                  fontWeight: "bold",
                  color: props.darkMode ? "#f8f9fa" : "#6c757d",
                }}
              >
                Daily Expenses
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#" style={{ fontWeight: "bold" }}>
                <Logout />
              </Nav.Link>
              {isPremium && (
                <Nav.Link href="#" style={{ fontWeight: "bold" }}>
                  <ThemeToggle />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
