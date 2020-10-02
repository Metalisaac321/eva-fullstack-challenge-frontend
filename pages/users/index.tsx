import { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import fetch from 'isomorphic-fetch';
import Layout from '../../components/Layout'
import List from '../../components/List'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  console.log('url: ', url);
  const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
  return response.json();
};

const WithStaticProps = ({ items }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { data, error } = useSWR('users', fetcher, { initialData: items })

  return (
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Users List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
    </p>
      <p>You are currently on: /users</p>
      <List items={data} />
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>

      <button className="btn-blue">
        Return new Data
      </button>
    </Layout>
  )
}

/* export const getServerSideProps: GetServerSideProps = async () => {
  const items = await fetchData()
  console.log('getServerSiderProps: ', items[1])
  return {
    props: {
      items,
    },
  }
} */

export const getStaticProps: GetStaticProps = async () => {
  const items = await fetchData()

  return {
    props: { items }
  }
}

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const responseJson = await response.json();
  console.log('response json ', responseJson)
  return responseJson;
}

export default WithStaticProps
