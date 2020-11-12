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
  state = {
    item: {
      description: '',
      image_url: ''
    }
  }

  componentDidMount = () => {
    this.props.dispatch({
      type: 'FETCH_SHELF'
    })
  }
  
  handleChangeFor = (event, input) => {
    this.setState({
      item: {
        ...this.state.item,
      [input]: event.target.value
      }
    });
    console.log('state', this.state);
  }

  addToShelf = () => {
    console.log('clicked', this.state);
    this.props.dispatch({type: 'ADD_SHELF_ITEM', payload: this.state})

  }

  deleteItem = (event, param) => {
    console.log(event, param)
    let itemdata = {
      id: param
    }
    this.props.dispatch({
      type: 'DELETE_ITEM',
      payload: itemdata
    })
  }

  // function onclick( ){

  //   let event;
  //   function(event){
  //     this.deleteitem(event){

  //     }
  //   }
  // }

  render() {
    return (
      <div>
        <p>Info Page</p>
        <input type="text" placeholder="description" onChange={(event) => this.handleChangeFor(event, 'description')}/>
        <input type="text" placeholder="image url" onChange={(event) => this.handleChangeFor(event, 'image_url')}/>
        <button onClick={this.addToShelf}>Add To Shelf</button>
        <ul>
          {this.props.reduxState.shelfReducer.map( item => {
            return (
            <li>
              <p>{item.description}</p>
              <img className="itemImage" src={item.image_url} alt={item.description}/>
              <button onClick={(event) => this.deleteItem(event, item.id)}>Delete From Shelf</button>
            </li>
            );
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
