import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface Articles {
  pageProps: {
    metaData: {
      title: string;
      keywords: string;
      description: string;
    };
    articles: {
      id: string;
      title: string;
      views: number;
      href: string;
      date: string;
      coverSrc: string;
      rubricId: string;
    }[];
    totalPages: number;
    activePage: number;
    rubrics: {
      id: string;
      title: string;
    }[];
  };
  __N_SSP: boolean;
}

const useArticles = ({ url }: { url: string }) => {
  const [data, setData] = useState<Articles | null>(null);

  useEffect(() => {
    getArticles(url).then((response) => {
      console.log({ response });

      setData(response);
    });
  }, []);

  return {
    data,
  };
};

export default useArticles;

async function getArticles(url: string) {
  try {
    console.log({ url });

    const response = await axios.get<Articles>(url);

    const data = response.data;

    return data;
  } catch (err) {
    console.log("hello it s axios fail time");

    const error = err as AxiosError;

    console.log(error);
    const response = error.response;

    if (!response) return null;
  }

  return null;
}
