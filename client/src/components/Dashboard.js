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
                    <Button outline color="primary">
                        Create Goal
                    </Button>
                    <GoalForm />
                </Col>
                <Col sm='6'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisi lacus sed viverra tellus in hac. Risus at ultrices mi tempus imperdiet nulla malesuada. Vestibulum rhoncus est pellentesque elit ullamcorper. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Et pharetra pharetra massa massa ultricies mi. Placerat orci nulla pellentesque dignissim enim sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Amet volutpat consequat mauris nunc congue nisi. Eget nunc scelerisque viverra mauris in.
                        Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Cras ornare arcu dui vivamus arcu felis bibendum ut. Pharetra pharetra massa massa ultricies mi quis. Fermentum iaculis eu non diam phasellus vestibulum lorem. Felis bibendum ut tristique et egestas. Cursus eget nunc scelerisque viverra mauris in aliquam sem. Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Sit amet mauris commodo quis imperdiet massa tincidunt nunc. Amet porttitor eget dolor morbi non. Eget nunc scelerisque viverra mauris. Aliquam id diam maecenas ultricies mi eget. Egestas pretium aenean pharetra magna ac placerat vestibulum. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Amet dictum sit amet justo donec enim diam. In hac habitasse platea dictumst vestibulum rhoncus. Malesuada pellentesque elit eget gravida cum. Sed augue lacus viverra vitae congue eu consequat. Nisi quis eleifend quam adipiscing vitae proin. Gravida quis blandit turpis cursus in hac.
                        Ac auctor augue mauris augue neque. Id donec ultrices tincidunt arcu. Volutpat consequat mauris nunc congue nisi. Urna et pharetra pharetra massa massa ultricies mi. Massa placerat duis ultricies lacus sed turpis tincidunt. Ante metus dictum at tempor commodo ullamcorper a lacus. Vulputate enim nulla aliquet porttitor. At erat pellentesque adipiscing commodo elit. Erat imperdiet sed euismod nisi porta lorem. Gravida arcu ac tortor dignissim. Dignissim diam quis enim lobortis scelerisque fermentum. A diam maecenas sed enim ut sem viverra aliquet eget. In fermentum et sollicitudin ac orci phasellus egestas. Praesent elementum facilisis leo vel fringilla est ullamcorper eget nulla. Tincidunt augue interdum velit euismod in pellentesque massa. Nam aliquam sem et tortor consequat id porta. Et magnis dis parturient montes nascetur ridiculus mus.
                     </p>
                </Col>
                <Col sm='3'>
                    <GoalList />
                </Col>
            </Row>
        </div>
    )
}
