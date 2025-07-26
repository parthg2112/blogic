export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="my-16 text-center">
      <h1 className="text-4xl font-bold text-white">Blog Post: {params.slug}</h1>
      <p className="text-gray-400 mt-4">Content for this blog post will go here.</p>
    </div>
  );
}
