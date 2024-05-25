import React, { useContext, useEffect, useState } from "react";
import ArticlesFilter from "../../components/articles-filter-unit";
import Articles from "../../components/articles";
import { main_context } from "../../App";
import useArticles from "../../customHooks/useArticles";

const PageArticles = () => {
  const mnctx = useContext(main_context);


  const vercel = 'https://oblakoz-replic-server.vercel.app/api/articles' ;
  const local = 'http://localhost:3002/api/articles'

  const theurl = true ? vercel : local

  const [url, setUrl] = useState(theurl);

  const { articles, rubrics } = useArticles(url);

  useEffect(() => {
    setUrl(
      theurl +
        (mnctx.model.articlesFilter.length
          ? "?articles-filter=" + mnctx.model.articlesFilter
          : ""),
    );
  }, [mnctx.model.articlesFilter]);

  const x: { x: number } & { y: number } = { x: 0, y: 9 };

  const rubricsFilterArr = util_articles_filter_string_as_array(
    mnctx.model.articlesFilter,
  );

  const rubricsExtended = rubricsFilterArr.length
    ? rubrics.map((rubric) => ({
        ...rubric,
        choisen: rubricsFilterArr.find((elem) => rubric.id === elem)
          ? true
          : false,
      }))
    : rubrics.map((rubric) => ({ ...rubric, choisen: true }));

  console.log({ newar: rubricsExtended });

  return (
    <div>
      <ArticlesFilter key={0} rubrics={rubricsExtended} />
      <Articles articles={articles} key={1} />
    </div>
  );
};

export default PageArticles;

function util_articles_filter_string_as_array(str: string) {
  if (str.length) {
    if (str.match(/__/i)) {
      return str.split("__");
    } else {
      return [str];
    }
  } else {
    return [];
  }
}
