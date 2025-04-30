import { ArticleCard } from "@/components/ArticleCard";
import { Article } from "@/types/article";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export default async function Home() {

  const res = await fetch(`${baseUrl}/api/articles`, { next: { revalidate: 10 } });
  const articles: Article[] = await res.json();

  return (
    <>
      <div className="relative w-full min-h-[500px]">
        <Image
          src="/images/fond.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative mx-auto h-full flex items-center px-4 lg:px-20 py-5">
          <div className="space-y-5 max-w-2xl text-white">
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Mastering Photorealistic: <br /> A Next.js Developer's Guide
            </h1>
            <p className="text-lg lg:text-xl">
              Transforming raw data into immersive visual experiences through cutting-edge rendering pipelines. <br />
              Where algorithmic precision meets artistic vision - bridging the uncanny valley in real-time.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-5 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((item) => (
            <ArticleCard key={item.id} article={item} />
          ))}
        </div>
      </div>
    </>
  );
}