export function useLocalePreference() {
  const languageCode = useState<string | undefined>('locale-preference', () => {
    if (import.meta.server) {
      const header = useRequestHeader('Accept-Language')
      return header?.split(',')[0]?.slice(0, 2)
    }
  })

  if (import.meta.client && !languageCode.value) {
    languageCode.value = navigator.language?.slice(0, 2)
  }

  return {
    languageCode,
  }
}
