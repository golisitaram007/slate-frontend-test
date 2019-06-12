import React from 'react';
import { mapStateWithProps } from '../../lib/rsflux';
import store from '../store';

const Alert = (props) => {
    const { alert, incidents } = props.state;
    return (
        <div>
        {
            alert ?
                <div id="alert">
                    <div className="alert alert-primary float-right mr-3" role="alert">
                        New incident created. Total incidents : &nbsp;
                        <span className="badge badge-primary">
                            { incidents.length }
                        </span>
                    </div>
                </div>
                :
                null
        }
        </div>
        
    )
}

export default mapStateWithProps(store)(Alert);
