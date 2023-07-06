import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from 'react-native';
import axios from 'axios';
import Movie from './movie';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default function Home({navigation}) {
  const [movieData, setMovieData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
    axios
      .get(
        'https://www.omdbapi.com/?s=spider man&apikey=${REACT_APP_OMDB_API_KEY}',
      )
      .then((res) => {
        //console.log(res.data.Search)
        setMovieData(res.data.Search);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //useEffect( () => { console.log('search text'+ searchText)} , [movieData])

  const handleChange = (text) => {
    setSearchText(text);
    console.log(searchText);
  };

  const handleSubmit = () => {
    Keyboard.dismiss();
    const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
    axios
      .get(
        `https://www.omdbapi.com/?s=${searchText}&apikey=${REACT_APP_OMDB_API_KEY}`,
      )
      .then((res) => {
        setMovieData(res.data.Search);
        console.log('search result:' + res.data.Search);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="spider man"
        style={styles.input}
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      {/* <Button title='Search' onPress={handleSubmit} /> */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>SEARCH</Text>
      </TouchableOpacity>

      <ScrollView>
        {movieData ? (
          movieData.map((movie) => (
            <TouchableOpacity
              style={styles.container2}
              key={movie.imdbID}
              onPress={() => {
                navigation.navigate('Movie', {imdbID: movie.imdbID});
              }}>
              <Image
                style={styles.poster}
                resizeMode="cover"
                source={{uri: movie.Poster}}
              />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{movie.Title}</Text>
                <Text style={styles.text}>({movie.Year})</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Try different keywords</Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    borderRadius: 6,
    alignItems: 'center',
    elevation: 3,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 20,
    marginVertical: 6,
    shadowOffset: {width: 1, height: 1},
    backgroundColor: 'white',
  },
  poster: {
    flex: 1,
    width: '98%',
    height: 100,
    marginVertical: 5,

    borderRadius: 6,
  },
  textContainer: {
    marginHorizontal: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  text: {
    marginHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 6,
    margin: 5,
  },
  button: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#66a3ff',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
