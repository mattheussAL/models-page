import styled from 'styled-components';

export const Nav = styled.nav`
 width: 100%;
 height: 60px;

 display: flex;
 align-items:center;
 justify-content: space-between;
`;

export const Logo = styled.h1`
 font-size: 2.2rem;
 font-weight: 300;

 margin-left: 1rem;
 color: #F4FBF8;

 cursor: pointer;
`;

export const Routes = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

 color: rgba(255, 255, 255, .5);
 ul {
  display: flex;

  li {
   font-size: 1.4rem;
   list-style:none;
   margin-right: 32px;
   cursor: pointer;

   transition: all .3s ease;

   &:hover {
    transform: scale(1.1);
    color: rgba(255,255,255, .6);
   }
  }
 }
`;

export const Icons = styled.div`
 width: 200px;

 svg {
  font-size: 2rem;
  margin-right: 32px;
  cursor: pointer;

  transition: all .2s ease-in;

  &:hover {
   transform: scale(1.1);
   color: #2F458F;
  }
 }
`;

