import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/types/article';

export const ArticleCard = ({ article }: { article: Article }) => {

    return (
        <div className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl bg-white dark:bg-gray-800">
            <div className="h-48 relative overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {article.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                    {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                    <Link
                        href={`/articles/${article.slug}`}
                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    >
                        Read more →
                    </Link>
                    <span className="text-sm text-gray-500 dark:text-gray-400">5 min read</span>
                </div>
            </div>
        </div>
    );
};