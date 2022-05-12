import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from "react";
import { KANewsletter } from "./KANewsletter";

interface AppState {
  newsletterData: KANewsletter;
  setNewsletterData: Dispatch<SetStateAction<KANewsletter>>;
}

export const AppContext = React.createContext<AppState>({} as AppState);

interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider = ({ children }: AppProviderProps) => {
  const [newsletterData, setNewsletterData] = useState<KANewsletter>({
    hasHeader: true,
    title: 'KU ACM NEWSLETTER',
    date: "",
    events: [],
  });

  return (
    <AppContext.Provider
      value={{
        newsletterData,
        setNewsletterData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
