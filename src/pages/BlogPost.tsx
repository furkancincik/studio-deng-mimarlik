import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { placeholderBlogPosts } from "@/data/placeholder";

const BlogPost = () => {
  const { id } = useParams();
  const post = placeholderBlogPosts.find((p) => p.id === id) || placeholderBlogPosts[0];

  return (
    <Layout>
      <article className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <Link to="/blog" className="text-sm text-muted-foreground font-sans hover:text-foreground transition-colors mb-8 inline-block">
            ← Back to Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mt-8">
            <p className="text-xs text-muted-foreground font-sans mb-4">{post.date || "Date"} — {post.author || "Author"}</p>
            <h1 className="text-3xl md:text-5xl font-serif font-medium text-foreground mb-8 leading-tight">
              {post.title || "Blog Post Title"}
            </h1>

            <div className="aspect-[16/9] bg-secondary mb-12 flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-sans">Featured image placeholder</span>
            </div>

            <div className="space-y-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="h-4 bg-muted rounded" style={{ width: `${95 - (i % 3) * 10}%` }} />
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              {(post.tags.length > 0 ? post.tags : ["Tag 1", "Tag 2"]).map((tag) => (
                <span key={tag} className="text-xs bg-secondary text-muted-foreground px-3 py-1 font-sans">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
