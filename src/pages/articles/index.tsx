import React, { useContext, useEffect, useState } from "react";
import ArticlesFilter from "../../components/articles-filter-unit";
import Articles from "../../components/articles";
import { main_context } from "../../App";
import useArticles from "../../customHooks/useArticles";

const PageArticles = () => {
  const mnctx = useContext(main_context);

  const [url, setUrl] = useState("http://localhost:3002/api/articles");

  const { articles, rubrics } = useArticles(url);

  useEffect(() => {

    setUrl('http://localhost:3002/api/articles' + ((mnctx.model.articlesFilter.length) ? ('?articles-filter=' + mnctx.model.articlesFilter) : ''));

  } , [mnctx.model.articlesFilter]);

  return (
    <div>
      <ArticlesFilter key={0} rubrics={rubrics} />
      <Articles articles={articles} key={1} />
    </div>
  );
};

export default PageArticles;
