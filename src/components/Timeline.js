
import React, { Component } from 'react';
import "./Timeline.css";
import PopUp from "./PopUp";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';class Timeline extends Component {  

    constructor(props) {
        super(props);
        this.state = {
            openPopup:false,
            setOpenPopup:false,
            title:""
        }
    }

    render() {
       

        return (
            
            <div className="timelineContainer">   
                <div className="timelineInner"></div>
                    <div className="timelineBar"></div>

            <div className="buttonGrp3">
                
                    <div className="buttond42b564f">                    
                        <div className="spectrummetadatae694b469">*</div>
                        <button className="timeline-btn"  onClick={() =>this.setState({openPopup:true,setOpenPopup:true,title:"Add Audio"})}>Add Audio</button>
                    </div>
                    <div className="button6ef90b33">                    
                        <div className="spectrummetadata6e60ff4c">*</div>
                        <button className="timeline-btn">Audio1</button>
                    </div>
                    <div className="button3c1be55e">                    
                        <div className="spectrummetadata554ab9b9">*</div>
                        <button className="timeline-btn">Audio2</button>
                    </div>
                    <div className="buttone08c0b8f">                    
                        <div className="spectrummetadata3a812985">*</div>
                        <button className="timeline-btn">Audio3</button>
                    </div>

            </div>
            <div className="buttonGrp2">
                    <div className="button76b2f0eb">                    
                        <div className="spectrummetadata7f3e2093">*</div>
                        <button className="timeline-btn"  onClick={() =>this.setState({openPopup:true,setOpenPopup:true,title:"Add VO Layer"})}>VO Layer</button>
                    </div>
                    <div className="button1d508bdc">                    
                        <div className="spectrummetadata6c68bf3f">*</div>
                        <button className="timeline-btn">VO1</button>
                    </div>
                    <div className="buttonb9debe8f">                    
                        <div className="spectrummetadata2216b00a">*</div>
                        <button className="timeline-btn">VO2</button>
                    </div>
                    <div className="button526ca000">                    
                        <div className="spectrummetadata928fad5a">*</div>
                        <button className="timeline-btn">VO3</button>
                    </div>

            </div>
          
            <div className="buttonGrp1">
                    <div className="button">                    
                        <div className="spectrummetadata">*</div>
                        <button className="timeline-btn " onClick={() =>this.setState({openPopup:true,setOpenPopup:true,title:"Add Scene"})}>Add Scene</button>
                    </div>
                    <div className="button91a13463">                    
                        <div className="spectrummetadata9d80d653">*</div>
                        <button className="timeline-btn">Scene1</button>
                    </div>
                    <div className="buttond4baa101">                    
                        <div className="spectrummetadata6374a020">*</div>
                        <button className="timeline-btn">Scene2</button>
                    </div>
                    <div className="button5d5055c6">                    
                        <div className="spectrummetadata32609780">*</div>
                        <button className="timeline-btn">Scene3</button>
                    </div>
                
            </div>


            <PopUp
            openPopup = {this.state.openPopup}
            setOpenPopup = {this.state.setOpenPopup}
            title = {this.state.title}
            >

                        <TextField
                            id="filled-full-width"
                            style={{ margin: 8 }}
                            placeholder="Enter Source"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                        />

                        <Divider variant="middle" />

                            <input
                            className="upload-input"
                            id="contained-button-file"
                            multiple
                            type="file"
                            />
                            <span>(or)</span>
                            <label htmlFor="contained-button-file">
                                <Button variant="contained" color="primary" component="span">Upload</Button>
                            </label>

                            <div className="submit-btn">
                                <Button size="large" variant="contained" color="Secondary" component="span">Submit</Button>
                            </div>


                            <div className="close-btn">
                            <Button  variant="outlined" color="primary"  onClick={() => this.setState({openPopup: false,setOpenPopup:false})}>Close</Button>
                            </div>
            </PopUp>

        </div>
                   
         
        );
    }
}

export default Timeline;