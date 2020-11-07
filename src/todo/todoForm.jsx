import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'


export default props => (
    <div className="todoForm">
        <Grid cols="12 9 10">
            <input type="text" id="description" className="form-control" 
                placeholder="Adicione ume tarefa"></input>
        </Grid>
        <Grid cols="12 3 2">
            <IconButton button="primary" icon="plus" onClick={ props.handleAdd }></IconButton>
        </Grid>
    </div>
)