import * as Location from 'expo-location';

const tenMetersWithDegrees= 0.00005;

const getLocation = increment =>{
    return{
        timestamp: 1585827535,
        coords:{
            speed:0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 24.9322973 + increment *tenMetersWithDegrees,
            latitude: 60.1551927 + increment * tenMetersWithDegrees
        }
    }
}

let counter = 0;

setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLocation(counter)
    });
    counter++;
}, 100)