import * as React from "react";
import { ChangeEventHandler } from "react";
import './ImagePreview.css';

export const ImagePreview: React.FC = () => {
  const [image, setImage] = React.useState("");
  const [isBW, setIsBW] = React.useState(false);
  const [isVivid, setIsVivid] = React.useState(false);
  const [isSepia, setIsSepia] = React.useState(false);
  const onImageSelected = (event: unknown) => {
    // @ts-ignore
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  let mergeFilters = "";
  mergeFilters = isVivid
    ? mergeFilters + "saturate(150%) brightness(150%)"
    : mergeFilters;
  mergeFilters = isBW ? mergeFilters + " grayscale(100%)" : mergeFilters;
  mergeFilters = isSepia ? mergeFilters + "sepia(60%)" : mergeFilters;

  return (
    <>
    <div className="main-div">
        <header>
            <p className="logo-t">Photo-craft</p>
        </header>
        <div className="add_btn">
        <div className="add-block">
      Please choose image:{" "}
      <input type="file" accept="image/*" onChange={onImageSelected} />
      </div>
      <div className="buttons">
      <button className="btn" onClick={() => setIsBW(!isBW)}>
        B/W
      </button>
      <button className="btn" onClick={() => setIsVivid(!isVivid)}>
        Vivid
      </button>
      <button className="btn" onClick={() => setIsSepia(!isSepia)}>Sepia</button>
      </div>
      </div>
      <div className="img">
      <img
        src={image}
        style={mergeFilters.length > 0 ? { filter: mergeFilters } : {}}
      />
      </div>
      </div>
    </>
  );
};