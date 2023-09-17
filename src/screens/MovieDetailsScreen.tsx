import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {COLORS} from '../UiUtility/Constants';

const MovieDetailsScreen = ({route}) => {
  const {movie} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: movie.image}} style={styles.image} />
      <Text>Title: {movie.title}</Text>
      <Text>Release Date: {movie.releaseDate}</Text>
      <Text>Description: {movie.description}</Text>
      <Text>User Rating: {movie.userRating}</Text>
      <Text>Director: {movie.director}</Text>
      <Text>Actors: {movie.actors.join(', ')}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.colorBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {borderWidth: 1, margin: 10, padding: 5, borderColor: 'grey'},
  image: {width: '90%', height: 200, marginBottom: 10},
});

export default MovieDetailsScreen;
