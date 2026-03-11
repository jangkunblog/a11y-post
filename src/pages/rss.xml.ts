import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getVisiblePosts } from "../utils/posts";

export async function GET(context: { site: URL }) {
  const posts = getVisiblePosts(await getCollection("posts"));

  return rss({
    title: "디지털 접근성 아카이브",
    description: "키워드 기반 자동 초안 + PR 검토 발행 아카이브",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDatetime,
      description: post.data.description,
      link: `/posts/${post.slug}/`
    }))
  });
}
