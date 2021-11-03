import Sidebar from './Sidebar'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

const Layout = ({location}) => {
  return (
    <Header Title={location.pathname} Sidebar={Sidebar} Content={Content} Footer={Footer} />
  )
}

export default Layout;