import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container=styled.div`
  display:flex;
  background: linear-gradient(to right, #232526, #414345);
  color:white;
  ${mobile({ flexDirection: "column" } )}
`;
const Left=styled.div`
  flex:1;
  display: flex;
  flex-direction:column;
  padding: 20px;
`;

const Logo=styled.h1``;

const Desc=styled.p`
  margin:20px 0px;

`;

const SocialContainer=styled.div`
  display:flex;
`;

const SocialIcon=styled.div`
  width: 40px;
  height:40px;
  border-radius: 50%;
  color:white;
  background-color: #${props=>props.color};
  display: flex;
  align-items: center;
  justify-content:center;
  margin-right:20px;  
`;

const Center=styled.div`
  flex:1;
  padding:20px;
  ${mobile({ display:"none" } )}
`;

const Title=styled.h3`
  margin-bottom:30px;

`;

const List=styled.ul`
  margin:0;
  padding:0;
  list-style: none;
  display: flex;
  flex-wrap:wrap;
`;

const ListItem=styled.li`
  width:50%;
  margin-bottom:10px;
`;

const Right=styled.div`
  flex:1;
  padding:20px;
  ${mobile({ backgroundColor: "#fff8f8" } )}
`;

const ContactItem=styled.div`
  margin-bottom:20px;
  display:flex;
  align-items:center;
`;
 
const Payment=styled.img`
  width:100%;

`;
const Footer=()=>{
  return (
    <Container>
      <Left>
        <Logo>VIBE-Lane</Logo>
        <Desc>
        The one and only site where you can explore different varities , categories of products and make it yours. 
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook/>
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram/>
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter/>
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>

        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Women Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <Room style={{marginRight:"10px"}}/>
          11/GT Road, New Delhi-220214
        </ContactItem>
        <ContactItem> <Phone style={{marginRight:"10px"}}/>
          +919569646737
        </ContactItem>
        <ContactItem> <MailOutline style={{marginRight:"10px"}}/>
          vibelane-team@gmail.com
        </ContactItem>
        <Payment src="data:image/png;base64,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"/>
      </Right>
    </Container>
  );
};
export default Footer;
