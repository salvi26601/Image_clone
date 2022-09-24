import React from "react";
import './Header_Card.css';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

function Header_Card(props) {
    return (
        <div className="container card_div">
            <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column' }} className="card_container">
                <div className="row">
                    <div className="col">
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5" color="primary" className="heading">
                                {props.heading}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div" style={{padding: "7px",fontWeight: "bold", width: "max-content"}}>
                                {props.subHead}
                            </Typography>
                        </CardContent>
                    </div>

                    <div className="col icon_div">
                        <IconButton color="primary"> {props.icon} </IconButton>
                    </div>
                </div>       
            </Card>
        </div>
    );
}

export default Header_Card;