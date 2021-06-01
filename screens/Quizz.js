import React, { useState } from "react";
import styled from "styled-components";
import { SCREEN_WIDTH } from "../utils/dimensions";
import data from "../utils/data.json";
import { decode } from "html-entities";
import { useFocusEffect } from "@react-navigation/native";

const QuizzScreen = ({ navigation, route }) => {

  let isReset = route.params?.isReset;

  const questions = data.results;
  const totalQuestions = questions.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentQuestion = questions[currentIndex];

  useFocusEffect(
    React.useCallback(() => {
      if (isReset) {
        setCurrentIndex(0);
      }

      return () => navigation.setParams({ isReset: false });
    }, [isReset])
  );

  const handleNextQuestion = answer => {
    let currentIndexCopy = currentIndex + 1;
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndexCopy);
    }

    if (currentIndex === totalQuestions - 1) {
      navigation.navigate("Results")
    }
  }

  return (
    <Container>
      <Wrapper>
        <Title>{currentQuestion.category}</Title>
        <QuizzBoxContainer>
          <QuizzBox>
            <Text>
              {decode(currentQuestion.question)}.
          </Text>
          </QuizzBox>
          <Answers>
            <AnswerButton onPress={() => handleNextQuestion(true)} isTrue>
              <Answer>✅</Answer>
            </AnswerButton>
            <AnswerButton onPress={() => handleNextQuestion(false)}>
              <Answer>❌</Answer>
            </AnswerButton>
          </Answers>
          <QuizzBoxText>
            {currentIndex + 1} of {totalQuestions}
          </QuizzBoxText>
        </QuizzBoxContainer>
      </Wrapper>
    </Container>
  )
}

export default QuizzScreen;


const Container = styled.View`
  width:100%;
  height:100%;
  background-color: #E0E0E0;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Wrapper = styled.View`
  flex-direction:column;
  align-items: center;
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



