import {useState, useEffect} from 'react'
import {Accuracy, requestPermissionsAsync, watchPositionAsync} from 'expo-location';

//this is a custom hook that we are putting together, we will handle the location from here
export default (shouldTrack, callback) => {

    const [err, setErr] = useState(null)

// Elikkä siis tässä toi useeffect päivittyy jos toi shouldtrack muuttuja bracketseissa on eri kuin viime renderöinnin yhteydessä.
//ja silloin siis jos shouldtrack on true niin se käynnistää ton start watching tausta prosessin ja jos false niin se lopettaa
//sen taustaprosessin. Ja toi shouldtrack on sen isFocused propin arvo joka tulee tohon hookkiin argumenttina.
useEffect(()=>{
    let subscriber;
    const startWatching= async () => {
        try{
            await requestPermissionsAsync()
            subscriber = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                // timeInterval: 2000,
                distance: 1
                }, 
                callback
            );
        }catch(e){
            setErr(e)
        }
    }


    if(shouldTrack){
        startWatching()
    }else{
        if(subscriber){
            subscriber.remove()
        }
        subscriber=null
    }

    return() =>{
        if(subscriber){
            subscriber.remove()
        }
    }
},[shouldTrack, callback])

return([err])
}


