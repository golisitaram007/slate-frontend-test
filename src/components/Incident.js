import React, { Component } from 'react'

export class Incident extends Component {
  render () {
    return (
      <div className="card mt-1">
        <div className="card-body d-flex">
          <span className="flex-grow-1">{ this.props.title }</span>
          <span className="col-3 mx-4">{ this.props.assignee }</span>
          <span className="col-3 float-right">{ this.props.status }</span>
        </div>
      </div>
    )
  }
}