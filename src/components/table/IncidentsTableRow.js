import React from 'react'

const classMapping = {
    'Resolved': 'table-success', 
    'Reject': 'table-danger',
    'Acknowledged': 'table-info',
    'Opened': 'table-primary',
    'In Progress': 'table-warning'
}
export default function IncidentsTableRow(props) {
    const { title, assignee, status, incidentno } = props;
    return (
        <tr className={ classMapping[status] }>
            <td>{ incidentno }</td>
            <td>{ title }</td>
            <td>{ assignee }</td>
            <td>{ status }</td>
        </tr>
    )
}
