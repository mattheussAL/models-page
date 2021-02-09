import styled from 'styled-components';

export const LeftBar = styled.div`
 position: absolute;

 width: 7.2rem;
 height: 100vh;

 background: #0D1218;
 border-right: 1px solid rgba(255,255,255, 0.2);

 display: flex;
 align-items: flex-end;
 flex-direction: column;
 justify-content: space-between;
`;

export const Menu = styled.div`
 position: relative;

 width: 60px;
 height: 60px;

 color: #FFFF;
 background: #2F458F;

 display: flex;
 align-items: center;
 justify-content: center;

 cursor: pointer;

 transition: all .2s ease;

 svg { font-size: 2.8rem }

 &:hover { background: #2F458F99 }
`;

export const SocialIcons = styled.div`
 position: relative;

 width: 70px;
 height: 150px;

 color: rgba(255,255,255, .2);

 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;

 svg {
  margin-top: 1rem;

  cursor: pointer;
  transition: all .2s ease;

  &:hover {
   color: #2F558F;
   transform: scale(1.1);
  }
 }

`;
