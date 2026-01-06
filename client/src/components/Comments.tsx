import { useEffect } from "react";
import { Reveal } from "./Reveal";

interface CommentsProps {
  postId: string;
  postTitle: string;
}

export default function Comments({ postId, postTitle }: CommentsProps) {
  useEffect(() => {
    // Load Disqus script
    const script = document.createElement("script");
    script.src = "https://techflow-solutions.disqus.com/embed.js";
    script.async = true;
    script.setAttribute("data-timestamp", new Date().getTime().toString());
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [postId]);

  return (
    <Reveal width="100%">
      <section className="my-16 border-t-4 border-black dark:border-[#CCFF00] pt-12">
        <h3 className="text-2xl font-black uppercase mb-8">Commentaires</h3>
        <div id="disqus_thread" className="disqus-container"></div>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.disqus_config = function () {
                this.page.url = window.location.href;
                this.page.identifier = "${postId}";
                this.page.title = "${postTitle}";
              };
            `,
          }}
        />
      </section>
    </Reveal>
  );
}
