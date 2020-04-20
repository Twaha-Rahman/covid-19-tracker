import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import mapStateToProps from '../../utilities/mapStateToProp';
import './News.css';
import newsApiKey from '../../apiKeys/newsApiKey';

import IStore from '../../interfaces/IStore';
import INews from '../../interfaces/INews';

interface INewsProps extends RouteComponentProps {
  store: IStore;
  dispatch: any;
}

class News extends React.Component<INewsProps, {}> {
  constructor(props: any) {
    super(props);
  }

  public async componentDidMount() {
    const numberOfNewsToLoad = 10;

    const data = await fetch(
      `https://newsapi.org/v2/everything?q=COVID&language=en&sortBy=publishedAt&apiKey=${newsApiKey}&pageSize=${numberOfNewsToLoad}&page=1`
    );
    const parsedData = await data.json();

    if (parsedData.status === 'ok') {
      // dispatch and store
      this.props.dispatch({
        type: 'addNews',
        news: parsedData.articles,
      });
    }
  }

  public render() {
    if (this.props.store.addNews.length > 0) {
      const newsArr: any[] = [];
      this.props.store.addNews.forEach((news: INews) => {
        newsArr.push(news);
      });
      console.log(newsArr);
    }

    return (
      <div>
        <h1>Lorem ipsum</h1>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(News));
