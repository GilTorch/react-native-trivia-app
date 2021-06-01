import React from "react";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons"

const ResultsScreen = ({ navigation: { navigate } }) => {

  return (
    <Container>
      <Title>You scored 3/10</Title>
      <Questions>
        <QuestionContainer>
          <IconWrapper>
            <Entypo name="plus" size={34} color="#555" />
          </IconWrapper>
          <QuestionWrapper>
            <Question>Unturned originally started as a Roblox game</Question>
          </QuestionWrapper>
        </QuestionContainer>
      </Questions>
      <StartButton onPress={() => navigate("Quizz")}>
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
      flex: 1,
      flexDirection: "column",
      alignItems: "center"
    }
  }
)`
  background-color: #E0E0E0;
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

