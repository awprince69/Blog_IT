import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { Headline, Subheading } from "react-native-paper";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAvoidingView, Platform } from "react-native";
import {
  Container,
  Input,
  PickerContainer,
  AppPicker,
  AppButton,
  SuccessText,
} from "../Components/CreatePostStyled";
import { BlogContext } from "../../../Services/Blogs/BlogContext";
import { AuthenticationContext } from "../../../Services/Authentication/AuthenticationContext";

export const CreatePostScreen = ({ navigation }) => {
  const { onPostBlog, isSuccess, setIsSuccess } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("JavaScript");
  const { user } = useContext(AuthenticationContext);
  const { displayName, email, photoURL } = user;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "android" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <SafeArea>
        <Container>
          <Headline>Post your Blog</Headline>
          <Input
            value={title}
            placeholder="Blog title"
            onChangeText={(text) => setTitle(text)}
          />
          <PickerContainer>
            <Subheading>Chose a category:</Subheading>
            <AppPicker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
            >
              <Picker.Item label="JavaScript" value="JavaScript" />
              <Picker.Item label="ReactJs" value="ReactJs" />
              <Picker.Item label="NodeJs" value="NodeJs" />
              <Picker.Item label="Others" value="Others" />
            </AppPicker>
          </PickerContainer>
          <Input
            value={description}
            placeholder="Write Your Blog"
            mode=""
            multiline
            numberOfLines={10}
            onChangeText={(text) => setDescription(text)}
          />
          <AppButton
            mode="contained"
            onPress={() =>
              onPostBlog(
                title,
                category,
                description,
                displayName,
                email,
                photoURL
              )
            }
          >
            Post
          </AppButton>
          <StatusBar style="auto" />
        </Container>
      </SafeArea>
    </KeyboardAvoidingView>
  );
};
