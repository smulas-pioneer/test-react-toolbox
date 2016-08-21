jest.mock('react-dom'); // To prevent issue of duplicate env. injection

import * as actions from '../actions';

describe('actions', () => {
  it('create an add_product action', () => {
    
    const act = actions.addProduct({name:'my product'});

    expect(act.payload.name).toEqual('my product');
    
    expect(act.type).toEqual('ADD_PRODUCT'); 
    
    expect( actions.addProduct.matchAction(act)).toBeTruthy();

  });

});

