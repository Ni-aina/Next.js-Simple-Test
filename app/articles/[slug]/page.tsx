import { notFound } from 'next/navigation';
import { Article } from '@/types/article';
import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <div className="flex gap-5 items-baseline">
          <Link href={"/"}>
            <ArrowLeftCircle
              className="w-6 h-6 md:w-8 md:h-8 hover:opacity-80"
            />
          </Link>
          <h1 className="text-2xl md:text-4xl font-bold mb-6">
            {article.title}
          </h1>
        </div>
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <p className="font-medium">Author Name</p>
            <p className="text-sm text-gray-500">Published on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {article.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}

async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await import('@/data/articles.json').then(
    (mod) => mod.default as Article[]
  );
  return articles.find((article) => article.slug === slug);
}