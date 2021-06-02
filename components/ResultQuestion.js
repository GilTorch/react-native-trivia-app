import React from "react";
import { Entypo } from "@expo/vector-icons"
import styled from "styled-components";
import { decode } from "html-entities";

const ResultQuestion = ({ isCorrect, question }) => <QuestionContainer>
  <IconWrapper>
    {isCorrect() && <Entypo name="plus" size={34} color="#555" />}
    {!isCorrect() && <Entypo name="minus" size={34} color="#555" />}
  </IconWrapper>
  <QuestionWrapper>
    <Question>{decode(question)}</Question>
  </QuestionWrapper>
</QuestionContainer>

export default ResultQuestion;

const QuestionContainer = styled.View`
  flex-direction: row;
  width: 80%;
  margin-bottom:10px;
`;

const Question = styled.Text`
  font-size: 24px;
  color: #444;
`;


const IconWrapper = styled.View`
  margin-right:10px
`;

const QuestionWrapper = styled.View`
`;