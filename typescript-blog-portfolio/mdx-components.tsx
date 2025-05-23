import type { MDXComponents } from 'mdx/types'
import { FormButton } from './src/components'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  }
}