import {createStore, applyMiddleware, compose, Store} from 'redux';
import root, {IAppState} from './reducers';
import middlewares from './configureMiddlewares';

function configureStore(): Store<IAppState> {
    
    let enhancers = middlewares;

    // Dev Tools compose if available
    const devTools = (window as any).devToolsExtension && (window as any).devToolsExtension();
    if (devTools) enhancers = compose(enhancers, devTools);

    // create store
    return createStore<IAppState>(root, enhancers);
    
}

export default configureStore;