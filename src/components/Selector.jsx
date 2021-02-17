import React, { useMemo, useState } from 'react';
import data from './data/taylorSwiftLyrics.json'

const Selector = () => {
    const albums = useMemo(() => data, []);

    const [currentAlbum, setCurrentAlbum] = useState("Taylor Swift");

    const changeAlbum = (newAlbum) => {
        setCurrentAlbum(newAlbum);
    }

    return ( 
        <div className="formGroup">
            <label>Select an album: </label>
            <select id="albumSelect" onChange={(event) => changeAlbum(event.target.value)} value={currentAlbum}>
                {
                    albums.map((album) => (
                        <option>{album.album}</option>
                    ))
                    
                }
            </select>
        </div>
     );
}
 
export default Selector;