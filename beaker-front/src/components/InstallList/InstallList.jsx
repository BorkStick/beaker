import React from "react";
import { Link } from "react-router-dom";

import { installs } from "../../data/installs.json";

export default function InstallList() {
  return (
    <div>
      <div>
        {installs.map((data, key) => {
          return (
            <div key={key} className="">
              <Link
                to={`/installs/${data.install}`}
              >
                <div className="card">
                  <div className="card-body">
                    <span className="card-title">{data.install}</span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
