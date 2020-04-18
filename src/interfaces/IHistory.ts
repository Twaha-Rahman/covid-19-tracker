import ILocation from './ILocation';

interface IHistory {
  action: string;
  length: number;
  block: any;
  createRef: any;
  go: any;
  goBack: any;
  goForward: any;
  listen: any;
  location: ILocation;
  push: any;
  replace: any;
}

export default IHistory;
