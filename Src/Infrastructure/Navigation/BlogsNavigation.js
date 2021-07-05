import React from "react";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { BlogScreen } from "../../Features/Blog/Screens/Blog.Screen";
import { BlogDetailsScreen } from "../../Features/Blog/Screens/BlogDetails";

const BlogStack = createStackNavigator();

export const BlogNavigator = () => {
  return (
    <BlogStack.Navigator
      headerMode="none"
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <BlogStack.Screen name="Home" component={BlogScreen} />
      <BlogStack.Screen name="BlogDetails" component={BlogDetailsScreen} />
    </BlogStack.Navigator>
  );
};
