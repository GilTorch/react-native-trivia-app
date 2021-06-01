import React from "react";
import styled from "styled-components";
import { SCREEN_WIDTH } from "../utils/dimensions";

const QuizzScreen = ({ navigation: { navigate } }) => (
  <Container>
    <Title>Entertainment: Video Games</Title>
    <QuizzBoxContainer>
      <QuizzBox>
        <Text>
          Unturned originally startesd as a Roblox game.
        </Text>
      </QuizzBox>
      <Answers>
        <AnswerButton isTrue>
          <Answer>✅</Answer>
        </AnswerButton>
        <AnswerButton>
          <Answer>❌</Answer>
        </AnswerButton>
      </Answers>
      <QuizzBoxText>
        1 of 10
      </QuizzBoxText>
    </QuizzBoxContainer>
  </Container>
)

export default QuizzScreen;


const Container = styled.View`
  width:100%;
  height:100%;
  background-color: #E0E0E0;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Title = styled.Text`
  width: 80%;
  font-size: 24px;
  font-weight: bold;
  text-align:center;
`;

const QuizzBoxContainer = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

const QuizzBoxSize = SCREEN_WIDTH - 40;

const QuizzBox = styled.View`
  border: 1px solid black;
  width: ${QuizzBoxSize};
  height: ${QuizzBoxSize} ;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  margin-bottom:30px;
`;

const QuizzBoxText = styled.Text`
  font-size: 18px;
`;

const Answers = styled.View`
  flex-direction: row;
  align-items:center;
`;

const AnswerButton = styled.TouchableOpacity`
  width:100px;
  height:50px;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom:40px;
`;

const Answer = styled.Text`
  color: white;
  font-size: 30px;
`;

const Text = styled.Text`
  width: 80%;
  font-size: 24px;
  text-align:center;
`;



