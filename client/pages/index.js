import { initializeStore } from '../store/index'

import Layout from '../components/Layout'
import SearchBar from '../components/SearchBar'
import Banners from '../components/Banners'

export default function Index() {
  return (
    <Layout>
      <SearchBar autoFocus />
      <Banners />
    </Layout>
  )
}

export function getServerSideProps() {
  const reduxStore = initializeStore()
  return { props: { initialReduxState: reduxStore.getState() } }
}
