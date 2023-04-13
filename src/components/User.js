import { useState, useEffect } from "react";
import SkeletonProfile from "../skeletons/SkeletonProfile";

const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // delay the fetching of data to show the skeleton
    setTimeout(async () => {
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await result.json();
      setProfile(data);
    }, 5000);
  });

  return (
    <div className="user">
      <h2>User Details</h2>

      {profile && (
        <div className="profile">
          <h3>{profile.username}</h3>
          <p>{profile.email}</p>
          <a href={profile.website} target="_blank">
            {profile.website}
          </a>
        </div>
      )}

      {!profile && (
        // <SkeletonProfile />
        <SkeletonProfile theme={"dark"} />
        // <div className="skeleton">
        //   loading...
        //   {/* <div className="skeleton-avatar"></div>
        //   <div className="skeleton-author"></div>
        //   <div className="skeleton-details"></div> */}
        // </div>
      )}
    </div>
  );
};

export default User;
