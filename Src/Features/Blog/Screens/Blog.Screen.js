import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import { Text } from "react-native";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { BlogCard } from "../Component/BlogCard";
import styled from "styled-components/native";
import { AvatarIcon } from "../../../Components/AppAvatar/AppAvatar";
import { WelcomeText } from "../Component/WelcomeText";
import { BlogList } from "../Component/BlogList.style";
import { BlogContext } from "../../../Services/Blogs/BlogContext";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SearchHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 30px 0 30px;
`;

export const BlogScreen = ({ navigation }) => {
  const { getAllBlogs, allBlogs, isSuccess, getBlogsByCategory } =
    useContext(BlogContext);
  useEffect(() => {
    getAllBlogs();
  }, [isSuccess]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeArea>
      <SearchContainer>
        <SearchHeader>
          <Searchbar
            style={{ marginRight: 10 }}
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
          <AvatarIcon onPress={() => navigation.navigate("Settings")} />
        </SearchHeader>
      </SearchContainer>
      <WelcomeText />
      <Text>Blogs</Text>
      <BlogList
        data={allBlogs}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("BlogDetails", {
                  blogData: item,
                })
              }
            >
              <BlogCard blogData={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeArea>
  );
};
