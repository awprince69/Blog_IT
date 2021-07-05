import React, { createContext, useState } from "react";
import { Alert } from "react-native";
import { blogImg } from "../MockData/FakeData";
import firebase from "firebase/app";
import { db } from "../Firebase/FirebaseInit";

// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");

// const db = firebase.firestore();

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [allBlogs, setAllBlogs] = useState([]);
  //post Data
  const postBlog = (
    title,
    category,
    description,
    displayName,
    email,
    photoURL
  ) => {
    db.collection("blogs")
      .add({
        blogImg: blogImg[Math.floor(Math.random() * 8)],
        title,
        category,
        description,
        displayName,
        email,
        photoURL,
      })
      .then(() => {
        setIsSuccess(true);
      })
      .catch((error) => {
        Alert.alert("Error adding document: ", error);
      });
  };
  //get data
  const getAllBlogs = () => {
    db.collection("blogs")
      .get()
      .then((snapshot) => {
        const blogs = [];
        snapshot.docs.map((doc) =>
          blogs.unshift({ ...doc.data(), id: doc.id })
        );
        setAllBlogs(blogs);
      })
      .catch((err) => Alert.alert("didn't get data", err));
  };
  //filtering
  const getBlogsByCategory = (name) => {
    db.collection("blogs")
      .where("category", "==", name)
      .get()
      .then((snapshot) => {
        const specificBlogs = [];
        snapshot.docs.map((doc) =>
          specificBlogs.push({ ...doc.data(), id: doc.id })
        );
        setAllBlogs(specificBlogs);
      });
  };
  return (
    <BlogContext.Provider
      value={{
        onPostBlog: postBlog,
        isSuccess,
        setIsSuccess,
        getAllBlogs,
        allBlogs,
        getBlogsByCategory,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};
