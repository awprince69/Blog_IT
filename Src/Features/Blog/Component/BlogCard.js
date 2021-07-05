import React from "react";
import {
  Container,
  BackgroundImgContainer,
  Profile,
  HeadlineContainer,
  Headline,
  Tag,
} from "./BlogCard.style";

export const BlogCard = ({ blogData }) => {
  const { blogImg, category, title, photoURL, displayName } = blogData;
  return (
    <Container>
      <BackgroundImgContainer source={{ uri: blogImg }}>
        <Profile avatar={<Avatar.Image size={24} source={{ uri: photoURL }} />}>
          {displayName}
        </Profile>
        <HeadlineContainer>
          <Headline numberOfLines={2}>{title}</Headline>
          <Tag numberOfLines={1}>#{category}</Tag>
        </HeadlineContainer>
      </BackgroundImgContainer>
    </Container>
  );
};
