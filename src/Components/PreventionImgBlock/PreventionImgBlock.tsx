import * as React from 'react';
import WebP from '../WebP/WebP';

interface IPreventionImgBlockProps {
  imgFileName: string;
  altTextForImg: string;
}

const PreventionImgBlock: React.SFC<IPreventionImgBlockProps> = (props) => {
  const webpPath = `../../assets/photos/webP/${props.imgFileName}.webp`;
  const normalImgPath = `../../assets/photos/normal/${props.imgFileName}.png`;

  return (
    <div className="img-container">
      <WebP normalLink={normalImgPath} webpLink={webpPath} altText={props.altTextForImg} />
      <p>Social Distancing</p>
    </div>
  );
};

export default PreventionImgBlock;
