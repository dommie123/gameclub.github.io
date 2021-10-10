import React from 'react';
import { store } from '../store';
import { addAlert, removeAlert } from '../actions/ui-actions';
import Alert from '@material-ui/lab/Alert';

export const showError = (message) => {
    const dispatch = store.dispatch();
    dispatch(addAlert(<Alert severity="error" onClose={() => {dispatch(removeAlert())}}>{message}</Alert>))
}

export const showWarning = (message) => {
    const dispatch = store.dispatch();
    dispatch(addAlert(<Alert severity="warning" onClose={() => {dispatch(removeAlert())}}>{message}</Alert>))
}