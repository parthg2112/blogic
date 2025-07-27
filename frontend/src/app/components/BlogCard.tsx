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
    <Link href={`/blog/${post.id}`} className="group rounded-2xl overflow-hidden shadow-md transition-shadow hover:shadow-lg">
      <div className="relative w-full h-56">
        <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6 bg-[radial-gradient(at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%),_radial-gradient(at_bottom_left,_rgba(57,149,199,0.2)_0%,_transparent_70%)]">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-blue transition-colors">{post.title}</h3>
        <p className="text-gray-400 mb-4">{post.description}</p>
        <div className="flex items-center text-gray-500 text-sm">
            {/* Add author/date info here if available for these cards */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;