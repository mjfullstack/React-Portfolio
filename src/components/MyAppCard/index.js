// MyAppCard/index.js //
// import React, {Component} from 'react';
import React from 'react';
import "./style.css";


// class MyAppList extends Component {
//   super(props)
//   render() {
function MyAppCard(props) { 
  return (
    <div className="col col-md-4 col-sm-6 col-12">
      <div className="card app-card">
        <div className="img-container">
          <img className="item-image"
            src={props.src}
            alt={props.name}
          />  {/* console.log("{props.appImage}: " , {props} )  */}
        </div>
        <div className="content">
          <p className="myBullet">
            <strong>Name: </strong> &nbsp;{props.name}
          </p>
          <p className="myBullet">
            <strong>Description: </strong> &nbsp; {props.shortDesc}
          </p>
          <p><span>
            <strong>GitHub Repo: </strong> &nbsp; 
            <a className="myRepo" target="_blank" rel="noopener noreferrer" href={props.repoURL}>
              {props.name}
            </a>
          </span></p>
          {/* <br /> */}
          <p><span>
            <strong>Deployed: </strong> &nbsp; 
            <a className="myDeployed" target="_blank" rel="noopener noreferrer" href={props.deployedURL}>
              Start&nbsp;{props.name}!
            </a>
          </span></p>
        </div>
      </div>
    </div>
    // </div>
  );
}
// }

export default MyAppCard;