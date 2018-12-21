// MyAppCard/index.js //
import React, {Component} from 'react';
import "./style.css";


class MyAppCard extends Component {
  constructor(props) {
    super(props);
  };
    { return (
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
    render() 

}

export default MyAppCard;