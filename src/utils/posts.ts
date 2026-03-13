import type { CollectionEntry } from "astro:content";

export function isIssueReport(post: CollectionEntry<"posts">) {
  return post.data.postType === "issue-report";
}

export function getTitleParts(rawTitle: string) {
  const title = rawTitle.trim();
  const delimiterIndex = title.search(/[:：]/);
  const hasSubtitle = delimiterIndex > -1;

  return {
    titleMain: hasSubtitle ? title.slice(0, delimiterIndex).trim() : title,
    titleSub: hasSubtitle ? title.slice(delimiterIndex + 1).trim() : ""
  };
}

export function getPostUrl(post: CollectionEntry<"posts">) {
  return isIssueReport(post) ? `/issues/${post.slug}/` : `/posts/${post.slug}/`;
}

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

export function getVisibleStandardPosts(posts: CollectionEntry<"posts">[]) {
  return getVisiblePosts(posts).filter((post) => !isIssueReport(post));
}

export function getVisibleIssueReports(posts: CollectionEntry<"posts">[]) {
  return getVisiblePosts(posts).filter((post) => isIssueReport(post));
}
