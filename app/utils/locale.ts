export function getLocalePreference() {
  let languageCode: string | undefined

  if (import.meta.server) {
    const acceptLanguageHeader = useRequestHeader('Accept-Language')
    languageCode = acceptLanguageHeader?.split(',')[0]?.slice(0, 2)
  } else if (import.meta.client) {
    languageCode = navigator.language?.slice(0, 2)
  }

  return { languageCode }
}
