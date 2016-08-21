import {Middleware, applyMiddleware} from 'redux';
import checkedPromise, {CheckedPromiseMiddlewareOptions} from 'redux-helper';
import thunk from 'redux-thunk';
import * as actions  from './actions';

function configureCheckedPromiseMiddleware() {
    const cpmOptions: CheckedPromiseMiddlewareOptions = {
        onStart: (msg: string) => ({ type: 'LOAD_MESSAGE', message: msg }),
        onEnd: () => ({ type: 'LOAD_MESSAGE', message: '' }),
        onError: (msg: string) => actions.showError(msg)
    }

    return cpmOptions;
}

const configureAll = (): Middleware[] => {
    const configuredCpm = checkedPromise(configureCheckedPromiseMiddleware());
    const middlewares = [configuredCpm, thunk];

    return middlewares;
}

export default applyMiddleware(...configureAll());