export interface MainContext {
  model: MainState;
  controller: {
    mainDispatch: MainContextDispathType | null;
  };
}

export interface MainState {
  isModalOpen: boolean;
  articlesFilter: string;
}

export type MainContextDispathType = React.Dispatch<{
  type: MainReducerActionType;
  payload: Partial<MainState>;
}>;

export interface RubricInterface {
  id: string;
  title: string;
}

export type MainReducerActionType = "modal-open" | "articles-filter";

export interface ArticleInterface {
  id: string;
  title: string;
  views: number;
  href: string;
  date: string;
  coverSrc: string;
  rubricId: string;
}

export interface Articles_common {
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
