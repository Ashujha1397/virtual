// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 


const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
  cursor:pointer;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Navbar = () => {
  return (
    
      <Section>
        <Container>
          <Links>
            <Logo src="./img/Tech.png" />
            <List>
              
             
            </List>
          </Links>
          <Icons>
            {/* Changed the image due to copyright problems */}
            
          <Link to="/chat">
            <Button>Chat Bot</Button>
          </Link>
          <Link to="/voice">
            <Button>Voice🎙️</Button>
          </Link>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
