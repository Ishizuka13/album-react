import { useState, useEffect } from 'react';
import { Photos as PhotoType } from '../Types/Photos';
import { api } from '../api';
import { useNavigate, useParams } from 'react-router-dom';

export const PhotoById = () => {
  const params = useParams();

  const [photo, setPhoto] = useState<PhotoType>();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(()=>{
    if(params.id) {
      loadPhoto(params.id);
    }
  },[]);
  

  const loadPhoto = async (id: string) => {
    setLoading(true);
    let json = await api.getPhotosById(id);
    setLoading(false);
    setPhoto(json)
  }

  const handleBackButton = () => {
    navigate(-1);
  }
  
    return (
        <>

        <div><h1 className = "text-xl font-bold">uma foto</h1></div>

        {loading &&
        <>
          <div> carregando....</div>
        </>
        }

        {photo &&
          <>
            <button onClick={handleBackButton}>Voltar</button>
             <div>
                <h2 className='font-bold'>{photo.title}</h2>
                <img src={photo.url} alt={photo.title} />
             </div>
          </>
        }

        </>
    );
}