import { useState, useEffect } from 'react';
import { PhotosItem } from "../components/PhotosItem"
import { Photos } from '../Types/Photos';
import { api } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

export const PhotosHome = () => {
  const params = useParams();

  const [photos, setPhotos] = useState<Photos[]>([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    if(params.id) {
      loadPhotos(params.id);
    }
  },[]);
  

  const loadPhotos = async (id: string) => {
    setLoading(true);
    let json = await api.getAlbumPhotos(id);
    setLoading(false);
    setPhotos(json)
  }

  const handleBackButton = () => {
    navigate(-1);
  }
  
    return (
        <>

        <div><h1 className = "text-xl font-bold">Galeria de fotos</h1></div>

        {loading &&
          <div> carregando....</div>
        }

        {!loading && photos.length > 0 &&
          <>  
            <button onClick={handleBackButton}>Voltar</button>
             <div className='flex flex-wrap'>{photos.map((item, index)=>(
               <PhotosItem data={item} key={index}/>
             ))}</div>
          </>
        }

        {!loading && photos.length === 0 &&
          <div>sem fotos para exibir</div>
        }

        </>
    );
}

export const Photo = () => {

}