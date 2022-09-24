import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Student_Card() {
    return (
        <div className="container" style={{textAlign: "center"}}>
            <Card variant="outlined">
                <CardContent>
                    <AccountCircleIcon color="primary" style={{marginBottom: "1rem"}} />
                    <Typography style={{fontWeight: "bold"}}>
                        Name of student
                    </Typography>
                    <Typography variant="subtitle2" style={{color: "#a6a6a6", paddingBottom: "12px"}} component="div">
                        Student
                    </Typography>
                    <Typography variant="body2" style={{fontWeight: "bolder"}}>
                        87.8%
                    </Typography>
                    <Typography variant="subtitle2" style={{color: "#a6a6a6"}} component="div">
                        Current Score
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Student_Card;