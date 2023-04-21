
import { Link } from "react-router-dom";
import { Photos } from "../Types/Photos";

type Props = {
    data: Photos;
}

export const  PhotosItem = ({data}: Props) => {
  const linkId = `/photos/${data.id}`
    return (
      <div className="m-2">
        <div className="border-2 border-black p-2">
        <Link to={linkId}><div className="border-4 m-1 "><img src={data.thumbnailUrl} alt="" /></div></Link>
          
        </div>
      </div>
    );
}