import React, { useState, useEffect } from 'react'

import { makeStyles, Grid, CircularProgress } from '@material-ui/core';

import { Projects, Skills, Profile } from './data'
import { BlogCard, SkillCard, ProjectCard, ProfileCard } from './components'

function App() {
  const [blog, setBlog] = useState([])
  const [loading, setLoading] = useState(true)
  const classes = useStyles();

  useEffect(() => {
    fetchBlog();
  }, [])

  function fetchBlog() {
    fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${Profile.mediumSlug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.items)
        setLoading(false)
      })
  }

  return (
    <div>

      {/* Profile */}
      <ProfileCard
        name={Profile.name}
        title={Profile.title}
        profileImage={Profile.image}
        linkedin={[Profile.contact.linkedin.title, Profile.contact.linkedin.link]}
        github={[Profile.contact.github.title, Profile.contact.github.link]}
        email={[Profile.contact.email.title, Profile.contact.email.link]} />

      {/* Blogs from Medium */}
      <h1 className={classes.mainTitle}>Bloglar</h1>
      {loading ? <CircularProgress className={classes.progress} /> :
        <div className={classes.blogContainer} >
          {blog.slice(0, 4).map((item) => { return <BlogCard title={item.title} url={item.link} description={item.description} date={item.pubDate} /> })}
          {!loading && <BlogCard title='Tümünü Gör' url={`https://medium.com/${Profile.mediumSlug}`} description='' date='' />}
          <div style={{ flex: '0 0 auto', marginLeft: -30, width: 25 }} />
        </div>}

      {/* Skills */}
      <h1 className={classes.mainTitle}>Beceriler</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        {Skills.map(item => { return <SkillCard item={item} /> })}
      </Grid>

      {/* Projects */}
      <h1 className={classes.mainTitle}>Projeler</h1>
      <Grid container direction="row" justify="center" alignItems="center">
        {Projects.map(item => { return <ProjectCard item={item} /> })}
      </Grid>

    </div>
  )
}

const useStyles = makeStyles({

  progress: {
    display: 'block',
    color: '#58677C',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  mainTitle: {
    display: 'flex',
    justifyContent: 'center',
    color: '#58677C',
    marginTop: 120,
    marginBottom: 120
  },
  blogContainer: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
    overflowY: 'hidden'
  },

});

export default App;


