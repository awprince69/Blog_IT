import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { CreatePostScreen } from "../../Features/PostBlog/Screens/CreatePost.screen";
import { BlogNavigator } from "./BlogsNavigation";
import { SettingsScreen } from "../../Features/Settings/Screens/SettingsScreen";
import { BlogContextProvider } from "../../Services/Blogs/BlogContext";
const Tab = createBottomTabNavigator();

const TabIcon = {
  Home: "md-home",
  Add: "add-circle",
  Settings: "md-settings",
};
const CreateScreenOptions = ({ route }) => {
  const iconName = TabIcon[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
export const AppNavigator = () => (
  <BlogContextProvider>
    <Tab.Navigator
      screenOptions={CreateScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "#72BAFC",
      }}
    >
      <Tab.Screen name="Home" component={BlogNavigator} />
      <Tab.Screen name="Add" component={CreatePostScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </BlogContextProvider>
);
