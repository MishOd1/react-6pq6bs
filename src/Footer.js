import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles.js";
import './Fotter.css'
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        Reach To Us
      </h1>
      <Container className="Whole">
        <Row>
          <Column>
            <Heading>About Us</Heading>
          </Column>
          
          <Column>
            <Heading>Services</Heading>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>

          </Column>
          <Column>
            <Heading>Social Media</Heading>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;