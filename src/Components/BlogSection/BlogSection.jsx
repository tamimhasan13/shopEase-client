import { ArrowRight } from "lucide-react";
import { blogs } from "../../assets/data";
import Title from "../Common/Title/Title";

const BlogSection = () => {
  return (
    <section className="max-padd-container py-16 sm:py-20 lg:py-24">
      {/* Section Title */}
      <Title
        title="Our Expert"
        title2="Blog"
        para="Expert tips, insights, and inspiration to help you shop smarter."
      />

      {/* Blog Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog) => (
          <article
            key={blog.id || blog.title}
            className="group relative h-90 overflow-hidden rounded-2xl bg-gray-100 shadow-sm"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Always Soft Gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/5" />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />

            {/* Category */}
            <div className="absolute left-5 top-5 z-10">
              <span className="rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-red-500 shadow-md backdrop-blur-sm">
                {blog.category}
              </span>
            </div>

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-6">
              {/* Small Label */}
              <p className="mb-2 text-xs font-medium uppercase tracking-[1.5px] text-white/70">
                Fashion & Style
              </p>

              {/* Title */}
              <h3 className="line-clamp-2 text-xl font-bold leading-7 text-white">
                {blog.title}
              </h3>

              {/* Continue Reading */}
              <div className="mt-4">
                <button
                  type="button"
                  className="group/read inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white"
                >
                  Continue Reading
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/read:translate-x-1"
                  />
                </button>
              </div>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-red-500 transition-all duration-500 group-hover:w-full" />
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
