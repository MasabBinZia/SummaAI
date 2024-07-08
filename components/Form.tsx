"use client";

import * as z from "zod";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useToast } from "./ui/use-toast";

const formSchema = z.object({
  url: z.string().url({
    message: "Please enter a valid url address.",
  }),
});

export default function SummaForm() {
  const [url, setUrl] = useState<string>("");
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ["fetchData", url],
    queryFn: () =>
      fetch(`/api/getSummerize?url=${encodeURIComponent(url)}`).then((res) =>
        res.json()
      ),
    enabled: false, // Disable automatic fetching
  });

  const onSubmit = (formData: any) => {
    if (formData.url !== url) {
      setUrl(formData.url);
    }
  };

  useEffect(() => {
    if (url) {
      refetch();
    }
  }, [url, refetch]);

  useEffect(() => {
    if (error) {
      toast({
        description: "An error occurred while generating summary.",
        variant: "destructive",
      });
      reset();
    } else if (data) {
      toast({
        description: "Your summary has been generated.",
        variant: "default",
      });
      reset();
    }
  }, [error, data, toast, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 text-left">
      <div>
        <label htmlFor="url" className="sr-only">
          URL
        </label>
        <Input
          id="url"
          className="md:w-96"
          placeholder="Enter your url address"
          {...register("url")}
        />
        {errors.url && (
          <p className="text-red-500 text-center my-2">
            Invalid Url OR Give Correct Url
          </p>
        )}
      </div>
      <Button disabled={isLoading} className="w-full" type="submit">
        {isLoading ? (
          <span className="flex gap-1 items-center">
            <Loader2 className="animate-spin h-4 w-4" />
            Generating Summary...
          </span>
        ) : (
          "Get Started"
        )}
      </Button>

      <Textarea
        name="summary"
        className="my-8 h-96 w-full rounded-lg border md:h-[200px] overflow-auto md:rounded-xl textbox"
        placeholder="Summary will appear here"
        readOnly
        value={data ? JSON.stringify(data, null, 2) : ""}
      />
    </form>
  );
}
