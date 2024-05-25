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
    <div className="articles-container">
      {articles.length && articles.map((elem) => <Article data={elem} />)}
    </div>
  );
};

export default Articles;

export const Article = ({ data }: { data: ArticleInterface }) => {
  return (
    <a
      href={`https://oblakoz.ru/article/${data.href}`}
      className="regular-wrapper article-preview"
    >
      <div className="inner-wrapper">
        <div>
          <img
            width={"100%"}
            src={`https://oblakoz.ru/api/images/pageBanner/${data.id}/full_1`}
            alt=""
          />
        </div>
        <div className={"article-description-wrapper"}>
          <div className={"article-description-meta"}>
            <span className="article-description-meta-date">Статьи • {`${new Date(data.date).getDate()}.${(() => {
              const month = new Date(data.date).getMonth();
              return month + 1 < 10 ? `0${month + 1}` : month + 1;
            })()}`}</span>
            <div className="article-description-meta-views">
              <span></span>
              <span className={`article-description-meta-views-value`}>{data.views}</span>
            </div>
          </div>
          <div className={"article-description-title"}>{data.title}</div>
        </div>
      </div>
    </a>
  );
};
