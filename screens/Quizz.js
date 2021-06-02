import React, { useState } from "react";
import { decode } from "html-entities";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components";
import { SCREEN_WIDTH } from "../utils/dimensions";
import useQuestions from "../hooks/useQuestions";
import Loading from "../components/Loading";

const QuizzScreen = ({ navigation, route }) => {

  let isReset = route.params?.isReset;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState([]);

  const { loading, data: questions, error } = useQuestions();

  useFocusEffect(
    React.useCallback(() => {
      if (isReset) {
        setCurrentIndex(0);
        setScore(0);
        setCorrectAnswers([]);
      }

      const reset = () => {
        navigation.setParams({ isReset: false, score })
      }

      return () => reset();
    }, [isReset])
  );

  const handleNextQuestion = answer => {
    let currentIndexCopy = currentIndex + 1;
    const totalQuestions = questions.length;
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndexCopy);
    }

    if (answer === questions[currentIndex].correct_answer) {
      const newScore = score + 1;
      setScore(newScore);
      setCorrectAnswers([...correctAnswers, currentIndex]);
    }

    if (currentIndex === totalQuestions - 1) {
      navigation.navigate({ name: "Results", params: { score, correctAnswers } })
    }
  }

  return (
    <Container>
      {loading && <Loading />}
      {!loading && questions && questions.length > 0 && (
        <Wrapper>
          <Title>{questions[currentIndex].category}</Title>
          <QuizzBoxContainer>
            <QuizzBox>
              <Text>
                {decode(questions[currentIndex].question)}
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
            <QuizzBoxText>
              {currentIndex + 1} of {questions.length}
            </QuizzBoxText>
          </QuizzBoxContainer>
        </Wrapper>
      )}
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

const QuizzBoxSize = SCREEN_WIDTH - 40;

const QuizzBox = styled.View`
  border: 1px solid black;
  width: ${QuizzBoxSize}px;
  height: ${QuizzBoxSize}px ;
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



