import * as React from 'react';
import {Dialog} from 'react-toolbox/lib/dialog';

export interface ErrorProps {
    message?: string,
    onDismiss?: () => void;
}

export const Error = (props: ErrorProps) => {

    const dismiss = () => {
        if (props.onDismiss) props.onDismiss();
    }

    const actions = [
        {label:'Close',onClick:dismiss}
    ];
    if (props.message) {
        return <Dialog
            active={true}
            actions= {actions}
            title='Error'
            onEscKeyDown={dismiss}
            >
            <p>{props.message}</p>
        </Dialog>
    }
    return null;
}