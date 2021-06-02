import React from "react";
import styled from "styled-components";
import { decode } from "html-entities";
import { SCREEN_WIDTH } from "../utils/dimensions";

const QuestionBox = ({ category, question, handleNextQuestion }) => (
  <>
    <Title>{category}</Title>
    <QuizzBoxContainer>
      <QuizzBox>
        <Text>
          {decode(question)}
        </Text>
      </QuizzBox>
      <Answers>
        <AnswerButton onPress={() => handleNextQuestion("True")} isTrue>
          <Answer>✅</Answer>
        </AnswerButton>
        <AnswerButton onPress={() => handleNextQuestion("False")}>
          <Answer>❌</Answer>
        </AnswerButton>
      </Answers>
    </QuizzBoxContainer>
  </>
)

export default QuestionBox;


const Title = styled.Text`
  width: ${SCREEN_WIDTH - 50}px;
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


const QuizzBox = styled.View`
  border: 1px solid black;
  width: ${props => props.theme.quizzBoxSize}px;
  height: ${props => props.theme.quizzBoxSize}px ;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  margin-bottom:30px;
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

