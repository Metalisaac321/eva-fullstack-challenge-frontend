import { GetStaticProps, InferGetStaticPropsType } from 'next'

export default ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const { data, error } = useSWR('users', fetcher, { initialData: items })

  return (
    <p className="text-xl2">
      Login
    </p>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { items: [] }
  }
}
