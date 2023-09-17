import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {Movie, moviesData} from '../data/Moviedata';
import {COLORS} from '../UiUtility/Constants';
const DashBoard = ({navigation}: any) => {
  const [searchText, setSearchText] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(moviesData);
  useEffect(() => {
    // Filter movies based on the search text
    const filtered = moviesData.filter(movie =>
      movie.title.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredMovies(filtered);
  }, [searchText]);
  const showMoviedetails = (item: Movie) => {
    navigation.navigate('MovieDetails', {movie: item});
  };
  const renderItem = ({item}: {item: Movie}) => (
    <TouchableOpacity
      onPress={() => showMoviedetails(item)}
      style={{margin: 10}}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search movies"
        value={searchText}
        onChangeText={text => setSearchText(text)}
        style={styles.input}
      />
      <FlatList
        data={filteredMovies}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.colorBackground},
  input: {borderWidth: 1, margin: 10, padding: 5, borderColor: 'grey'},
  image: {width: '100%', height: 200},
});
export default DashBoard;
