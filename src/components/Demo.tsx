"use client";
import { useEffect, useState } from "react";
import { Link2Icon, SendHorizontal, Copy, CheckSquare } from "lucide-react";
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
  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") as string
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updateAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updateAllArticles);
      localStorage.setItem("articles", JSON.stringify(updateAllArticles));
    }
  };

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(null), 2000);
  };
  return (
    <div className=" mt-16 w-full max-w-3xl mx-auto">
      <div className="flex flex-col w-full gap-2 ">
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
            className="text-white rounded-md border bg-black py-2.5 pl-10 pr-12 text-sm shadow-lg font-medium peer  focus-visible:outline-black "
          />
          <Button type="submit">
            <SendHorizontal />
          </Button>
        </form>
      </div>
      <div className="flex my-10 flex-col gap-1 max-h-60 overflow-y-auto">
        {allArticles.map((item, index) => (
          <div
            key={`link-${index}`}
            onClick={() => setArticle(item)}
            className="p-3 flex justify-start items-center flex-row truncate border border-gray-200 gap-3 rounded-lg cursor-pointer"
          >
            <div className="flex gap-2 justify-center items-center ">
              <Button onClick={() => handleCopy(item.url)}>
                {copied === item.url ? <CheckSquare /> : <Copy />}
              </Button>

              <p className="flex-1 font-medium text-blue-700 text-sm truncate">
                {item.url}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-10 max-w-full flex justify-center items-center">
        {isFetching ? (
          <p>Loading...</p>
        ) : error ? (
          <p>
            ERROR <span>{}</span>
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="text-gray-300 font-bold text-xl">
                Article{" "}
                <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Summary
                </span>
              </h2>
              <div className="rounded-xl border border-gray-200  shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-4">
                <p className="font-medium text-sm">{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Demo;
