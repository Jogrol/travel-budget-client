import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function UpdateExpenseForm (props) {

    return(
        <div style={{float: 'left'}}>
        <IconButton onClick={props.handleClickOpen}> <FontAwesomeIcon icon="edit" /></IconButton>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <Card style={{display: 'inline-block'}}>
            <CardContent  >
            <IconButton  style={{float: 'right'}} onClick={props.handleClickClose}><FontAwesomeIcon icon="times" /></IconButton>
                <Typography component="h4" variant="h5" gutterBottom>
                    What would you like to change?
                </Typography>
                <form onSubmit={props.onSubmit} >
                    <TextField
                        id="description"
                        label="description"
                        placeholder="description"
                        name="description" 
                        value={props.values.description}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        id="ammount"
                        label="ammount"
                        placeholder="ammount"
                        name="ammount" 
                        value={props.values.ammount}
                        onChange={props.onChange}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">€</InputAdornment>,
                        }}
                    />
                    <br/>
                    <Button type="submit" variant="contained">Update</Button>
                </form>
                </CardContent>
            </Card>
        </Dialog>
    </div>
    )
} 
