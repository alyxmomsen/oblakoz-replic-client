import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface ArticleInterface {
  id: string;
  title: string;
  views: number;
  href: string;
  date: string;
  coverSrc: string;
  rubricId: string;
}

interface RubricInterface {
  id: string;
  title: string;
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
    rubrics: RubricInterface[];
    activeRubrics: string[];
  };
  __N_SSP: boolean;
}

const useArticles = (url: string) => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  const [rubrics, setRubrics] = useState<RubricInterface[]>([]);

  useEffect(() => {

    console.log({url});
    
    axios
      .get<string>(url)
      .then((response) => {

        // console.log({response});

        // const obj = response.data ;
        const obj = JSON.parse(response.data);

        // console.log({obj});

        const articles_comm = obj as Articles_common;

        const { articles, rubrics } = articles_comm.pageProps;

        const arr = Array.from(articles) ;

        // console.log(arr);

        console.log({articles , rubrics});

        setArticles([...articles]);
        setRubrics([...rubrics]);
      })
      .catch((er) => {
        const error = er as AxiosError;

        console.log({ error });
      });
  }, [url]);

  return {
    articles,
    rubrics,
  };
};

export default useArticles;
