import React from 'react'

import { makeStyles, Chip } from '@material-ui/core';


function ProjectCard({ item }) {
    const classes = useStyles();
    const imgSrc = '../code.png'
    return (
        <a href={item.link} rel="noopener noreferrer" target="_blank" >
        <div className={classes.containerBox}>
            <div className={classes.containerImage}>
                <img className={classes.image} width='100%' height='100%' alt='code' src={imgSrc} />
                <div className={classes.projectTitle}><h1>{item.title}</h1></div>
            </div>
           <p className={classes.name}>{item.name}</p>
            {
                item.label.map(label => {
                    return <Chip className={classes.chip} label={label} />
                })
            }
        </div>
        </a>
    )
}

const useStyles = makeStyles({
    containerBox: {
        borderRadius:20,
        boxShadow: "1px 1px 2px 2px #DBDBDB",
        height: 350,
        width: 300,
        minWidth: 300,
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight:30,
        marginBottom:150,
        transition: 'transform 420ms',
        '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: "0 0 32px  rgba(0,0,0,.1)",
        }
    },
    name:{
        display: 'flex',
        justifyContent: 'center',
        color: '#58677C',
        fontSize: 20,
        fontWeight: '500',
    },
    containerImage: {
        height: '60%',
        width: '100%',
        position: 'relative',
        textAlign: 'center',
        color: 'white',
    },
    projectTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    image: {
        filter: 'brightness(0.4)',
        borderRadius:20,
    },
    chip: {
        marginLeft: 10,
        marginBottom: 10
    },
});
export default ProjectCard;