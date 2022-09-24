import React from "react";

import Card from '@material-ui/core/Card';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

function Carousel() {
    return (
        <div className="container">
            <div>
                <h5 style={{margin: "20px 7px 3rem 1rem", fontWeight: "bold"}}>
                    Active Doubts
                </h5>
                
                <div className="row" style={{height: "10rem"}}>
                    <div className="col-2" style={{maxWidth: "10%", margin: "auto"}}> <NavigateBeforeIcon /> </div>
                    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column'}} className="col-4" style={{margin: "0 1rem"}}></Card>
                    <Card variant="outlined" sx={{ display: 'flex', flexDirection: 'column'}} className="col-4" style={{margin: "0 1rem"}}></Card>
                    <div className="col-2" style={{maxWidth: "10%", margin: "auto"}}> <NavigateNextIcon /> </div>
                </div>
            </div>
        </div>
    );
}

export default Carousel;