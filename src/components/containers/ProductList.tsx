import * as React from 'react';
import {connect} from 'react-redux';
import * as Redux from 'redux';
import * as Actions from '../../actions';
import {IProductsModel, IAppState} from '../../reducers';
import InputText from '../InputText';
import {Error} from '../Error';
import {Layout, List, Panel, Button, ListItem, IconButton, Avatar} from 'react-toolbox';

export interface ProductListProps {
  products?: IProductsModel
  dispatch?: Redux.Dispatch<any>
}

const ProductList: React.StatelessComponent<ProductListProps> = (props) => {
  return <div>
    <h2>Product Database</h2>
    <List>
      {props.products.products.map((p, i) => {
        const delBtn = <IconButton icon='delete' onClick={() => props.dispatch(Actions.removeProduct(p.id)) }/>
        return <ListItem key={i}
          leftIcon = 'lens'
          rightIcon={delBtn}
          caption={p.name}>
        </ListItem>
      }) }
    </List>
    <InputText
      placeholder = 'enter a product name'
      onChange = {(value) => { props.dispatch(Actions.addAsyncProduct(value)) } }
      />
    <Error message={props.products.error} onDismiss = {() => { props.dispatch(Actions.dismissError()) } }/>
  </div>

}

const mapStateToProps = (s: IAppState) => {
  return {
    products: s.products
  }
};

export default connect(mapStateToProps)(ProductList);