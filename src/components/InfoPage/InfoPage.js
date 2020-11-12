import React from 'react';
import {connect} from 'react-redux'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>
//       Shelf Page
//     </p>
//   </div>
// );

class InfoPage extends React.Component {

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_SHELF'
    })
  }

  render() {
    return (
      <div>
        <p>Info Page</p>
        <ul>
          {this.props.reduxState.shelfReducer.map( item => {
            return <li><p>{item.description}</p><img className="itemImage" src={item.image_url} alt={item.description}></img></li>
          })}
        </ul>
      </div>
    )
  }
}

const mapStoreToProps = reduxState => ({
  reduxState
});
export default connect(mapStoreToProps)(InfoPage);
