import * as React from 'react';
import {connect} from 'react-redux';
import * as Redux from 'redux';
import * as Actions from '../../actions';
import {getListItems, IProductsModel, IAppState} from '../../reducers'
import {Layout, List, Panel, IconButton,ListItem,Dropdown} from 'react-toolbox';

//import './listitems.scss';


export interface ListItemProps {
    items?: { id: string, name: string, checked: boolean }[];
    products?: IProductsModel;
    dispatch?: Redux.Dispatch<any>;
}

const ListItems: React.StatelessComponent<ListItemProps> = (props) => {

    const unselectedProducts = props.products.products.filter(p=>props.items.map(p=>p.id).indexOf(p.id) < 0);

    const addItem = (eventKey:number) => {
        props.dispatch(Actions.addListItem(unselectedProducts[eventKey].id));
    }

    const toggleItem = (id:string, e:Event) => {
        e.stopPropagation();
        props.dispatch(Actions.toggleListItem(id));
    }

    return <div>
        <h2>Current List</h2>
        <List>
            {props.items.map((p, i) => {
                const checkIcon = p.checked ? 'check_box' :'check_box_outline_blank'
                const checkBtn = <IconButton icon={checkIcon} onClick={toggleItem.bind(this,p.id)}/>
                const delBtn = <IconButton icon='delete' onClick={()=> props.dispatch(Actions.removeListItem(p.id))}/>
 
                return <ListItem key={i}
                    leftIcon={checkBtn}
                    rightIcon={delBtn} 
                    caption ={p.name}
                    onClick = {toggleItem.bind(this,p.id)}
                >
                </ListItem>
            }) }
        </List>
        { unselectedProducts.length > 0 &&
            <Dropdown
                label ='Select a product to add to the list'
                auto = {true}
                source = {unselectedProducts.map((p, i) => ({value:i, label:p.name}))} 
                onChange = {addItem}
            />
        }
    </div>
}

const mapStateToProps = (s: IAppState) => {
    return {
        items: getListItems(s),
        products: s.products
    }
};

export default connect(mapStateToProps)(ListItems);




