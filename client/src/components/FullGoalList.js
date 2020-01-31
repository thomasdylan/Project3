import React, {useState, useEffect} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useAuth0} from "../react-auth0-spa";
import {
    Card,
    CardTitle,
    Row,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, 
    Button
} from 'reactstrap';
import API from '../utils/API';
import FormUpdate from '../components/FormUpdate';

export default function FullGoalList() {
    const {user} = useAuth0();
    const [userGoals, setUserGoals] = useState([]);
    const [goalUser] = useState(user.sub);

    useEffect(() => {
        API
            .getGoal(goalUser)
            .then(res => {
                setUserGoals(res.data);
            });
    }, []);

    return (
        <div className="user-goals-container">
            <Row sm="12">
                {userGoals.map(goal => {
                    return (
                        <Card body className="full-goals">
                            <Button className="goal-delete-button" color="danger"><strong>X</strong></Button>
                            <CircularProgressbar
                                className="goal-percentage"
                                circleRatio={0.75}
                                value={((goal.amount / goal.goalAmount).toFixed(2)) * 100}
                                text={`${ ((goal.amount / goal.goalAmount).toFixed(2)) * 100}%`}
                                styles={buildStyles({
                                rotation: 1 / 2 + 1 / 8,
                                strokeLinecap: "butt",
                                trailColor: "#eee"
                            })}/>
                            <CardTitle>{goal.title}</CardTitle>
                            <UncontrolledDropdown setActiveFromChild>
                                <DropdownToggle tag="a" className="nav-link"> 
                                    <Button color="success">Update</Button>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem header><FormUpdate key={goal._id}/></DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Card>
                    )
                })}
            </Row>
        </div>
    )
}
