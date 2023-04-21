import { Photos } from "../Types/Photos";

type Props = {
    data: Photos;
}

export const  PhotoItem = ({data}: Props) => {
    return (
      <div className="m-2"> 
        <div className="border-2 border-black p-2">
          <h3>{data.title}</h3>
          <img src={data.url} alt="" />
        </div>
      </div>
    );
}