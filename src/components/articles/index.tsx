import React, { useEffect, useState } from "react";
import NavBar from "../nav-bar";

import axios, { AxiosError } from "axios";
import { response } from "express";
import useArticles from "../../customHooks/useArticles";

interface ArticleInterface {
  id: string;
  title: string;
  views: number;
  href: string;
  date: string;
  coverSrc: string;
  rubricId: string;
}

interface Articles_common {
  pageProps: {
    metaData: {
      title: string;
      keywords: string;
      description: string;
    };
    articles: ArticleInterface[];
    totalPages: number;
    activePage: number;
    rubrics: {
      id: string;
      title: string;
    }[];
    activeRubrics: string[];
  };
  __N_SSP: boolean;
}

const Articles = ({ articles }: { articles: ArticleInterface[] }) => {
  useEffect(() => {}, []);

  return (
    <div className="main-page-container">
      <h1>Articles</h1>
      {articles.length && articles.map((elem) => <Article data={elem} />)}
    </div>
  );
};

export default Articles;

// import React from 'react'

export const Article = ({ data }: { data: ArticleInterface }) => {
  return (
    <a
      href={`https://oblakoz.ru/article/${data.href}`}
      className="regular-wrapper"
    >
      <div>
        <img
          width={"100%"}
          src={`https://oblakoz.ru/api/images/pageBanner/${data.id}/full_1`}
          alt=""
        />
      </div>
      <div>
        <h3>{data.title}</h3>
      </div>
    </a>
  );
};
