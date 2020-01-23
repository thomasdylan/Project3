import React from 'react';
import { Progress } from 'reactstrap';

export default function Dashboard() {
    return (
        <div>
            <h3>Dashboard</h3>
            <Progress animated color="success" value="25" />
        </div>
    )
}
