interface ISource {
  id?: string;
  name: string;
}

interface INews {
  source: ISource;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

export default INews;
