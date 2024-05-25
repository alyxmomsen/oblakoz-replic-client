import React, { useEffect, useLayoutEffect, useState } from "react";
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

  const [cols , setCols] = useState(1);

  const handler = () => {

    const { innerWidth , innerHeight } = window ;


    if(cols < 2 && innerWidth > 600) {

      // console.log('setting 2');
      
      setCols(2);

    }
    else {

      if(cols > 1 && innerWidth < 600) {

        // console.log('setting 1');

        setCols(1);

      }

    }

    // console.log(`${innerWidth} ${innerHeight}`) ;

  }

  

  useLayoutEffect(() => {
    
    window.addEventListener('resize' , handler , this);
    
    console.log('mount');
    
    return () => {

      console.log('remount');
      window.removeEventListener('resize' , handler , this)
    };
  }, [cols]);

  useLayoutEffect(() => {
    // console.log(window.screen.width);

    const width = window.screen.availWidth ;

    console.log(width);
  } , []);

  return (
    <div className="articles-container">
      {
        
      }
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
