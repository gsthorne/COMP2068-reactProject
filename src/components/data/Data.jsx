import React, { useMemo, useState } from 'react';
import Header from '../shared/Header';
import taylorSwiftLyrics from './taylorSwiftLyrics.json';

const Data = () => {
    const albums = useMemo(() => taylorSwiftLyrics, []);
    const [data, setData] = useState([]);

    const secondsToMinutes = (length) => {
        var seconds = length % 60;
        // need to do a ternary operator in case of seconds ranging from 00 to 09, because they show up as just 0-9
        seconds = (seconds >= 10)?seconds:"0"+seconds
        var minutes = (length - seconds) / 60;
        var time = minutes + ":" + seconds;
        return time;
    }

    // simplified version of what was given on our midterm
    const filter = event => {
        console.log(data)
        event.persist();
        const value = event.target.value;
        
        if (value.length === 0) {
          setData([...albums]);
          console.log("albums", data)
        } else if (isNaN(value)) {
          const regex = new RegExp(value);
          setData([...albums.filter(datum => (regex.test(datum.album)))]);
          console.log("nan", data)
        }
      };


    return (
        <>
            <Header title="Data" />

            <div>
                <h2>Songs by Taylor Swift</h2>
                <div>
                    <label>Search for an album:</label>
                    <input onChange={filter} onLoad={filter} />
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Album</th>
                            <th>Track Number</th>
                            <th>Song Name</th>
                            <th>Song Length</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            albums.map((album) =>(
                                album.songs.map((song, i) => (
                                    <tr key={i}>
                                        <td>{album.album}</td>
                                        <td>{song.trackNumber}</td>
                                        <td>{song.trackName}</td>
                                        <td>{secondsToMinutes(song.trackLength_S)}</td>
                                    </tr>
                                ))
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}
 
export default Data
;