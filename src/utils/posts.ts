import type { CollectionEntry } from "astro:content";

export function sortPostsByDate(posts: CollectionEntry<"posts">[]) {
  return [...posts].sort((a, b) => {
    return b.data.pubDatetime.getTime() - a.data.pubDatetime.getTime();
  });
}

export function getVisiblePosts(posts: CollectionEntry<"posts">[]) {
  const now = new Date();

  return sortPostsByDate(posts).filter((post) => {
    return !post.data.draft && post.data.pubDatetime <= now;
  });
}
