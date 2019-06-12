import React from 'react'

export default function Input(props) {
    return (
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">*{ props.label }: </label>
            <div className="col-sm-10">
                <input type="text" 
                        className="form-control" 
                        id={ props.id } 
                        placeholder={ props.label }
                        onChange={props.handleChange} />
            </div>
        </div>
    )
}
