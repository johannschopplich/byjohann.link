<script setup lang="ts">
import '~/assets/css/main.css'
import '~/assets/css/prose.css'
</script>

<template>
  <Html lang="de" class="bg-[#f3f2ea]">
    <Head>
      <Link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔗</text></svg>"
      />
    </Head>

    <Body>
      <AppHeader />

      <main id="main" class="mx-auto mb-8 w-[min(100%-2rem,640px)]">
        <NuxtPage />
      </main>
    </Body>
  </Html>
</template>
