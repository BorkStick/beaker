import React from "react";
import { Link } from "react-router-dom";

import { users } from "../../data/users.json";

export default function UserList() {
  return (
    <div>
      <div>
        {users.map((data, key) => {
          return (
            <div key={key} className="">
              <Link
                to={`/users/${data.user}`} className="text-dark"
              >
                <div className="card">
                  <div className="card-body">
                    <span className="card-title">{data.first_name} </span>
                    <span className="card-title">{data.last_name}</span>
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
