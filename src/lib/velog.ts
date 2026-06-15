export const VELOG_USERNAME = "omnipo";

export type VelogPost = {
  id: string;
  title: string;
  shortDescription: string;
  urlSlug: string;
  tags: string[];
  thumbnail: string | null;
  releasedAt: string;
  likes: number;
  commentsCount: number;
  url: string;
};

type VelogPostRaw = {
  id: string;
  title: string;
  short_description: string | null;
  url_slug: string;
  tags: string[] | null;
  thumbnail: string | null;
  released_at: string;
  likes: number;
  comments_count: number;
};

const VELOG_API = "https://v2.velog.io/graphql";

const POSTS_QUERY = `
  query Posts($username: String!, $limit: Int, $cursor: ID) {
    posts(username: $username, limit: $limit, cursor: $cursor) {
      id
      title
      short_description
      url_slug
      tags
      thumbnail
      released_at
      likes
      comments_count
    }
  }
`;

function normalizePost(raw: VelogPostRaw): VelogPost {
  return {
    id: raw.id,
    title: raw.title.trim(),
    shortDescription: (raw.short_description ?? "").replace(/\s+/g, " ").trim(),
    urlSlug: raw.url_slug,
    tags: raw.tags ?? [],
    thumbnail: raw.thumbnail,
    releasedAt: raw.released_at,
    likes: raw.likes,
    commentsCount: raw.comments_count,
    url: `https://velog.io/@${VELOG_USERNAME}/${raw.url_slug}`,
  };
}

async function fetchVelogPage(
  username: string,
  limit: number,
  cursor?: string
): Promise<VelogPostRaw[]> {
  const response = await fetch(VELOG_API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: POSTS_QUERY,
      variables: { username, limit, cursor },
    }),
    next: { revalidate: 86400 },
  });

  if (!response.ok) {
    throw new Error(`Velog API error: ${response.status}`);
  }

  const json = (await response.json()) as {
    data?: { posts?: VelogPostRaw[] };
    errors?: { message: string }[];
  };

  if (json.errors?.length) {
    throw new Error(json.errors[0].message);
  }

  return json.data?.posts ?? [];
}

export async function getVelogPosts(
  username = VELOG_USERNAME,
  maxCount = 12
): Promise<VelogPost[]> {
  const posts: VelogPost[] = [];
  let cursor: string | undefined;

  while (posts.length < maxCount) {
    const batch = await fetchVelogPage(username, Math.min(20, maxCount - posts.length), cursor);
    if (batch.length === 0) break;

    for (const raw of batch) {
      posts.push(normalizePost(raw));
      if (posts.length >= maxCount) break;
    }

    if (batch.length < 20) break;
    cursor = batch[batch.length - 1].id;
  }

  return posts;
}

export function formatVelogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function excerpt(text: string, max = 120): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).trim()}…`;
}
