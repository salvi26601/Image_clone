import React from "react";

import CheckBoxIcon from '@material-ui/icons/CheckBox';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const p1Style = {
    fontWeight: "bold",
    marginBottom: "0",
}

const p2Style = {
    color: "#a6a6a6",
}

function Doubts_card() {
    return (
        <div className="container" style={{marginBottom: "3rem"}}>
            <Card elevation={4}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6" style={{fontWeight: "bold", padding: "10px 7px 2rem 7px"}}>
                        Start your doubts session
                    </Typography>
                    
                    <div className="row" style={{marginBottom: "1rem"}}>
                        <div className="col" style={{maxWidth: "fit-content", fontWeight: "bold"}}> 
                            <span> <CheckBoxIcon color="primary" />  Start taking doubts </span>
                        </div>
                        <div className="col-md-auto">
                            <p style={p1Style}>1:45 PM</p>
                            <p style={p2Style}>Last update</p>
                        </div>
                        <div className="col">
                            <p style={p1Style}>10</p>
                            <p style={p2Style}>Doubts available</p>
                        </div>
                    </div>

                    <Typography variant="subtitle1" component="div" color="secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant justo,
                        dictum adipiscing enim diam habitant.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Doubts_card;