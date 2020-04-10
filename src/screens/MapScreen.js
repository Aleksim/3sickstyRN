import React, {useContext} from 'react'
import {StyleSheet} from 'react-native'
import {SafeAreaView, NavigationEvents} from 'react-navigation'
import {Context as TrackContext} from '../context/TrackContext'
import Map from '../components/Map'
import {MaterialCommunityIcons} from '@expo/vector-icons'

const MapScreen = ({navigation}) =>{

    const {state, fetchTracks} = useContext(TrackContext)

    return(
        <SafeAreaView forceInset={{top: 'always'}} style={styles.container}>
        <NavigationEvents onWillFocus={fetchTracks} />
            <Map />
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#000000'
    },
});

MapScreen.navigationOptions = {
    title: 'Map',
    tabBarIcon: <MaterialCommunityIcons name="eye" size={30} />
}

export default MapScreen;