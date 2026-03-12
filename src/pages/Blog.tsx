import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Layout from "@/components/Layout";
import { placeholderBlogPosts } from "@/data/placeholder";

const Blog = () => {
  return (
    <Layout>
      <section className="relative h-[40vh] md:h-[50vh] bg-primary flex items-end overflow-hidden">
        <div className="relative z-10 container mx-auto px-6 md:px-12 pb-16 md:pb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-[11px] tracking-[0.35em] uppercase text-terracotta-light font-display block mb-4">Günce</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-[1.05]">
              Blog
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="container mx-auto px-6 md:px-12">
          {placeholderBlogPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <Link to={`/blog/${placeholderBlogPosts[0].id}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={placeholderBlogPosts[0].image}
                    alt={placeholderBlogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms]"
                  />
                </div>
                <div className="lg:col-span-5 space-y-4">
                  <p className="text-[11px] tracking-[0.2em] uppercase text-terracotta font-display">
                    {placeholderBlogPosts[0].date}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-serif font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300 leading-tight">
                    {placeholderBlogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground font-sans">
                    {placeholderBlogPosts[0].excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-display font-medium text-foreground group-hover:text-terracotta transition-colors">
                    Devamını Oku
                    <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {placeholderBlogPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="group block">
                  <div className="aspect-[16/10] mb-5 overflow-hidden relative rounded-lg">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[800ms]"
                    />
                  </div>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-terracotta font-display mb-2">
                    {post.date}
                  </p>
                  <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mt-2">
                    {post.excerpt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
