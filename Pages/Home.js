import React from "react";
import { Link } from 'react-router-dom'

function Home(){
    return(
        <>
 <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <Link class="btn btn-outline-success" type="submit" to='Cart/'>Cart</Link>
    </form>
  </div>
</nav>
        </>
    )
}
export default Home;