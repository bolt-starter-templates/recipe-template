"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Search, Moon, Sun } from 'lucide-react'
import { categories, recipes, Recipe } from '@/lib/mockData'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInput,
  SidebarFooter,
} from '@/components/ui/sidebar'
import { Switch } from '@/components/ui/switch'

interface AppSidebarProps {
  onSelectRecipe: (recipe: Recipe) => void;
}

export function AppSidebar({ onSelectRecipe }: AppSidebarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTheme('dark')
  }, [])

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const recipesByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredRecipes.filter(recipe => recipe.category === category)
    return acc
  }, {} as Record<string, Recipe[]>)

  if (!mounted) return null

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarGroup className="py-2">
          <SidebarGroupContent className="relative">
            <SidebarInput
              placeholder="Search recipes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform opacity-50" />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>
      <SidebarContent>
        {categories.map((category) => (
          <SidebarGroup key={category}>
            <SidebarGroupLabel>{category}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {recipesByCategory[category].map((recipe) => (
                  <SidebarMenuItem key={recipe.id}>
                    <SidebarMenuButton onClick={() => onSelectRecipe(recipe)}>
                      {recipe.name}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span>Dark mode</span>
          <Switch
            checked={theme === 'dark'}
            onCheckedChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

