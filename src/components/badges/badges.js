import "./badges.scss";
import React, { useState, useEffect } from "react";

import Badge1 from "../../assets/images/1badge.svg";
import Badge5 from "../../assets/images/5badge.svg";
import Badge10 from "../../assets/images/10badge.svg";
import Badge20 from "../../assets/images/20badge.svg";
import Badge50 from "../../assets/images/50badge.svg";
import Badge100 from "../../assets/images/100badge.svg";

function Badges({ userExercises }) {
  const [badgeImages, setBadgeImages] = useState([]);

//push badge images into array based on exercises done

  useEffect(() => {
    const earnBadges = () => {
      const badges = [];
      const exerciseCount = userExercises.length;
      if (exerciseCount >= 100) {
        badges.push(Badge1, Badge5, Badge10, Badge20, Badge50, Badge100);
      } else if (exerciseCount >= 50) {
        badges.push(Badge1, Badge5, Badge10, Badge20, Badge50);
      } else if (exerciseCount >= 20) {
        badges.push(Badge1, Badge5, Badge10, Badge20);
      } else if (exerciseCount >= 10) {
        badges.push(Badge1, Badge5, Badge10);
      } else if (exerciseCount >= 5) {
        badges.push(Badge1, Badge5);
      } else if (exerciseCount >= 1) {
        badges.push(Badge1);
      }
      return badges;
    };

    setBadgeImages(earnBadges());
  }, [userExercises]);

  return (
    <div className="badges">
      <h2 className="badges__header">Earn badges by doing more exercises!</h2>
      {badgeImages.map((badge, index) => (
        <img
          className="badges__badge"
          key={index}
          src={badge}
          alt={`Badge ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default Badges;
