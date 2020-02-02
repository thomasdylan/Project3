import React, { useState } from 'react';
import { useAuth0 } from "../react-auth0-spa";
import { Row, Col, Button } from 'reactstrap';
import GoalList from './GoalList';
import GoalForm from './GoalForm';

export default function Dashboard() {
    const { user } = useAuth0();
    const [newGoal, setNewGoal] = useState(false)
    return (
        <div className= "container">
            <Row>
                <Col sm='3'>
                    <Button outline color="primary">
                        Create Goal
                    </Button>
                </Col>
                <Col sm='6'>
                    <GoalForm  newGoalAdded={setNewGoal}/>
                </Col>
                <Col sm='3'>
                    <GoalList newGoalAdded={newGoal} resetNewGoal={setNewGoal}/>
                </Col>
            </Row>
        </div>
    )
}
