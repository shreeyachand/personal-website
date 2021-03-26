import React from 'react';
import IFrame from 'react-iframe';
import Content from '../components/Content';
function Card(props) {
    return (
        <>
        <Content>
            <h4><li>{props.title}</li></h4>
                {props.url != null && 
                <br></br> &&
                <IFrame
                url={props.url}
                width="100%" 
                height="420px" 
                className="myClassname"
                display="initial"
                position="center"
                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
                />
                }
            <p>{props.add}</p>
            {props.list > props.id + 1 && <br></br>}
        </Content>
        </>
    );
}

export default Card;