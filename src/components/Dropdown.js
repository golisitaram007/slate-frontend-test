import React from 'react'

export default function Dropdown(props){
    const { id, data, label } = props;
    return (
        <div className="form-group row" id={id}>
            <label className="col-sm-2 col-form-label">*{ label }: </label>
            <div className="col-sm-10">
                <select className="form-control" id={id} onChange={props.handleChange}>
                    <option>Default select</option>
                    {
                        data.map((option, ind) => (
                            <option key={ind}>{option}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
