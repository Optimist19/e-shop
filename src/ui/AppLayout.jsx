import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Nav from "../components/Nav"


  

function AppLayout() {



  return (
	<div className="layout">
		<Nav />
		<main>
			<Outlet/>
		</main>
		<Footer />
	</div>
  )
}

export default AppLayout