'use client'
//1. import area
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React from 'react'
import { Box, Button, Card, CardMedia, Container, CssBaseline, Divider, Grid, IconButton, Link, Paper, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"

//2. define area
// constant define for nav link
const Tobject = createTheme();
const CMP = [
     {
          name:"Technology"
     },
     {
          name:"Design"
     },
     {
          name:"Culture"
     },
     {
          name:"Business"
     },
     {
          name:"Politics"
     },
     {
          name:"Opinion"
     },
     {
          name:"Science"
     },
     {
          name:"Health"
     },
     {
          name:"Style"
     },
     {
          name:"Travel"
     }
]
function Blog() {
  return (
     //   ThemePrivider for Control page Stylings  
    <ThemeProvider theme={Tobject}>
           {/* CssBaseline for remove default margin padding of boby component  */}
          <CssBaseline />
           {/* Container component start */}
          <Container maxWidth="lg">

                {/* Header component start  */}
               <Toolbar component="header" sx={{ borderBottom: 1, borderColor:"divider" }}>
                    <Button size="small" sx={{ fontWeight:700 }}>Subscribe</Button>
                    <Typography component="h2" variant="h4" sx={{ flex:12 }} align="center" noWrap>
                         Blog 
                    </Typography>
                    <IconButton sx={{ flex:1 }}>
                         <SearchIcon />
                    </IconButton>
                    <Button variant="outlined" size="small" sx={{ fontWeight:700 }}>Sign Up</Button>
               </Toolbar>
               <Toolbar component="nav" sx={{ justifyContent:"space-between" }} >
                    {
                    CMP.map((cv,idx,arr)=>{
                         return  <Link href="/" key={idx} sx={{ color:"#212121" }} >
                         {cv.name}</Link>
                    })
                    }
               </Toolbar>
                {/* Header Component finished  */}

               {/* main component start here  */}
               <Box component="main">

                     {/* Paper component elevation for shadow */}
                    <Paper elevation={4}
                         sx={{
                         backgroundImage:"url('https://images.unsplash.com/photo-1518599904199-0ca897819ddb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDMxNjMyODA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080')",
                         backgroundSize:"cover",
                         backgroundPosition:"center",
                         backgroundRepeat:"no-repeat",
                         color:"#fff",
                         width:"100%",
                         pt:6, pb:6, pl:6,
                         mb:6
                         }}>
                         <Grid container>
                              <Grid item md={6}>
                                   <Typography component="h1" variant="h2" sx={{  }}>
                                        Title of a longer featured blog post
                                   </Typography>
                                   <Typography sx={{ mt:2, mb:2, fontSize:23 }}>
                                        Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.
                                   </Typography>
                                   <Link href="/" noWrap>Continue Reading...</Link>
                              </Grid>
                         </Grid>
                    </Paper>
                    <Grid container spacing={4} sx={{mb:5}}>
                         <Grid item md={6}>
                                   <Paper elevation={5}>
                                        <Grid container>
                                                  <Grid item sm={8} sx={{ p:2 }}>
                                                       <Typography component="h4" variant="h4">Featured Post</Typography>
                                                       <Typography component="h5" variant="h5">Nov 12</Typography>
                                                       <Typography sx={{ mt:1, mb:1 }}> Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.</Typography>
                                                       <Link>Continue reading...</Link>
                                                  </Grid>
                                                  <Grid item sm={4}>
                                                       <Card>
                                                       <CardMedia
                                                            component="img"
                                                            image='https://images.unsplash.com/photo-1541449540793-66e313267a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDMxNzMxNDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                                                            height="230px"
                                                       >
                                                       </CardMedia>
                                                       </Card>
                                                  </Grid>
                                        </Grid>
                                   </Paper>
                         </Grid>
                         <Grid item md={6}>
                             <Paper elevation={5}>
                                 <Grid container>
                                        <Grid item sm={8} sx={{ p:2 }}>
                                             <Typography component="h4" variant="h4">Title Post</Typography>
                                             <Typography component="h5" variant="h5">Nov 10</Typography>
                                             <Typography sx={{ mt:1, mb:1 }}> Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis.</Typography>
                                             <Link>Continue reading...</Link>
                                        </Grid>
                                        <Grid item sm={4}>
                                             <Card>
                                                <CardMedia
                                                  component="img"
                                                  image='https://images.unsplash.com/photo-1541449540793-66e313267a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d2FsbHBhcGVyc3x8fHx8fDE3MDMxNzMxNDA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
                                                  height="230px"
                                                 >
                                                </CardMedia>
                                             </Card>
                                        </Grid>
                                 </Grid>
                             </Paper>
                         </Grid>
                    </Grid>
                     
                     {/* Main post area start */}
                    <Grid container spacing={8}>
                         <Grid item lg={8} md={8} sm={8}>
                              <Typography component="h4" variant="h5" sx={{mb:2}}>From the firehose</Typography>
                              <Divider />
                              <Typography component="h3" variant="h4" sx={{mt:2}}>Sample blog post</Typography>
                              <Typography variant="h6" sx={{mt:2, mb:2}}>April 1, 2023 by Olivier</Typography>
                              <Typography gutterBottom >
                                   This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js.</Typography>
                              <Typography sx={{mt:3, mb:3}}>
                                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.

                              </Typography>
                              <Typography gutterBottom>
                                   Nullam quis risus eget urna mollis <strong> Nullam quis risus eget urna mollis </strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                              </Typography>
                              <Typography variant="h5" sx={{mt:2, mb:2}}>Heading</Typography>
                              <Typography>
                                   Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                              </Typography>
                              <Typography sx={{mt:2, mb:2}}>Sub-Heading 1</Typography>
                              <Typography>
                                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                              </Typography>
                              <Typography sx={{mt:2, mb:2}}>Sub-Heading 2</Typography>
                              <Typography sx={{mb:2}}>
                                   Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                              </Typography>
                              <Typography component="li">
                                   Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                              </Typography>
                              <Typography component="li">
                                 Donec id elit non mi porta gravida at eget metus.
                              </Typography>
                              <Typography component="li">
                                 Nulla vitae elit libero, a pharetra augue.
                              </Typography>
                              <Typography sx={{mt:2, mb:2}}>
                                 Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.
                              </Typography>
                              <Typography component="ol">
                                   <Typography component="li">
                                      Vestibulum id ligula porta felis euismod semper.
                                   </Typography>
                                   <Typography component="li">
                                       Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                   </Typography>
                                   <Typography component="li">
                                       Maecenas sed diam eget risus varius blandit sit amet non magna.
                                   </Typography>
                              </Typography>
                              <Typography sx={{mt:2, mb:2}}>
                                 Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.
                              </Typography>
                         </Grid>  
                          {/* Main post area finished here  */}

                           {/* Aside component start  */}
                         <Grid item lg={4} md={4} sm={12}>
                             <Box component="aside" sx={{bgcolor:"#EEEEEE", p:2}}>
                                   <Typography component="h3" variant="h5">About</Typography>
                                   <Typography sx={{fontSize:17, mt:1}}>
                                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.                   
                                   </Typography>
                             </Box>
                             <Box>
                                <Typography variant="h5" sx={{mt:2, mb:2}}>Archives</Typography>
                                <Link>March 2023</Link> <br />
                                <Link>February 2023</Link> <br />
                                <Link>January 2023</Link> <br />
                                <Link>November 2022</Link> <br />
                                <Link>December 2021</Link> <br />
                                <Link>Octomber 2020</Link> <br />
                                <Link>September 2019</Link> <br />
                                <Link>Aguast 2015</Link> <br />
                                <Link>Apil 2010</Link> <br />
                                <Link>May 2009</Link> <br />
                                <Link>July 2005</Link> <br />
                                <Link>June 2000</Link>
                                <Typography variant="h5" sx={{mt:4, mb:1}}>Social</Typography>
                                <Link>
                                      <IconButton> <GitHubIcon /> </IconButton>
                                      Github
                                 </Link> <br />
                                <Link>
                                     <IconButton> <TwitterIcon /> </IconButton>
                                      Twitter
                                </Link> <br />
                                <Link>
                                       <IconButton> <FacebookIcon /> </IconButton>
                                       Facebook
                                </Link>
                             </Box>
                         </Grid>
                          {/* Aside component finished here  */}
                    </Grid>
               </Box>
               {/* Main componet finished here  */}

                {/* Footer component Start here  */}
               <Box component="footer" sx={{textAlign:"center", mt:8, mb:6}}>
                  <Typography variant="h5">Footer</Typography>
                  <Typography variant="subtitle1">Something here to give the footer a purpose!</Typography>
                  <Typography>
                      Copyright &copy;
                      <Link href="/" underline="hover" > Your Website </Link>
                      2023
                  </Typography>
               </Box>
               {/* Footer component finished here  */}

          </Container>
           {/* container componet end here  */}
    </ThemeProvider>
  )
}

//3. expoert
export default Blog;
