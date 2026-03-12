import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { placeholderBlogPosts } from "@/data/placeholder";

const BlogPost = () => {
  const { id } = useParams();
  const post = placeholderBlogPosts.find((p) => p.id === id) || placeholderBlogPosts[0];

  return (
    <Layout>
      <article>
        <section className="relative h-[50vh] md:h-[65vh] overflow-hidden flex items-end">
          <div className="absolute inset-0">
            {post.image ? (
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-muted" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />
          <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24 max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="text-[11px] tracking-[0.2em] uppercase text-terracotta-light font-display mb-4">
                {post.date} — {post.author}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-primary-foreground leading-[1.1]">
                {post.title}
              </h1>
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-6 md:px-12 max-w-3xl py-16 md:py-24">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground font-display hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Blog'a Dön
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-foreground font-sans leading-relaxed text-base mb-8">
              {post.excerpt}
            </p>
            <p className="text-muted-foreground font-sans leading-relaxed text-sm">
              {post.content}
            </p>

            <div className="mt-10 flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={tag} className="text-[11px] tracking-[0.15em] uppercase bg-secondary text-muted-foreground px-4 py-1.5 font-display rounded-full">
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
