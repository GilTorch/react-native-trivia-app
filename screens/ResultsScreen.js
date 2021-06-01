import React from "react";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons"
import data from "../utils/data.json";
import { decode } from "html-entities";

const ResultsScreen = ({ navigation: { navigate }, route }) => {

  const score = route.params?.score || 0;
  const questions = route.params?.questions || [];
  const correctAnswers = route.params?.correctAnswers;

  const isCorrect = index => correctAnswers.includes(index);

  return (
    <Container>
      <Title>You scored {score}/10</Title>
      <Questions>
        {questions.map((question, idx) => (
          <QuestionContainer key={idx}>
            <IconWrapper>
              {isCorrect(idx) && <Entypo name="plus" size={34} color="#555" />}
              {!isCorrect(idx) && <Entypo name="minus" size={34} color="#555" />}
            </IconWrapper>
            <QuestionWrapper>
              <Question>{decode(question.question)}</Question>
            </QuestionWrapper>
          </QuestionContainer>
        ))}
      </Questions>
      <StartButton onPress={() => navigate({ name: "Quizz", params: { isReset: true } })}>
        <Text>
          PLAY AGAIN?
      </Text>
      </StartButton>
    </Container>
  )
}

export default ResultsScreen;


const Container = styled.ScrollView.attrs(
  {
    contentContainerStyle: {
      flexDirection: "column",
      alignItems: "center"
    }
  }
)`
  background-color: ${props => props.theme.container.backgroundColor};
`;

const Title = styled.Text`
  width: 50%;
  font-size: 24px;
  font-weight: bold;
  text-align:center;
  margin-top:20px;
`;

const Questions = styled.View`
  flex:1;
  margin-top:60px;
  flex-direction: column;
`;

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


const Text = styled.Text`
  width: 60%;
  font-size: 24px;
  text-align:center;
`;

const StartButton = styled.TouchableOpacity`
  margin-bottom:20px;
`;

