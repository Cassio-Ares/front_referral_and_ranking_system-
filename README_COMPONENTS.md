````````
Component de botão 
import type { ComponentProps } from 'react'

IMPORTANTE ===> extends ComponentProps ao colocar isso e colocar qual html estamos extendendo 
                carregamos todas as propriedades do elemento html ex:
                interface ButtonProps extends ComponentProps<'button'> {} isso carrega junto nas props type, children, ....
                 
interface ButtonProps extends ComponentProps<'button'> {}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900"
      {...props}
    />
  )
}

````````