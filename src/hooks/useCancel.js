import {useContext} from 'react';
import {Context as TrackContext} from '../context/TrackContext';
import {Context as LocationContext} from '../context/LocationContext';

export default () => {

    const {state: {locations},
    reset
} = useContext(LocationContext)

    const cancelTrack = () => {
       reset()
    }

    return[cancelTrack];
}