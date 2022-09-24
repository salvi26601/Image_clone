import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import StudentCard from './Student_Card';

const p1Style = {
    color: "#a6a6a6",
    marginBottom: "0",
}

function DataStruct_Card() {
    return (
        <div className="container">
            <Card elevation={4}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <div className="row">
                        <div className="col">
                            <Typography component="div" variant="h6" style={{fontWeight: "bold", padding: "10px 7px 2rem 10px"}}>
                                Data Structure in C++
                            </Typography>

                            <div style={{paddingLeft: "10px"}}>
                                <p style={p1Style}><u>DOUBTS</u></p>
                                <p style={{fontWeight: "bold"}}>Questions/concept related</p>
                                <p style={p1Style}>Need more clarity</p>
                                <p style={p1Style}>?</p>
                                <div style={{height: "2rem"}}></div>
                            </div>
                        </div>

                        <div className="col">
                            <StudentCard />
                        </div>
                    </div>

                    <div className="container" style={{paddingLeft: "7px"}}>
                        <p style={p1Style}><u>TOPIC</u></p>
                        <p style={{fontWeight: "bold"}}>Lecture 14: Priority Queues</p>
                        <p style={{color: "#a6a6a6", marginBottom: "2rem"}}>Running Median</p>

                        <div>
                            <Typography variant="subtitle1" component="div" style={p1Style}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant justo,
                                dictum adipiscing enim diam habitant.
                            </Typography>
                            <p style={{color: "#ff1a1a", marginBottom: "2rem"}}>Read More</p>
                        </div>

                        <div className="container" style={{paddingLeft: "5px"}}>
                            <div className="row">
                                <div className="col-6">
                                    <p style={p1Style}>Accept within</p>
                                    <p style={{color: "#006666", fontWeight: "bold"}}>56s</p>
                                </div>
                                <div className="col-3">
                                    <Button variant="outlined" size="medium" color="primary"> Reject </Button>
                                </div>
                                <div className="col-3">
                                    <Button variant="contained" size="medium" color="primary"> Accept </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default DataStruct_Card;