import React from 'react';
import $ from 'jquery';
import styled from 'styled-components';

const Container = styled.div`
  max-height: 88px;
  padding: 5px 12px;
`;

const Button = styled.button`
  width: 100%;
  max-height: 88px;
  cursor: pointer;
  position: relative;
  border-radius: 8px;
  outline: none;
  background: transparent;
  border: none;
  color: inherit;
  display: block;
  margin: 0px;
  padding: 10px;
  text-decoration: none;

  :active {
    background: rgb(247, 247, 247);
    transform: scale(0.98);
    transition: transform 0.1s ease 0s;
  }
`;

const ImageContainer = styled.div`
  margin-right: 16px;
  display: inline-flex;
  width: 64px;
  height: 64px;
  background: rgb(221,221,221);
  border-radius: 4px;
  position: relative;
  float: left;
`;

const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: static;
  border-radius: 4px;
`;

const Description = styled.div`
  float: left;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Time = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  color: rgb(113, 113, 113);
`;

const Name = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: rgb(34, 34, 34);
`;

const Count = styled.div`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin-top: 4px;
  color: rgb(34, 34, 34);
`;

const Entry = (props) => {
  var stays = (props.collection.count === 1) ? ('stay') : ('stays');
  return (
    <Container>
      <Button onClick={() => { props.handleSave(props.collection.collection_name); }}>
        <div>
          <ImageContainer>
            <Image src={props.collection.photo_url}></Image>
          </ImageContainer>
          <Description>
            <Time>{props.collection.time}</Time>
            <Name>{props.collection.collection_name}</Name>
            {props.collection.count <= 0 && <Count>Nothing saved yet</Count>}
            {props.collection.count > 0 && <Count>{`${props.collection.count} ${stays}`}</Count>}
          </Description>
        </div>
      </Button>
    </Container>
  );
};

export default Entry;