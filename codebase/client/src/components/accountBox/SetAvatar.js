import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";



// import loader from "../../assets/loader.gif";

const AvatarContainer = styled.div`
  color:#FFC442;
  font-family: "Courier Prime", monospace;
  font-size: 1rem;
 
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  gap: 6em;


  gap: 1em;
  
  justify-content: center;

`;











// function SetAvatar() {
//   const [avatars, setAvatars] = useState([]);
//   const [selectedAvatar, setSelectedAvatar] = useState(undefined);

//   useEffect(() => {
//     const fetchAvatars = async () => {
//       try {
//         const response = await fetch('https://api.multiavatar.com/');
//         const avatarIds = await response.json();

//         const avatarPromises = avatarIds.map(async id => {
//           const avatarResponse = await fetch(`https://api.multiavatar.com/${id}`);
//           return avatarResponse.text();
//         });

//         const avatarData = await Promise.all(avatarPromises);
//         setAvatars(avatarData);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchAvatars();
//   }, []);

//   const handleAvatarClick = index => {
//     setSelectedAvatar(index);
//     // Set the selected avatar as the user's profile avatar
//   };

//   return (
//     <AvatarContainer>
//     <div>
//       <div className="title-container">
//         <h1>Please pick your Avatar</h1>
//       </div>
//       <div className="avatars">
//         {avatars.map((avatar, index) => (
//           <div
//             key={index}
//             className={`avatar ${selectedAvatar === index ? 'selected' : ''}`}
//             onClick={() => handleAvatarClick(index)}
//           >
//             <img
//               src={`data:image/svg+xml;base64,${(avatar)}`}
//               alt={`Avatar ${index}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//     </AvatarContainer>
//   );
// }

// export default SetAvatar;





function SetAvatar() {
  
  
  const api = 'https://api.multiavatar.com/';
  const avatarIds = ['333', '26839', '296547', '8647586', '759384', '394856'];

  const [avatarData, setAvatarData] = useState({});

  useEffect(() => {
    avatarIds.forEach(avatarId => {
      fetch(api + avatarId)
        .then(res => res.text())
        .then(svg => setAvatarData(prevAvatarData => ({
          ...prevAvatarData,
          [avatarId]: svg
        })));
    });
  }, []);

  return (
    <AvatarContainer>
       <div className="title-container">
       <h1> Please pick your  Avatar</h1>
    </div>
    <div>
      {avatarIds.map(avatarId => (
        <div key={avatarId} dangerouslySetInnerHTML={{__html: avatarData[avatarId]}} />
      ))}
    </div>
    </AvatarContainer>
  );
}
 export default SetAvatar;
