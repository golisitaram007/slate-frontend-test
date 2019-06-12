import React from 'react'
import IncidentsTableRow from './IncidentsTableRow';
import { Link } from 'react-router-dom';

export default function IncidentsTable(props) {
    const { incidents } = props;
    return (
        incidents.length ?
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Incident</th>
                        <th scope="col">Assignee</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        incidents.map((incident, ind) => (
                            <IncidentsTableRow key={ind}
                                incidentno={ ind + 1 }
                                title={incident.incident}
                                assignee={incident.assignee}
                                status={incident.status}
                            />
                        ))
                    }
                </tbody>
            </table>
            :
            <div className="card">
                <div className="card-body">
                No Incidents yet. <Link to="/create" >Click here </Link> to create one.
                </div>
            </div>
    )
}
