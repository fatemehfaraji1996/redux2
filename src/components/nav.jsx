import Backgrand from "./backgrand"

function Nav() {
    return(
        <>
        <div className="parent">
        <nav class="navbar bg-body-tertiary">
  <div class="container-fluid">

    <img className="logoaps" src="https://static.eseminar.tv/public/upload/host/1707310532_33.jpg" alt="" />

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cantact Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</nav>


        </div>
        </>
    )
}
export default Nav