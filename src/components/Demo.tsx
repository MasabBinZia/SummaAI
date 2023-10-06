"use client";
import { useEffect, useState } from "react";
import {
  CopyIcon,
  Link2Icon,
  Loader,
  Check,
  SendHorizontal,
} from "lucide-react";
import { useLazyGetSummaryQuery } from "@/services/article";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Article = {
  url: string;
  summary: string;
};

const Demo = () => {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: "",
  });

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      setArticle(newArticle);
      console.log(newArticle);
    }
  };

  return (
    <section className="mt-16 w-full">
      <div className="flex flex-col w-full gap-2">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-2"
        >
          <Link2Icon />
          <Input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) =>
              setArticle({
                ...article,
                url: e.target.value,
              })
            }
            className="text-white rounded-md border-purple-600 bg-black py-2.5 pl-10 pr-12 text-sm shadow-lg font-medium peer"
          />
          <Button type="submit" onClick={handleSubmit}>
            <SendHorizontal />
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
