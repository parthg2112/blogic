import BlogCard from '../components/BlogCard';

// You would fetch this data from a CMS or database
const allPosts = [
    { id: 1, imageUrl: '/blog-image-2.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
    { id: 2, imageUrl: '/blog-image-3.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
    { id: 3, imageUrl: '/blog-image-4.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
    { id: 4, imageUrl: '/blog-image-5.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
    { id: 5, imageUrl: '/blog-image-6.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
    { id: 6, imageUrl: '/blog-image-7.jpg', title: 'The Importance of Blogging for Business', description: 'Discover how blogging can boost your business growth.' },
];

export default function BlogPage() {
  return (
    <section className="my-16">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Our Blog</h1>
            <p className="text-gray-400 mt-4">All the latest news and insights from our team.</p>
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
  );
}
