import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components";
import useQuestions from "../hooks/useQuestions";
import Loading from "../components/Loading";
import QuestionBox from "../components/QuestionBox";

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
          <QuestionBox
            category={questions[currentIndex].category}
            question={questions[currentIndex].question}
            handleNextQuestion={answer => handleNextQuestion(answer)}
          />
          <QuizzLevel>
            {currentIndex + 1} of {questions.length}
          </QuizzLevel>
        </Wrapper>
      )}
    </Container>
  )
}

export default QuizzScreen;


const Container = styled.SafeAreaView`
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

const QuizzLevel = styled.Text`
  font-size: 18px;
`;

