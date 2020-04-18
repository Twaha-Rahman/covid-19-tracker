import * as React from 'react';

interface IWebPProps {
  webpLink?: string | null | undefined;
  normalLink: string;
  altText: string;
}

const WebP: React.SFC<IWebPProps> = (props) => {
  return (
    <picture>
      <source type="image/webp" srcSet={props.webpLink || ''} />
      <source type="image/webp" srcSet={props.normalLink} />
      <img src={props.normalLink} alt={props.altText} />
    </picture>
  );
};

export default WebP;
