import {useContext} from 'react';
import {Context as TrackContext} from '../context/TrackContext';
import {Context as LocationContext} from '../context/LocationContext';

export default () => {

    const{ createTrack } = useContext(TrackContext)
    const {state: {locations},
    reset
} = useContext(LocationContext)

    const saveTrack = async() => {
       await createTrack(locations);
       reset()
    }

    return[saveTrack];
}