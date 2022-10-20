import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  link: {
 
  },
  cardHeader: {
    backgroundColor:'gray'
     
  },
  postTitle: {
    fontSize: "16px",
    textAlign: "left",
  },
  postText: {
    display: "flex",
    justifyContent: "left",
    alignItems: "baseline",
    fontSize: "12px",
    textAlign: "left",
  },
});

const Posts = (props) => {
  const { posts } = props;
  if (!posts || posts.length === 0) return <p>Can not find any posts, sorry</p>;
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {posts.map((post) => {
              return (
                // Enterprise card is full width at sm breakpoint
                <Grid item key={post.id} xs={12} md={4}>
                  <Card theme={theme.card}>
                    <CardMedia
                     
                      image="https://source.unsplash.com/random"
                      title="Image title"
                      style={
                        {
                            height: 0,
                            paddingTop: '56.25%', // 16:9,
                            marginTop:'30'
                          }
                      }
                    />
                    <CardContent theme={theme.cardContent}>
                      <Typography
                        
                      >
                        {post.title.substr(0, 50)}...
                      </Typography>
                      <div theme={theme.postText}>
                        <Typography
                        
                          color="textPrimary"
                        ></Typography>
                        <Typography variant="p" color="textSecondary">
                          {post.excerpt.substr(0, 60)}...
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
};
export default Posts;
