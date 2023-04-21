import axios from "axios";

const httpAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAllAlbums: async () => {
        let response = await httpAxios.get(`/albums`)
        return response.data;
    },
    getAlbum: async (id: string) => {
        let response = await httpAxios.get(`/albums/${id}`)
        return response.data;
    },
    getAlbumPhotos: async (id: string) => {
        let response = await httpAxios.get(`/albums/${id}/photos`)
        return response.data;
    },
    getPhotosById: async (id: string) => {
        let response = await httpAxios.get(`/photos/${id}`)
        return response.data;
    }
}