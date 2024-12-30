import Image from 'next/image'
import { Recipe } from '@/lib/mockData'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface RecipeContentProps {
  recipe: Recipe
}

export function RecipeContent({ recipe }: RecipeContentProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{recipe.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <Image
            src={recipe.image}
            alt={recipe.name}
            width={400}
            height={300}
            className="rounded-lg w-full h-64 object-cover"
          />
          <div>
            <h3 className="text-lg font-semibold">Ingredients</h3>
            <ul className="list-disc pl-5">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Instructions</h3>
            <ol className="list-decimal pl-5">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Storage</h3>
            <p>{recipe.storage}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Family Notes</h3>
            <p>{recipe.familyNotes}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

