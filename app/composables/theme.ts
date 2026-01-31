export function useTheme() {
  const { theme } = useRuntimeConfig().public

  return {
    theme,
    generateColorVars,
  }
}

function generateColorVars(
  colors: Record<string, unknown>,
  prefix = '--un-color',
): string {
  const declarations: string[] = []

  for (const [key, value] of Object.entries(colors)) {
    const varName = `${prefix}-${key}`

    if (typeof value === 'string') {
      declarations.push(`${varName}: ${value};`)
      continue
    }

    if (typeof value === 'object' && value !== null) {
      const colorGroup = value as Record<string, unknown>

      if (typeof colorGroup.DEFAULT === 'string')
        declarations.push(`${varName}: ${colorGroup.DEFAULT};`)

      declarations.push(generateColorVars(colorGroup, varName))
    }
  }

  return declarations.filter((line) => !line.includes('-DEFAULT:')).join('\n')
}
