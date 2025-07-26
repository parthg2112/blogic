import Image from 'next/image';
import Link from 'next/link';

interface Post {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
}

const BlogCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/blog/${post.id}`} className="card-bg group">
      <div className="relative w-full h-56">
        <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.description}</p>
        <div className="flex items-center text-gray-500 text-sm">
            {/* Add author/date info here if available for these cards */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;