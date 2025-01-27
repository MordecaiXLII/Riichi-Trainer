import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';
import "./i18n";

//import UkeireQuiz from './states/UkeireQuiz';
//import ScoreToPointsQuiz from './states/ScoreToPointsQuiz';
//import HandExplorer from './states/HandExplorer';
//import ReplayAnalysis from './states/ReplayAnalysis';
import MainMenu from './states/MainMenu';

ReactDOM.render(<MainMenu />, document.getElementById('root'));
serviceWorker.register();