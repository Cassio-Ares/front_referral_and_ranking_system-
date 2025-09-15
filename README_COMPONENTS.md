```````
IMPORTANTE:

data:

group: 

focus-within:

extends ComponentProps:

group-[&:not(:has(input:placeholder-shown))]:

outline-0

group-data-[error=true]:

```````


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



`````````
IMPORTANTE:

data:

group: 

focus-within:

extends ComponentProps:

group-[&:not(:has(input:placeholder-shown))]:

outline-0

group-data-[error=true]:


import { Mail } from "lucide-react";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  error?: boolean;
}

export function Input({ error = false, ...props }: InputProps) {
  return (
    <>
      <div
         data-error={error}
        className="group bg-gray-800 h-12 border border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100 data-[error=true]:border-danger"
      >
        <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
          <Mail />
        </span>
        <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
      </div>
    </>
  );
}


``````````