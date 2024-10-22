import React, { useEffect, useState } from 'react';
import NavBar from "./NavBar";
import axios from 'axios';
import { songsData } from "../assets/assets";
import Albumitem from "./Albumitem";
import Songitem from "./Songitem";

const DisplayHome = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const fetchAlbums = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/albums');
            setAlbums(response.data);
            // console.log(albums);
        };
        fetchAlbums();

    }, []);

    return (
        <>
            <NavBar />
            <div className="mb-4 ">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albums.map((item, index) => (<Albumitem key={index} id={item.id} title={item.title} />))}
                    {/* {albumsData.map((item, index) => (<Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))} */}

                </div>
            </div>
            <div className="mb-4 ">
                <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (<Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}

                </div>
            </div>
        </>
    )
}
export default DisplayHome