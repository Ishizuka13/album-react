import { Link } from "react-router-dom";
import { Album } from "../Types/Albums";

type Props = {
    data: Album;
}

export const  AlbumItem = ({data}: Props) => {
  const linkId = `albums/${data.id}`

    return (
      <Link to={linkId}><div className="border-4 m-1 ">{data.title}</div></Link>
  );
}