import React, { useState, useEffect } from "react";
import GameStyles from "./GameStyles.js";
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSquare as regSquare } from "@fortawesome/free-regular-svg-icons";
import {
  faSquare,
  faCoffee,
  faSquareFull,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  fab,
  faSquare,
  faCoffee,
  faSquareFull,
  regSquare,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft
);

const GameMap = ({ currentRoom, current_coordinates }) => {
  const classes = GameStyles();
  const [roomList, setRoomList] = useState([]);

  useEffect(() => {
    axios
      .get("https://adventure-text.herokuapp.com/api/adv/map/", {
        headers: {
          authorization: `Token 0bb7d0b67867e145c61f4ef26abd582b65d9a42e`
        }
      })
      .then(res => {
        console.log(res.data);
        setRoomList(res.data.map);
      })
      .catch(err => console.log(err));
  }, []);
  console.log("roomList:", roomList);
  roomList.sort((a, b) => a.id - b.id);

  const xValues = roomList.map(room => Number(room.x));

  const yValues = roomList.map(room => Number(room.y));

  const minX = Math.min(...xValues);
  const minY = Math.min(...yValues);

  const maxX = Math.max(...xValues);
  const maxY = Math.max(...yValues);

  //   console.log(minX);
  //   console.log(maxX);
  //   console.log(minY);
  //   console.log(maxY);

  const createMap = () => {
    let map = [];

    for (let y = minY; y <= maxY; y++) {
      let rowMap = [];
      for (let x = minX; x <= maxX; x++) {
        let north = 0;
        let south = 0;
        let east = 0;
        let west = 0;
        if (roomList.find(el => el.x === x && el.y === y)) {
          let room = roomList.find(el => el.x === x && el.y === y);
          north = room.n_to;
          south = room.s_to;
          east = room.e_to;
          west = room.w_to;
          rowMap.push(
            <div className={classes.room} key={[x, y]}>
              {x === current_coordinates[0] && y === current_coordinates[1] ? (
                <div className={classes.allArrows}>
                  <div className={north > 0 ? classes.show : classes.hidden}>
                    <FontAwesomeIcon icon={faArrowUp} />
                  </div>
                  <div>
                    {west > 0 ? <FontAwesomeIcon icon={faArrowLeft} /> : " "}
                    <FontAwesomeIcon icon={faSquare} />
                    {east > 0 ? <FontAwesomeIcon icon={faArrowRight} /> : " "}
                  </div>
                  <div className={south > 0 ? classes.show : classes.hidden}>
                    <FontAwesomeIcon icon={faArrowDown} />
                  </div>
                </div>
              ) : (
                <div className={classes.allArrows}>
                  <div className={north > 0 ? classes.show : classes.hidden}>
                    <FontAwesomeIcon icon={faArrowUp} />
                  </div>
                  <div>
                    {west > 0 ? <FontAwesomeIcon icon={faArrowLeft} /> : " "}
                    <FontAwesomeIcon icon={regSquare} />
                    {east > 0 ? <FontAwesomeIcon icon={faArrowRight} /> : " "}
                  </div>
                  <div className={south > 0 ? classes.show : classes.hidden}>
                    <FontAwesomeIcon icon={faArrowDown} />
                  </div>
                </div>
              )}
            </div>
          );
        } else rowMap.push(<div></div>);
      }
      map.push(<div className={classes.row}>{rowMap.map(row => row)}</div>);
    }
    map.reverse();
    return map;
  };

  return (
    <div>
      <div className={classes.gridContainer}>{createMap()}</div>
    </div>
  );
};

export default GameMap;
