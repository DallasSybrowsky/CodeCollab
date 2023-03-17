// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import img1 from "../../assets/img-1.jpeg";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function CardExample() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Yor project"
//         subheader="  this is the title of the project"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image={img1}
//         alt="project image"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//          This project is in React
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Description</Typography>
         
         
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is
//             absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
//             shrimp and mussels, tucking them down into the rice, and cook again
//             without stirring, until mussels have opened and rice is just tender,
//             5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
         
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }


import React from "react";
import styled from "styled-components";
// import { useState, useEffect } from "react";

const ExploreContainer = styled.div`
  .ExploreContainer {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    justify-content: center;
  }

  .explore__card {
    position: relative;
    background-color: var(--color-dark-blue);
    margin: 1rem;
    padding: 1rem 2rem;
    box-shadow: 0 0 0.5rem var(--color-dark-blue);
    border-radius: 1rem;
    max-width: 100vw;
    min-height: 132px;
    max-height: 15vh;
    transition: 0.2s ease-in-out;
  }

  .explore__card:hover {
    box-shadow: 0 0 0.5rem var(--color-light-blue);
  }

  .project__title {
    margin-top: 0.8rem;
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
    text-decoration: none;
  }

  .project__title a {
    color: var(--color-yellow);
    text-shadow: 0.1rem 0.1rem 0.25rem var(--color-bg);
    font-size: 1.5rem;
    font-family: montserrat;
    text-decoration: none;
  }

  .project__title a:hover {
    text-shadow: 0.15rem 0.15rem 0.5rem var(--color-black);
  }

  .project__author {
    padding: 1rem 0 0 0.5rem;
    color: var(--color-bg);
    font-size: 1.1rem;
    font-family: montserrat;
`;

function ExploreCard(props) {
  return (
    <ExploreContainer>
      <div key={props.id} className="explore__card">
        <div className="explore__card__title">
          <h3 className="project__title">
            <a href="#">
              Project Title: Hard Coded Title{props.projectTitle}
            </a>
          </h3>
        </div>
        <div className="explore__card__content">
          <h4 className="project__author">
            Project Author: Hard Coded Author{props.projectAuthor}
          </h4>
        </div>
      </div>
    </ExploreContainer>
  );
}
export default ExploreCard;
