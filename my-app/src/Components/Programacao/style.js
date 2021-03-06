import styled from 'styled-components'


export const ElevateSlider= styled.div`
  position:relative; 
  z-index:100;
`;

export const Spike = styled.div`
  position: relative;
  background:white;
  height: 0vh;
  transform:rotate(180deg);
  z-index:-1;
  :before {
    content: '';
    position: absolute;
    right: 0;
    left: -0%;
    top: 100%;
    z-index: 0;
    display: block;
    height: 150px;

    background-size: 50px 100%;
    background-image: linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%);
    background-position: 0 0;
    
  }
`;

export const LoadingDiv = styled.div`
  border:2px solid red; 
  position:relative; 
  top:0vw;
  z-index:1;
  img{
    width:20vw;
    height:20vw;
  }
`;

export const SpikeReverse = styled.div`
  position: relative;
  background:white;
  height: 0vh;

z-index:-1;

   :before {
  content: '';
  position: absolute;
  right: 0;
  left: -0%;
  top: 100%;
  z-index: 0;
  display: block;
  height: 150px;

  background-size: 50px 100%;
  background-image: linear-gradient(135deg, white 25%, transparent 25%), linear-gradient(225deg, white 25%, transparent 25%);
  background-position: 0 0;

  
} 
`;


export const GenericSize = styled.div`
  width:100%; 
  height:auto;
  color:white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color:black; 
  padding:0px;
`;

export const Titulo=styled.h1`
  color: white;
  text-align: center;
  
  margin-bottom: 30px;
  font-size: 50px;
  font-family: var(--fontTitulo);
  @media (max-width: 500px){
    font-size: 40px;
  }
`;

export const Subtitulo=styled.h4`
  color: white;
  text-align: center;
  margin: 0;
  margin-bottom: 80px;
  font-size: 20px;
  font-family: var(--fontCorpo);
  @media (max-width: 500px){
    font-size: 16px;
    margin-bottom: 50px;
  }
`;


export const TituloProgramacao =styled.div`
  color: white;
  text-align: center;
margin-top:30px;
  margin-bottom: 80px;
  font-size: 50px;
  font-family: var(--fontTitulo);

  
`;



export const ArrowBaseLeft=styled.div`
  &::before{
    position: relative;
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    border-right: 0.3em solid #ccc;
    border-top: 0.3em solid #ccc;
    transform: rotate(225deg);
    @media (max-width: 380px){
      border-right: 0.2em solid #ccc;
      border-top: 0.2em solid #ccc;
      width: 0.8em;
      height: 0.8em;
    }
  }
`;

export const ArrowBaseRight=styled.div`
  &::before{
    position: relative;
    content: '';
    display: inline-block;
    width: 1em;
    height: 1em;
    border-right: 0.3em solid #ccc;
    border-top: 0.3em solid #ccc;
    transform: rotate(45deg);
    @media (max-width: 380px){
      border-right: 0.2em solid #ccc;
      border-top: 0.2em solid #ccc;
      width: 0.8em;
      height: 0.8em;
    }
  }
`;

export const Dots=styled.a`
  width: 100%;
  color: #ccc
`;