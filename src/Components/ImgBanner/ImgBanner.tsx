import * as React from 'react';
import './ImgBanner.css';
import { Link } from 'react-router-dom';

interface IImgBannerProps {
    title: string;
    description: string;
    imgJSX: any;
}

const ImgBanner: React.SFC<IImgBannerProps> = props => {
    console.log(props);

    return (
        <Link to="/self-test"><div className="img-banner">
            {props.imgJSX}
            <div className="img-banner-info">
                <h2>{props.title}</h2>
                <h4>{props.description}</h4>
            </div>
        </div></Link>

    );
};

export default ImgBanner;
