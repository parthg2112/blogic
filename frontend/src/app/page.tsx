import Image from 'next/image';
import BlogCard from './components/BlogCard';

// Mock data for demonstration
const featuredPost = {
  imageUrl: '/blog-image-1.jpg',
  title: 'Empower Your Team with Seamless Collaboration',
  author: 'John Doe',
  date: '28 Jun 2025',
  readTime: '5 min read',
};

const tipPost = {
    title: '10 Tips for Successful Blogging',
    description: 'Learn the best engaging blog content that drives traffic.',
    author: 'John Doe',
    date: '28 Jun 2025',
    readTime: '5 min read',
}

const allPosts = [
  { id: 1, imageUrl: '/blog-image-2.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
  { id: 2, imageUrl: '/blog-image-3.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
  { id: 3, imageUrl: '/blog-image-4.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
  { id: 4, imageUrl: '/blog-image-5.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
  { id: 5, imageUrl: '/blog-image-6.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
  { id: 6, imageUrl: '/blog-image-7.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
];


export default function Home() {
  return (
    <div>
      {/* Insights Section */}
      <section className="my-16">
        <div className="text-center mb-12">
            {/* Updated color */}
            <span className="text-brand-blue font-semibold">Latest</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Discover our Insights</h1>
            <p className="text-gray-400 mt-4">Stay up-to-date with our latest blog posts.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Featured Post */}
            <div className="card-bg p-6 flex flex-col">
                <div className="relative w-full h-80 rounded-lg overflow-hidden mb-6">
                    <Image src={featuredPost.imageUrl} alt={featuredPost.title} layout="fill" objectFit="cover" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <div className="flex items-center text-gray-400 text-sm mt-auto">
                    <span>{featuredPost.author}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                </div>
            </div>

            {/* 10 Tips Post */}
             <div className="card-bg p-8 flex flex-col justify-between">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-4">{tipPost.title}</h2>
                    <p className="text-gray-400 mb-8">{tipPost.description}</p>
                </div>
                <div className="flex flex-col items-start">
                    {/* Updated color */}
                    <button className="text-brand-blue font-semibold mb-6">Discover Now →</button>
                    <div className="flex items-center text-gray-400 text-sm">
                        <span>{tipPost.author}</span>
                        <span className="mx-2">•</span>
                        <span>{tipPost.date}</span>
                        <span className="mx-2">•</span>
                        <span>{tipPost.readTime}</span>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* All Blog Posts Section */}
      <section className="my-24">
        <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">All Blog Post</h2>
            {/* Add sorting/filtering dropdowns here if needed */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
        <div className="text-center mt-12">
            <button className="btn-primary text-lg px-8 py-3">Load More</button>
        </div>
      </section>
    </div>
  );
}
