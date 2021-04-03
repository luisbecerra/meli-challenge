import React from "react";
import Link from "next/link";

import { BANNERS } from "../../lib/constants";

import styles from "./Banners.module.scss";

const Banners = () => {
  return (
    <div className={styles.banners}>
      {BANNERS.map((banner, index) => {
        return (
          <Link key={index} href={banner.url}>
            <a>
              <img src={banner.img} />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Banners;
