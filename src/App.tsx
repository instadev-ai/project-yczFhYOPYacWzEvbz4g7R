import { ThemeProvider } from "@/components/theme-provider"
import Layout from "./components/Layout"
import Hero from "./components/Hero"
import ToolsGrid from "./components/ToolsGrid"
import Features from "./components/Features"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background">
        <Layout>
          <Hero />
          <ToolsGrid />
          <Features />
        </Layout>
      </div>
    </ThemeProvider>
  )
}

export default App