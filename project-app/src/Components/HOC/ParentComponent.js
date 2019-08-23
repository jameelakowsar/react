import React from 'react';
import ExHOCComponent from './ExHOCComponent';

class ParentComponent extends React.Component {
    render() {
        console.log('in Parent Component');
        return (
            <div>
                <ExHOCComponent
                    name="IRON MAN"
                    id="1010"
                    nickName="JARVIS"
                    job="Saving world"
                />
            </div>
        );
    }
}
export default ParentComponent;