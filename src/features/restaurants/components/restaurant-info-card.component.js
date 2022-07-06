//rafc
import React from "react";
import { PropTypes } from "prop-types";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 16px;
  color: red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Title>{name}</Title>
    </Card>
  );
};
const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
  title: { padding: 16 },
});

RestaurantInfoCard.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  photos: PropTypes.array,
  address: PropTypes.string,
  isOpenNow: PropTypes.bool,
  rating: PropTypes.number,
  isClosedTemporarily: PropTypes.bool,
};
