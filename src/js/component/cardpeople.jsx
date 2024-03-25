import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
// import "../../styles/cardpeople.css";


export const CardPeople = ({people}) => {

	const { store, actions } = useContext(Context)
	console.log(people);

	return (
        <div className="card" style={{width: "18rem"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiNvdbw8vVSnZ0AGw-AyiG85_10C2NRkzjPO9XZ9B3A&s" className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-text">{people.name}</h5>
		  <p className="card-text">Gender: </p>
          <p className="card-text">Hair color: </p>
		  <p className="card-text">Eye color: </p>
          <a href="#" className="btn btn-primary">Learn more!</a>
        </div>
      </div>
	);
};

CardPeople.protoTypes = {

}