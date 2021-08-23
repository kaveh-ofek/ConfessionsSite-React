import Header from "../components/Header";
import Space from "../components/Space";
import React, { useState } from "react";
import { FaUserAstronaut, FaRegComments } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import "../CssFiles/NewConfessionsStyling.css"

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

import DraftsOutlined from '@material-ui/icons/DraftsOutlined'


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
  

const NewConfessionPage = () => {

    const classes = useStyles();
    const history = useHistory();

    const [enteredConfession, setNewConfession] = useState("");
    const [enteredName, setNewName] = useState("");

    const nameChangeHandler = (event) => {
        setNewName(event.target.value);
    }

    const confessionChangeHandler = (event) => {
        setNewConfession(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setNewConfession('');
        setNewName('');
        console.log(enteredConfession);
        console.log(enteredName);

    }

    const handleMoveToConfessions = () => {
        history.push("/show_confessions");
    }

    return (
        <div>
            <Header></Header>
            <Space></Space>
            <div style={{
            position: "absolute",
            left: "80%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            }}>
            <FaUserAstronaut color="#3f3f3f" size="23rem"></FaUserAstronaut>
            </div>

            <form className={classes.root} noValidate autoComplete="off" onSubmit={submitHandler}>
                <div className='name-line'>
                <TextField id="new-name" label="Anonymous Name" type="text"
                 onChange={nameChangeHandler} value={enteredName}/>
                </div>
                <div className='confession-line'>
                <TextField id="new-confession" label="Your Confession" type="text" helperText="No Offensive Language Allowed!"
                    multiline  onChange={confessionChangeHandler} value={enteredConfession}/>
                </div>
                <div className='submit-button-line'>
                <Button startIcon={<DraftsOutlined></DraftsOutlined>}  onClick={submitHandler}
                 type='submit' variant="outlined" color="primary"> Submit </Button>
                </div>
            </form>

            <div>
            <FaRegComments className='clickable-to-confessions' color="#3f3f3f" size="6rem" onClick={handleMoveToConfessions}></FaRegComments>
            </div>
        </div>
    )
}
export default NewConfessionPage;