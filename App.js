
import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import{createBottomTabNavigator} from 'react-navigation-tabs'
import {createStackNavigator} from 'react-navigation-stack';
import ToggleScreen from './src/screens/ToggleScreen';
import MapScreen from './src/screens/MapScreen';
import Checklist from './src/screens/Checklist';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import {setNavigator} from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/LocationContext'
import {Provider as TrackProvider} from './src/context/TrackContext'

const switchNavigator = createSwitchNavigator(

  {
    mainFlow: createBottomTabNavigator(
      {
      //  Main: ToggleScreen,
      Main: TrackCreateScreen,
       Map: MapScreen,
       Checklist: Checklist
      }
    )
  }

)

const App = createAppContainer(switchNavigator)

export default()=>{

  return(
    <TrackProvider>
    <LocationProvider>
      <App ref={navigator=>{
        setNavigator(navigator)
      }}/>
    </LocationProvider>
    </TrackProvider>
  )
}


// export default createAppContainer(switchNavigator)