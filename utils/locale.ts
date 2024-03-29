export function getLocalePreference() {
  let fullLocale: string | undefined
  let languageCode: string | undefined

  if (import.meta.server) {
    const requestHeaders = useRequestHeaders()
    fullLocale = requestHeaders['accept-language']
    languageCode = fullLocale?.split(',')[0]?.slice(0, 2)
  } else if (import.meta.client) {
    fullLocale = navigator.language
    languageCode = fullLocale?.slice(0, 2)
  }

  return { languageCode, fullLocale }
}
