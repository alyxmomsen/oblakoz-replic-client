import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  ArticleInterface,
  Articles_common,
  RubricInterface,
} from "../../types";

const useArticles = (url: string) => {
  const [articles, setArticles] = useState<ArticleInterface[]>([]);
  const [rubrics, setRubrics] = useState<RubricInterface[]>([]);

  useEffect(() => {
    console.log({ url });

    axios
      .get<string>(url)
      .then((response) => {
        const obj = JSON.parse(response.data);

        const articles_comm = obj as Articles_common;

        const { articles, rubrics } = articles_comm.pageProps;

        const arr = Array.from(articles);

        console.log({ articles, rubrics });

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
