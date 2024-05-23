import React, { useEffect } from "react";
import NavBar from "../nav-bar";
import useArticles from "../../customHooks";
import axios from "axios";
import { response } from "express";

const Articles = () => {

  useEffect(() => {
    axios.get('http://localhost:3002/api/articles').then(response => {

    const {data:json} = response ;

    const data = JSON.parse(json);

    console.log(data);
      
    });
  } , []);


  return (
    <div className="main-page-container">
      <h1>Articles</h1>
      <div>description</div>
    </div>
  );
};

export default Articles;
