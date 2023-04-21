import {useState, useEffect} from 'react';
import {Album} from '../Types/Albums';
import {api} from '../api';
import { AlbumItem } from '../components/AlbumItem';

export const AlbumsItem = () => {
    
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState(false);

  //função que carrega os albums
const loadAlbums = async () => {
  setLoading (true);
  let json = await api.getAllAlbums();
  setLoading(false);
  setAlbums(json)
}


//função feita para ser excutada assim que entrar na web
useEffect(()=>{
  loadAlbums();
},[]);


    
    return (
        <div>
            <div><h1 className = "text-xl font-bold">Galeria de albums</h1></div>
        
            {loading &&
            <div> carregando....</div>
            }

            {!loading && albums.length > 0 &&
                <>
                <div>
                  {albums.map((item, index)=>(
                    <AlbumItem key={index} data={item}/>
                  ))}
                </div>
                </>
            }

            {!loading && albums.length === 0 &&
            <div>sem albums para exibir</div>
            }
        </div>
    )
}