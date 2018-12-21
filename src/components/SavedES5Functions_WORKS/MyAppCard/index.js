// MyAppCard/index.js //
// import React, {Component} from 'react';
import React from 'react';
import "./style.css";


// class MyAppList extends Component {
//   super(props)
//   render() {
function MyAppCard(props) { 
  return (
    <div className="card">
    <div className="img-container">
      <img
        src={props.appImage}
        alt={props.name}
      />
  </div>
    <div className="content">
        <p className="myBullet">
          <strong>Name </strong> &nbsp;{props.name}
        </p>
        <p className="myBullet">
          <strong>Description: </strong> &nbsp; {props.shortDesc}
        </p>
        <p className="myBullet">
          <strong>GitHub Repo: </strong> &nbsp; {props.repoURL}
        </p>
        <p className="myBullet">
          <strong>Deployed: </strong> &nbsp; {props.deployedURL}
        </p>
    </div>
  </div>
  );
}
// }

export default MyAppCard;