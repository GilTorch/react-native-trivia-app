import React from "react";
import styled from "styled-components";

const HomeScreen = () => (
  <Container>
    <Title>Welcome to the Trivia Challenge!</Title>
    <Text>You will be presented with 10 True or False questions.</Text>
    <Text>Can you score 100%?</Text>
    <StartButton>
      <Text>
        BEGIN
      </Text>
    </StartButton>
  </Container>
)

export default HomeScreen;


const Container = styled.View`
  width:100%;
  height:100%;
  background-color: #E0E0E0;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
`;

const Title = styled.Text`
  width: 50%;
  font-size: 24px;
  font-weight: bold;
  text-align:center;
`;

const Text = styled.Text`
  width: 60%;
  font-size: 24px;
  text-align:center;
`;

const StartButton = styled.TouchableOpacity``;

const StartButtonText = styled.Text``;


