import React, { useState } from "react";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../Components/Utility/SafeAreaComponent";
import { BlogCard } from "../Component/BlogCard";

export const BlogDetailsScreen = ({ route }) => {
  const { blogData } = route.params;
  return (
    <SafeArea>
      <BlogCard blogData={blogData} />
    </SafeArea>
  );
};
