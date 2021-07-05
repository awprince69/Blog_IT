import React from "react";
import styled from "styled-components";
import { Avatar } from "react-native-paper";
import { Text } from "react-native";

const AvatarContainer = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: white;
  border: 2px solid #ffebf1;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const AvatarIcon = ({ onPress }) => {
  return (
    <AvatarContainer onPress={onPress}>
      <Avatar.Icon
        size={50}
        //   source={{ uri: image }}
        icon="human"
        backgroundColor="#2182BD"
      />
    </AvatarContainer>
  );
};
