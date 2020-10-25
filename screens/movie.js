import React, {useState,useEffect} from 'react';
import {View,Text,StyleSheet,Image,} from 'react-native';
import axios from 'axios'

const movie = ({route}) => {

    const [movie,setMovie] = useState({Title:'',Poster:'n/a',Released:'',imdbRating:'',Director:''
                                        ,Actors:'',Writer:'',Genre:'',Plot:''})
    const {imdbID,poster} = route.params;

    useEffect( () => {
        axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=cb3a98a0`)
            .then(res => {
                setMovie(res.data)
              })
              .catch(err => { alert(err)})
    } , [])

    return(
        <View style={style.container}>
            <Image style={style.poster} resizeMode='stretch' source={{uri: movie.Poster}}/>
            <View style={style.title}>
                <Text style={style.titleText}>{movie.Title}</Text>
                <Text>{movie.Released}</Text>
            </View>
            <View style={style.text}>
                
                <Text>Rating: {movie.imdbRating}</Text>
                <Text>Director: {movie.Director}</Text>
                <Text>Actors: {movie.Actors}</Text>
                <Text>Writer: {movie.Writer}</Text>
                <Text>Genre: {movie.Genre}</Text>
                <Text>Plot: {movie.Plot}</Text> 
            </View>
            
        </View>
        // <View><Text>Movie</Text></View>
    )
}

const style=StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 6,
        alignItems: 'center',
        elevation:3,
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:10,
        marginVertical:6,
        shadowOffset:{width:1,height:1},
        backgroundColor: 'white' 
      },
    poster: {
        width: '95%',
        height: '80%',
        flex:1,
        margin:10,
        alignSelf:'center',
        borderRadius:6
    },
    text:{
        marginHorizontal:10,
        marginVertical:5,
        
    },
    title:{
        marginHorizontal:10,
        marginVertical:5,
        alignItems:'center',
        borderBottomWidth:1
    },
    titleText:{
        fontWeight:"bold"
    }

})

export default movie