// MyAppsList/index.js //
// import React, {Component} from 'react';
import React from 'react';
import "./style.css";
import MyAppCard from '../MyAppCard/';
import appList from './appList.json'

// class MyAppsList extends Component {
function MyAppsList() {
  // Build the map in here
  // render() 
    return (  // returns the list called MyAppsList, a list of MyAppCard(s)
      appList.map( (item, idx) => {
        return ( // returns a single MyAppCard
          <MyAppCard
            key = {idx} // {item.id} may not be needed after all!
            src = {item.appImage}
            alt = {item.name}
            name = {item.name}
            shortDesc = {item.shortDesc}
            repoURL = {item.repoURL}
            deployedURL = {item.deployedURL}
          /> 
        )
      })
    )
}

export default MyAppsList
