// import React, {useState, useContext, useEffect} from 'react';
// import {View, Text, Button, Switch, StyleSheet, Alert, TouchableOpacity} from 'react-native';
// import {SafeAreaView} from 'react-navigation'

// const ToggleScreen = () =>{
//     const [isToggled, setToggled] = useState(false)
//     const toggleTrueFalse = () => setToggled(!isToggled)


//         const feelingSick = () =>{
//             if(isToggled===false){
//                 return(
//                     <Text>No, I feel fine</Text>
//                 )
//             }else{
//                 return(
//                     <Text>Yes, I feel sick</Text>
//                 )               
//             }
//         }

//         const viewStyle = () =>{
//             if(isToggled===false){
//                 return(
//                 {
//                     backgroundColor:'#3B2D2D',
//                     flex: 1
//                     }
//                 )
//         }else{
//                 return(
//                     {
//                         backgroundColor:'red',
//                         flex:1
//                     }
//                 )
//             }
//         }

//         const locationSearch = () => {
//             if (isToggled ===true){
//                 return(
//                     <Location />
//                 )
//             }else{
//                 return
//             }
//         }

//     return(
//         <View style= {viewStyle()}>
//             <View style={styles.parentStyle}>
//                 <View style={styles.viewTextStyle}>
//                     <View style={styles.nestedText}>
//                         <Text style={styles.textStyle}>Do you have the Coronavirus symptoms?</Text>
//                         <Text style={styles.descriptionStyle}>Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties.</Text>
//                     </View>
//                 </View>
//                 <View style={styles.statusText}>
//                     <Text style= {styles.statusTextText}>
//                         Mark your status:
//                     </Text>
//                 </View>
//                 <View style= {styles.viewTextandToggle}>
//                     <View style = {styles.viewSwitchTextStyle}>
//                         <Text style={styles.viewSwitchTextElement}>
//                             {feelingSick()}
//                         </Text>
//                     </View>
//                 <View style={styles.emptyBlock}>

//                 </View>
//                     <View style={styles.viewSwitchStyle}>
//                         <Switch style={styles.toggleStyle}
//                                 onValueChange={toggleTrueFalse} 
//                                 value={isToggled}
//                         />
//                     </View>
//                 </View>
//                 <View style={styles.emptyBlock}>

//                 </View>
//                 <View style={styles.viewMapStyle}>
//                     <Text style={styles.mapStyle}>Map</Text>
//                     {locationSearch()}
//                 </View>
//             </View>
//         </View>
//     );
// }


// const styles = StyleSheet.create({

//     parentStyle:{
//         marginHorizontal: 2,
//         flex: 1,
//         justifyContent: 'space-between',
//         alignItems: 'stretch',
//     },
// ///
//         viewTextStyle:{
//             textAlign: 'center',
//             flex:5,
//             justifyContent: "space-between",
//             backgroundColor: '#3B2D2D'
//         },

//                 nestedText:{
//                     textAlign: 'center'
//                 },

//                 textStyle:{
//                     fontSize: 20,
//                     marginTop: 40,
//                     marginBottom: 10,
//                     fontFamily: 'Helvetica',
//                     fontWeight: 'bold',
//                     marginRight: 50,
//                     marginLeft: 50,
//                     textAlign: 'center',
//                     color: '#fff'
//                 },

//                 descriptionStyle:{
//                     fontSize: 15,
//                     marginTop: 5,
//                     marginRight: 20,
//                     marginLeft: 20,
//                     fontFamily: 'Helvetica',
//                     color: '#C4C2C2',
//                     textAlign: 'center'
//                 },
//     ///

//         emptyBlock:{
//             flex:1,
//             backgroundColor: '#3B2D2D'
//         },

//         statusText: {
//             flex: 0.5,
//             alignItems: 'stretch',
//             backgroundColor: '#3B2D2D'
//         },
//         statusTextText: {
//             textAlign: 'center',
//             color: '#C4C2C2'
//         },


//         viewTextandToggle:{
//             justifyContent: "space-between",
//             flexDirection: "row",
//             alignItems:'center',
//             flex:2,
//             backgroundColor: '#3B2D2D'
//         },

//             viewSwitchTextStyle:{
//                 flex: 2
//             },

//                 viewSwitchTextElement:{
//                     textAlign: 'center',
//                     marginHorizontal: 5,
//                     color: '#fff',
//                     fontWeight: 'bold',
//                     fontSize: 20,
//                     marginLeft: 10
//                 },

//             viewSwitchStyle:{
//                 alignItems: 'center',
//                 backgroundColor: '#3B2D2D',
//                 flex: 2,
//                 marginRight: 10
//                 // borderWidth:3,
//                 // borderColor:'black',
//             },

//                 toggleStyle:{
//                     transform: 
//                     [{ scaleX: 2 },{ scaleY: 2 }],
//                 },

//     viewMapStyle:{
//         alignItems: 'center',
//         flex:4,
//         backgroundColor: 'grey'
//     },
//     ///////

//     mapStyle:{

//     }
// })

// export default ToggleScreen;



// // import React from 'react';
// // import {usePosition} from '../hooks/usePosition'
// // import { View, Text } from 'react-native';

// // export const ToggleScreen = () => {
// //   const {latitude, longitude, error} = usePosition();
// //   return (
// //     <View>
// //         <Text>
// //         latitude: {latitude}
// //         longitude: {longitude}
// //         error: {error}
// //         </Text>
// //     </View>
// //   );
// // };

