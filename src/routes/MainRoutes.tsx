import { useRoutes } from 'react-router-dom';
import { AlbumsItem } from '../pages/AlbumsItem';
import { PhotosHome } from '../pages/PhotosHome';
import { PhotoById } from '../pages/PhotoId';

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <AlbumsItem /> },
        { path: `/albums/:id`, element: <PhotosHome /> },
        { path: `/photos/:id`, element: <PhotoById /> }
    ]);
}