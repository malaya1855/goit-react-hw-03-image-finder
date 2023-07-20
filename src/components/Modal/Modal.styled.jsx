import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 47, 66, 0.6);
  opacity: 1;
  transition: visibility var(--animetion-transition),
    opacity var(--animetion-transition);
`;

export const ModalImage = styled.div`
  background: #ffffff;
  border-radius: 0.5em;
  box-shadow: 0 10px 20px rgba(black, 0.2);
  left: 50%;
  max-width: 90%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30em;
  text-align: left;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;
