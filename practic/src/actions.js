import * as actions from './actionTypes';

export function bugAdded(description)
{
    returb {
        type: actions.BUG_ADDED,
        payload: {
            description: "Bug1"
        }
    };
}