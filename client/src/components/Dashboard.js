import React from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Row, Col, Button } from 'reactstrap';
import GoalList from './GoalList';
import GoalForm from './GoalForm';

export default function Dashboard() {
    const { user } = useAuth0();
    return (
        <div className= "container">
            <Row>
                <Col sm='3'>
                    {/* <Button outline color="primary">
                        Create Goal
                    </Button> */}
                </Col>
                <Col sm='6'>
                    <GoalForm />
                </Col>
                <Col sm='3'>
                    <GoalList />
                </Col>
            </Row>
        </div>
    )
}
