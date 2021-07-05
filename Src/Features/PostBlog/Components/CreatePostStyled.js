import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`;
export const Input = styled(TextInput)`
  margin-top: 15px;
`;
export const PickerContainer = styled.View`
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const AppPicker = styled(Picker)`
  width: 150px;
`;
export const AppButton = styled(Button)`
  margin-top: 20px;
  height: 50px;
  justify-content: center;
`;
export const SuccessText = styled.Text`
  color: green;
  font-size: 25px;
  text-align: center;
`;
