import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { placeholderBlogPosts } from "@/data/placeholder";

const Blog = () => {
  return (
    <Layout>
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <SectionHeading label="Günce" title="Blog" subtitle="İçerik buraya eklenecek" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderBlogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to={`/blog/${post.id}`} className="group block">
                  <div className="aspect-[16/10] bg-secondary mb-4 overflow-hidden">
                    <div className="w-full h-full bg-muted group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-sans">Görsel alanı</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-sans mb-2">{post.date || "Tarih"}</p>
                  <h3 className="text-lg font-serif font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {post.title || "Yazı Başlığı"}
                  </h3>
                  <p className="text-sm text-muted-foreground font-sans mt-2">
                    {post.excerpt || "İçerik buraya eklenecek"}
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
