import * as React from 'react';
import './NewsArticle.css';
import WebP from '../WebP/WebP';
import NewsPlaceHolderNormal from '../../assets/photos/normal/news-placeholder.jpg';
import NewsPlaceHolderWebp from '../../assets/photos/webP/news-placeholder.webp';

interface INewsArticleProps {
  title: string;
  urlToImage: string | null | undefined;
  urlToNews: string;
  author: string | null | undefined;
  date: string;
}

const NewsArticle: React.SFC<INewsArticleProps> = (props) => {
  let newsImg: any;

  if (props.urlToImage) {
    newsImg = <img src={props.urlToImage} alt="News Image" />;
  } else {
    newsImg = <WebP normalLink={NewsPlaceHolderNormal} webpLink={NewsPlaceHolderWebp} altText="News Image" />;
  }

  return (
    <a href={props.urlToNews} target="_blank">
      <div className="news-article-container">
        <div className="news-article-img">{newsImg}</div>
        <div className="news-info-container">
          <div className="news-info-title">
            <h3>{props.title}</h3>
          </div>
          <div className="news-info-details">
            <h5>{props.author}</h5>
            <h5>{props.date}</h5>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsArticle;
