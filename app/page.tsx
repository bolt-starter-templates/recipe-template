"use client"

import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { RecipeContent } from "@/components/recipe-content"
import { Recipe, recipes } from "@/lib/mockData"

export default function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe>(recipes[0])
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme('dark')
  }, [])

  return (
    <ThemeProvider attribute="class">
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar onSelectRecipe={setSelectedRecipe} theme={theme} setTheme={setTheme} />
          <main className="flex-1 overflow-y-auto p-6 w-full">
            <RecipeContent recipe={selectedRecipe} />
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  )
}

