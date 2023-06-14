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
  cover?: {
    url: string
  }
  images: {
    uuid: string
    srcset: string
    width: number
    height: number
    alt: string
  }[]
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
      query: 'page.files.find("profile-image.jpg")',
      select: ['srcset', 'width', 'height', 'alt', 'thumbhash'],
    },
    cover: {
      query: 'page.cover.toFile?.resize(1200)',
      select: ['url'],
    },
    // Retrieve all images from the page to resolve a UUID from
    // e.g. a structure field to a file object
    images: {
      query: 'page.files.template("image")',
      select: ['uuid', 'srcset', 'width', 'height', 'alt'],
    },
  },
}
