import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import styled from "styled-components";

const TextContainer = styled.View`
  margin-left: ${(props) => props.theme.space[3]};
`;
const Title = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h5};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.secondary};
`;
const BlogTime = styled.Text`
  margin-left: ${(props) => props.theme.space[5]};
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeights.bold};
`;

export const WelcomeText = () => {
  const [hour, setHour] = useState(null);
  const [colorName, setColorName] = useState("");
  const time = new Date().getHours();

  useEffect(() => {
    if (time > 4 && time < 12) {
      setHour("Morning");
      setColorName("#501412");
    } else if (time >= 12 && time < 15) {
      setHour("Afternoon");
      setColorName("#009569");
    } else if (time >= 15 && time < 21) {
      setHour("Evening");
      setColorName("#800080");
    } else if (time <= 4 || time >= 21) {
      setHour("Night");
      setColorName("#008AA6");
    }
  }, []);
  return (
    <TextContainer>
      <Title>Welcome To</Title>
      <BlogTime>
        <Text style={{ color: `${colorName}` }}>{hour} </Text>
        Blog
      </BlogTime>
    </TextContainer>
  );
};
