import React from "react";
import styled from "styled-components";

export default function ProjectBox({id, img, title, text, action}) {
  const [userOption, setUserOption] = React.useState('');
   
  const selectHandler = (value) => {
    action(value);
    setUserOption(value);
  };
  return (
    <Wrapper key={id}>
      <ImgBtn className="aniamte pointer" style={{width:300,hieght:80}} onClick={()=>selectHandler({
        title,
        img,
        text
      })}>
        <img className="radius8" src={img} alt="project"></img>
        <h3 className="font20 extraBold" >{title}</h3>
      <p className="font13" >{text}</p>
      </ImgBtn>
     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 100%;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-bottom: 10px;
  }
`;
const ImgBtn = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  padding: 0px;
  margin: 0px;
  :hover > img {
    opacity: 0.5;
  }
`;