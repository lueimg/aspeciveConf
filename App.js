import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainScreen from './src/Containers/MainScreen.js';
import ScheduleDetails from './src/Containers/ScheduleDetails.js';
import SpeakerDetails from './src/Containers/SpeakerDetails.js';


const App = StackNavigator({
  // Get all the tabas
  MainScreen: {
    screen: MainScreen,
  },
  // after that we have to map all detail pages
  schedule_detail: {
    screen: ScheduleDetails,
  },
  speaker_details: {
    screen: SpeakerDetails,
  },
});

export default App;