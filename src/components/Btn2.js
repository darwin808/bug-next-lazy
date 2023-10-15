"use client";

import React, { useState } from "react";

const Btn2 = () => {
  const [counter1, setcounter1] = useState(123);
  return (
    <div style={{ background: "red" }}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
      necessitatibus beatae alias magnam facilis praesentium quidem architecto
      cumque culpa, officiis quia dolorem quisquam? Blanditiis eaque, corporis
      quaerat eligendi necessitatibus beatae nihil quidem est, nulla cumque
      laudantium sapiente excepturi voluptatibus quisquam natus soluta
      reiciendis esse provident delectus ex temporibus pariatur. Ipsa numquam
      blanditiis dolorum placeat eius magni, laborum ad sint accusantium porro,
      ducimus dolore, facilis dolor nihil dicta quo! Maxime recusandae sapiente
      ullam laborum veniam vel. Blanditiis libero dolor aliquid ullam, illum
      laborum doloribus at aspernatur cum veniam vero commodi sapiente
      doloremque corrupti, animi est fuga officiis odit sequi? Fuga maxime sit
      commodi quo id quaerat amet molestiae, nam a, ut adipisci ratione
      distinctio accusantium ex consectetur rem ullam tempore consequuntur quae
      dolorum! Neque debitis quo laboriosam ratione officiis deleniti
      dignissimos iusto natus cupiditate ab repudiandae, reprehenderit minima
      quidem facilis adipisci animi itaque dolorem? Commodi suscipit sit soluta
      perferendis eum quam blanditiis necessitatibus iste minima excepturi.
      Placeat deserunt veritatis sit tempora repellendus incidunt possimus
      laudantium corporis cumque debitis, aperiam tenetur a, obcaecati voluptate
      assumenda optio ad. Iusto, harum enim commodi tempora aut obcaecati saepe
      odio iste quod delectus veritatis beatae dignissimos quam et, fuga quasi
      nihil! Voluptatibus esse libero, eius odit hic minus enim voluptate
      blanditiis soluta quis accusantium! Impedit voluptate praesentium
      cupiditate architecto, modi soluta neque laboriosam molestias, illo fugit
      placeat tempore beatae exercitationem perferendis veniam eius
      necessitatibus aliquid! Rerum, temporibus accusantium! Sit eius corrupti
      officia, corporis molestiae distinctio provident dolores impedit,
      consectetur dolorem et quisquam cumque aut architecto amet temporibus
      nostrum? Quis, necessitatibus quod! Laborum suscipit doloribus,
      consequuntur explicabo maiores ea. Sapiente aut quidem quis quam accusamus
      sequi aliquam minima totam iure provident. Excepturi eligendi, porro velit
      laboriosam beatae ipsam cumque placeat? Minus voluptatibus doloremque a
      qui amet, illo, magnam suscipit, sit impedit tempora sunt vero delectus
      beatae ab soluta quas molestias. Ipsum dolores accusantium earum
      voluptates cum ut ducimus libero!
      <button
        onClick={() => {
          setcounter1(counter + 1);
        }}
      >
        {counter1}
      </button>
    </div>
  );
};

export default Btn2;
