import React from "react";
import styled from "styled-components";
import useQuestions from "../hooks/useQuestions";
import Loading from "../components/Loading";
import ResultQuestion from "../components/ResultQuestion";

const ResultsScreen = ({ navigation: { navigate }, route }) => {

  const score = route.params?.score || 0;
  const correctAnswers = route.params?.correctAnswers;
  const { loading, data: questions, error } = useQuestions();
  const isCorrect = index => correctAnswers.includes(index);


  if (loading) return <Loading />;

  return (
    <SafeAreaView>
      <Container>
        <Title>You scored {score}/10</Title>
        <Questions>
          {questions && questions.length > 0 && questions.map(({ question }, idx) => (
            <ResultQuestion
              key={idx}
              isCorrect={() => isCorrect(idx)}
              question={question}
            />
          ))}
        </Questions>
        <StartButton onPress={() => navigate({ name: "Quizz", params: { isReset: true } })}>
          <Text>
            PLAY AGAIN?
      </Text>
        </StartButton>
      </Container>
    </SafeAreaView>
  )
}

export default ResultsScreen;

const SafeAreaView = styled.SafeAreaView`
  background-color:${props => props.theme.container.backgroundColor};
`;

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



const Text = styled.Text`
  width: 60%;
  font-size: 24px;
  text-align:center;
`;

const StartButton = styled.TouchableOpacity`
  margin-bottom:20px;
`;

