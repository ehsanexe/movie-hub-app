  
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Movie from '../screens/movie'
import Search from '../screens/search'

const { Navigator, Screen } = createStackNavigator();

const movieStack = () => {

    return(
        <NavigationContainer>
            <Navigator initialRouteName='MovieHub'
                screenOptions = {{headerStyle:{backgroundColor:'#66a3ff',},headerTitleStyle: {alignSelf:'center'}}}
            >
                <Screen name='MovieHub' component={Search} options={{title:'Movie Hub', headerTintColor:'#fff'}}/>
                <Screen name="Movie" component={Movie} options={{title:''}}/>
            </Navigator>

        </NavigationContainer>
    )
    
}

export default movieStack