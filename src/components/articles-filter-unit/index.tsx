import React, { useContext, useEffect, useState } from "react";
import { main_context, MainContext } from "../../App";

interface RubricInterface {
  id: string;
  title: string;
}

const ArticlesFilter = ({ rubrics }: { rubrics: RubricInterface[] }) => {
  return (
    <div className="regular-wrapper articles-filter-wrapper">
      {rubrics.map((elem) => (
        <ArticleFilterUnit
          title={elem.title}
          id={elem.id}
          key={elem.id}
          isOn={true}
        />
      ))}
    </div>
  );
};

export default ArticlesFilter;

const ArticleFilterUnit = ({
  title,
  id,
  isOn,
}: {
  title: string;
  id: string;
  isOn: boolean;
}) => {
  const mnctx = useContext(main_context);

  return (
    <div
      onClick={() => onClick(mnctx, id)}
      className={`article-filter-unit regular-wrapper ${isOn ? "choisen" : ""}`}
    >
      {title}
    </div>
  );
};

function onClick(ctx: MainContext, id: string) {
  const { mainDispatch: dispatch } = ctx.controller;

  if (dispatch) {
    let urlArticlesFilterString = ctx.model.articlesFilter;

    if (urlArticlesFilterString.length) {
      if (urlArticlesFilterString.match(/__/i)) {
        let urlParamsArr = urlArticlesFilterString.split("__");

        urlParamsArr = urlParamsArr.find((elem) => elem === id)
          ? urlParamsArr.filter((elem) => elem !== id)
          : [...urlParamsArr, id];

        urlArticlesFilterString = urlParamsArr.join("__");
      } else {
        urlArticlesFilterString =
          urlArticlesFilterString === id
            ? ""
            : `${urlArticlesFilterString}__${id}`;
      }
    } else {
      urlArticlesFilterString = `${id}`;
    }

    dispatch({
      type: "articles-filter",
      payload: { articlesFilter: urlArticlesFilterString },
    });
  }
}
