import type {
  KirbyBlock,
  KirbyQueryResponse,
  KirbyQuerySchema,
} from '#nuxt-kql'

export interface KirbyLinktreeData {
  id: string
  title: string
  intendedTemplate: string
  description: string
  blocks: KirbyBlock[]
  profileImage: {
    srcset: string
    width: number
    height: number
    alt: string
    thumbhash: string
  }
  thumbnail?: {
    url: string
  }
}

export type KirbyLinktreeResponse = KirbyQueryResponse<KirbyLinktreeData>

export const linktreeQuery: KirbyQuerySchema = {
  query: 'page("linktree")',
  select: {
    id: true,
    title: true,
    intendedTemplate: true,
    description: true,
    blocks: 'page.text.toResolvedBlocks',
    profileImage: {
      query: 'page.files.find("profile-image.png")',
      select: ['srcset', 'width', 'height', 'alt', 'thumbhash'],
    },
    thumbnail: {
      query: 'page.thumbnail.or(site.thumbnail).toFile?.resize(1200)',
      select: ['url'],
    },
  },
}
