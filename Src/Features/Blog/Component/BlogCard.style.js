import styled from "styled-components/native";
import { Chip } from "react-native-paper";
import { Card } from "react-native-paper";

export const Blogs = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const Container = styled.TouchableHighlight.attrs({
  activeOpacity: 0.9,
  underlayColor: "purple",
})`
  height: 320px;
  width: 320px;
  border-radius: 30px;
  overflow: hidden;
  elevation: 5;
  margin: 18px;
`;
export const BackgroundImgContainer = styled.ImageBackground`
  height: 320px;
  width: 320px;
`;
export const Profile = styled(Chip)`
  width: 50%;
  top: 20px;
  left: 150px;
`;
export const Headline = styled.Text`
  color: white;
  font-size: 25px;
  font-weight: bold;
`;
export const HeadlineContainer = styled.View`
  margin-top: 150px;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.3);
`;
export const Tag = styled.Text`
  font-size: 17px;
  color: yellow;
  padding-top: 10px;
  padding-bottom: 60px;
`;

// export const Icon = styled.Image`
//   width: 15px;
//   height: 15px;
// `;

// export const BlogCard = styled(Card)`
//   background-color: ${(props) => props.theme.colors.bg.primary};
// `;

// export const BlogCardCover = styled(Card.Cover)`
//   padding: ${(props) => props.theme.space[3]};
//   background-color: ${(props) => props.theme.colors.bg.primary};
// `;

// export const Address = styled.Text`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: ${(props) => props.theme.fontSizes.caption};
// `;

// export const Info = styled.View`
//   padding: ${(props) => props.theme.space[3]};
// `;

// export const Rating = styled.View`
//   flex-direction: row;
//   padding-top: ${(props) => props.theme.space[2]};
//   padding-bottom: ${(props) => props.theme.space[2]};
// `;

// export const Section = styled.View`
//   flex-direction: row;
//   align-items: center;
// `;

// export const SectionEnd = styled.View`
//   flex: 1;
//   flex-direction: row;
//   justify-content: flex-end;
// `;
