import React, { useContext, useEffect, useState } from "react";
import { main_context } from "../../App";
import { MainContext, RubricInterface } from "../../types";

const ArticlesFilter = ({
  rubrics,
}: {
  rubrics: (RubricInterface & { choisen: boolean })[];
}) => {
  return (
    <div className="regular-wrapper articles-filter-wrapper">
      {rubrics.map((the_rubric) => (
        <ArticleFilterUnit
          title={the_rubric.title}
          id={the_rubric.id}
          key={the_rubric.id}
          isOn={the_rubric.choisen}
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
