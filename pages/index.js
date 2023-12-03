import Meta from "../components/Meta";
import { Navbar, Nav } from "react-bootstrap";
import Navigation from "../components/Navigation";

export default function Home() {
  const servicesDomain =
    process.env.NEXT_PUBLIC_SERVICES_DOMAIN || "https://services.acme.com";

  return (
    <div>
      <Meta
        title="ACME App"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dolor accumsan, molestie mauris vitae, condimentum urna. Vestibulum vulputate ligula sed eleifend bibendum."
        keywords="Ut luctus condimentum metus, vel consequat sapien feugiat sit amet. Nam augue massa, vulputate in ipsum id, iaculis aliquam libero"
      />

      <Navigation product="ACME APP">
        <Nav.Link className="nav-item nav-link active" href="#pricing">
          PRICING
        </Nav.Link>
        <Nav.Link className="nav-item nav-link active" href="#how-to">
          HOW-TO
        </Nav.Link>
        <Nav.Link
          className="nav-item nav-link active btn btn-primary"
          style={{ color: "#FFFFFF" }}
          href="#getting_started"
        >
          GET STARTED
        </Nav.Link>
      </Navigation>

      {/*Masthead*/}
      <header id="header" className="masthead text-white text-center">
        {/*<div className="overlay"></div>*/}
        <div className="container">
          <div className="row">
            <div className="m-auto text-center">
              {/* offer*/}
              <h1 className="dropshadow">ACME App </h1>
              {/* benefit*/}
              <p className="lead mb-5 dropshadow" style={{ color: "#cfcfcf" }}>
                Morbi pharetra leo id eros cursus porttitor. Praesent ut metus
                risus. Aliquam molestie est ac vulputate mollis
              </p>{" "}
              <div className="m-auto mb-5">
                <a
                  className="btn btn-primary btn-lg  col-7 col-sm-6 col-md-5 col-lg-4 col-xl-4 mx-auto mb-5"
                  href="#getting_started"
                >
                  Get Started
                </a>
              </div>
            </div>

            <div className=" mb-5 mx-auto">
              <img
                className="img-fluid rounded "
                src="assets/img/app_pure.png"
                alt="App image."
              />
            </div>
          </div>
        </div>
      </header>

      {/** stakes **/}
      <section id="stakes" className="testimonials text-center bg-white">
        <div className="container d-flex justify-content-center">
          <div className="col-md-8">
            <h2 className="mb-5 ">You want to do this thing, but you...</h2>
            <div className="row">
              <StakeItem
                icon="fas fa-heart-broken"
                title="Stake item 1"
                message="Duis vel ante a mi molestie scelerisque nec rhoncus nisi. Quisque vel nulla iaculis eros tristique maximus. Sed facilisis porttitor justo?"
              />
              <StakeItem
                icon="fas fa-frown"
                title="Stake item 2?"
                message="Suspendisse accumsan quam eget eros imperdiet rutrum. Sed eleifend sapien faucibus est scelerisque, mattis consequat sem semper?"
              />
              <StakeItem
                icon="fas fa-minus-circle"
                title="Stake item 3?"
                message="et ultrices libero. Ut malesuada porttitor sapien eu mattis. Nulla nec est elementum, aliquet quam et, vehicula diam?"
              />
              <StakeItem
                icon="fas fa-tired"
                title="Pellentesque ullamcorper tincidunt nisi vitae sollicitudin?"
                message="Aliquam molestie est ac vulputate mollis. Duis vel ante a mi molestie scelerisque nec rhoncus nisi. Quisque vel nulla iaculis eros tristique maximus. Sed facilisis porttitor justo. Morbi vehicula nec ex a pulvinar. Sed scelerisque volutpat vulputate?"
              />
            </div>
            <div className="row">
              <div className="col-12 mb-5">
                <p className="lead">
                  We designed our ACME App to help you avoid these issues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** value proposition **/}
      <section
        id="value_proposition"
        className="testimonials text-center bg-light"
      >
        <div className="container">
          <div className="col-md-8 mx-auto">
            <h2 className="mb-5 ">Be more productive</h2>
            <div className="row">
              <ValueItem
                icon="fas fa-check-circle"
                title="Value 1 "
                message="Value 1  Mauris eget efficitur nisi. Phasellus neque arcu, varius eu gravida ac, bibendum sed dolor."
              />
              <ValueItem
                icon="fas fa-bookmark"
                title="Value 2"
                message="Ut luctus condimentum metus, vel consequat sapien feugiat sit amet."
              />
              <ValueItem
                icon="fas fa-eye"
                title="Value 3"
                message="Just push a button and you will ...."
              />
              <ValueItem
                icon="fas fa-database"
                title="Create your ..."
                message="Easily create your vehicula nec ex a pulvinar. Sed scelerisque volutpat vulputate."
              />
              <ValueItem
                icon="fas fa-paste"
                title="Copy/paste and edit"
                message="Prepare new acmes copy-pasting and editing Morbi vehicula nec ex a pulvinar."
              />
              <ValueItem
                icon="fas fa-sort"
                title="Re-order easily"
                message="Re-order Morbi vehicula nec ex a pulvinar."
              />
              <ValueItem
                icon="fas fa-hourglass-end"
                title="Another value"
                message="Morbi vehicula nec ex a pulvinar."
              />
              <ValueItem
                icon="fas fa-equals"
                title="Last value"
                message="Morbi pharetra leo id eros cursus porttitor. Praesent ut metus risus."
              />
            </div>
          </div>
        </div>
      </section>

      {/** the guide (empathy and authority) **/}
      <section id="guide" className="testimonials text-center bg-white">
        <div className="container col-md-10 col-lg-8 col-xl-7 text-left">
          <h2 className="mb-5 text-center">We have been there</h2>
          <p>
            Quisque vel nulla iaculis eros tristique maximus. Sed facilisis
            porttitor justo. Morbi vehicula nec ex a pulvinar. Sed scelerisque
            volutpat vulputate.
          </p>

          <p>
            Quisque vel nulla iaculis eros tristique maximus. Sed facilisis
            porttitor justo. Morbi vehicula nec ex a pulvinar. Sed scelerisque
            volutpat vulputate.
          </p>

          <p className="mb-5">
            &quot;Mauris eget efficitur nisi. Phasellus neque arcu, varius eu
            gravida ac, bibendum sed dolor.&quot; (Happyy customer)
          </p>
        </div>
      </section>

      {/** No lock in*/}
      <section id="no_lock_in" className="testimonials text-left bg-light">
        <div className="container col-md-10 col-lg-8 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">No lock in</h2>
          <p>
            Sed facilisis porttitor justo. Morbi vehicula nec ex a pulvinar. Sed
            scelerisque volutpat vulputate.
          </p>
          <h3>
            Quisque vel nulla iaculis eros tristique maximus. Sed facilisis
            porttitor justo.
          </h3>

          <p>
            Donec et ultrices libero. Ut malesuada porttitor sapien eu mattis.
            Nulla nec est elementum, aliquet quam et, vehicula diam. Nulla
            efficitur tortor quis lorem vestibulum, at consequat magna aliquet.
            Integer at vehicula est, nec dictum orci.
          </p>
          <p>
            Donec et ultrices libero. Ut malesuada porttitor sapien eu mattis.
            Nulla nec est elementum, aliquet quam et, vehicula diam. Nulla
            efficitur tortor quis lorem vestibulum, at consequat magna aliquet.
            Integer at vehicula est, nec dictum orci.
          </p>
        </div>
      </section>

      {/** (getting started) the plan for getting the app */}
      <section
        id="getting_started"
        className="features-icons bg-white text-center "
      >
        <div className="container ">
          <h2 className="mb-5 text-center">Three steps for getting started</h2>

          <div className="row ">
            <div className="col-md-4 ">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
                <div className="features-icons-icon d-flex ">
                  <i
                    width="4rem"
                    className="fas fa-user-plus m-auto text-primary"
                    style={{ fontSize: "4rem", color: "dodgerblue" }}
                  />
                </div>
                <h3>1. Join the Waitlist!</h3>
                <p className="lead mb-0 ">
                  Nullam sodales massa ac urna tincidunt, ac imperdiet ex porta.
                  Vestibulum venenatis iaculis porttitor. Nullam malesuada
                  imperdiet diam, a porttitor turpis varius eu..
                </p>

                <a className="btn btn-primary btn-lg  mt-3" href="#">
                  Join waitlist
                </a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
                <div className="features-icons-icon d-flex ">
                  <i
                    width="4rem"
                    className="fas fa-download m-auto text-primary"
                    style={{ fontSize: "4rem", color: "dodgerblue" }}
                  />
                </div>
                <h3>2. Download</h3>
                <p className="lead mb-0 ">
                  Aenean mauris purus, placerat sed turpis ut, porta porttitor
                  metus. Nullam sodales massa ac urna tincidunt, ac imperdiet ex
                  porta. Vestibulum venenatis iaculis porttitor. Nullam
                  malesuada imperdiet diam, a porttitor turpis varius eu.
                </p>
                <a className="btn btn-primary btn-lg  mt-3" href="#">
                  Join waitlist
                </a>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3 ">
                <div className="features-icons-icon d-flex ">
                  <i
                    width="4rem"
                    className="fas fa-shopping-cart m-auto text-primary"
                    style={{ fontSize: "4rem", color: "dodgerblue" }}
                  />
                </div>
                <h3>3. Purchase</h3>
                <p className="lead mb-0 ">
                  Aenean mauris purus, placerat sed turpis ut, porta porttitor
                  metus. Nullam sodales massa ac urna tincidunt, ac imperdiet ex
                  porta. Vestibulum venenatis iaculis porttitor. Nullam
                  malesuada imperdiet diam, a porttitor turpis varius eu
                </p>
                <a
                  href="#pricing"
                  className="btn btn-block btn-lg btn-outline-primary mt-3"
                >
                  Pricing
                </a>
                <br></br>
                <a className="btn btn-primary btn-lg  mt-3" href="#">
                  Join waitlist
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/**pricing section */}
      <section id="pricing" className="testimonials text-center bg-light ">
        <div className="container col-md-10 col-lg-8 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">Tentative Pricing & plans</h2>
          <p>
            Aenean mauris purus, placerat sed turpis ut, porta porttitor metus.
            Aenean mauris purus, placerat sed turpis ut, porta porttitor metus.
          </p>

          <div className="card-deck mb-3 mt-5 text-center ">
            <div className=" card mb-4 box-shadow ">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Free</h4>
              </div>
              <div className="card-body  d-flex flex-column">
                <div className="flex--1 d-flex flex-column">
                  <div className="m-auto">
                    <p className="text-grey">
                      For showing hidden answers and cleanup
                    </p>
                    <h3 className="card-title pricing-card-title">
                      Always free
                    </h3>
                    <ul className="text-left mt-3 mb-4  ">
                      <li>Donec et ultrices libero</li>
                      <li>Donec et ultrices libero</li>
                      <li>Donec et ultrices libero</li>
                    </ul>
                  </div>
                </div>

                <a
                  type="button"
                  href="#getting_started"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="card mb-4 box-shadow ">
              <div className="card-header ">
                <h4 className="my-0 font-weight-normal">Premium</h4>
              </div>
              <div className="card-body d-flex flex-column">
                <div className=" flex--1">
                  <p>For individuals</p>
                  <h1 className="card-title pricing-card-title">$9.99</h1>
                  <p>Per month, billed annually</p>

                  <p>$11.99 billed monthly</p>
                  <ul className="text-left mt-3 mb-4  flex--1">
                    <li>All the free features</li>
                    <li>Donec et ultrices libero</li>
                    <li>Donec et ultrices libero</li>
                    <li>Donec et ultrices libero</li>
                  </ul>
                </div>

                <a
                  type="button"
                  href="#getting_started"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Get started
                </a>
              </div>
            </div>
            <div className="card mb-4 box-shadow">
              <div className="card-header">
                <h4 className="my-0 font-weight-normal">Volume</h4>
              </div>
              <div className="card-body d-flex flex-column ">
                <div className="flex--1 d-flex">
                  <div className="m-auto">
                    <p>Multiple users</p>
                    <h1 className="card-title pricing-card-title">$4.99 </h1>
                    <p>Per user, per month, billed annually</p>

                    <p>$5.99 billed monthly</p>
                    <ul className="text-left mt-3 mb-4 flex--1">
                      <li>Donec et ultrices libero</li>
                      <li>Donec et ultrices libero</li>
                    </ul>
                  </div>
                </div>

                <a
                  type="button"
                  href="#getting_started"
                  className="btn btn-lg btn-block btn-primary"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** documentation (how does it work?) */}
      <section id="how-to" className="testimonials text-left bg-white ">
        <div className="container col-md-10 col-lg-8 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">How does the ACME App work?</h2>
          <p>
            Donec et ultrices libero. Ut malesuada porttitor sapien eu mattis.
            Nulla nec est elementum, aliquet quam et, vehicula diam. Nulla
            efficitur tortor quis lorem vestibulum, at consequat magna aliquet.
            Integer at vehicula est, nec dictum orci. Aenean mauris purus,
            placerat sed turpis ut, porta porttitor metus. Nullam sodales massa
            ac urna tincidunt, ac imperdiet ex porta. Vestibulum venenatis
            iaculis porttitor. Nullam malesuada imperdiet diam, a porttitor
            turpis varius eu. Ut eget volutpat metus, non feugiat libero. Cras
            pellentesque eros at mi condimentum, ac sodales nisi molestie. Morbi
            dignissim lacinia varius. Nulla sit amet ligula leo. Nulla imperdiet
            efficitur ipsum.
          </p>
        </div>
      </section>

      {/** The Explanatory Paragraph */}
      <section id="explanation" className="testimonials text-left bg-light ">
        <div className="container col-md-10 col-lg-8 col-xl-7 mb-5">
          <h2 className="mb-5 text-center">The story of the ACME App</h2>
          <p>
            Donec et ultrices libero. Ut malesuada porttitor sapien eu mattis.
            Nulla nec est elementum, aliquet quam et, vehicula diam. Nulla
            efficitur tortor quis lorem vestibulum, at consequat magna aliquet.
            Integer at vehicula est, nec dictum orci. Aenean mauris purus,
            placerat sed turpis ut, porta porttitor metus. Nullam sodales massa
            ac urna tincidunt, ac imperdiet ex porta. Vestibulum venenatis
            iaculis porttitor. Nullam malesuada imperdiet diam, a porttitor
            turpis varius eu. Ut eget volutpat metus, non feugiat libero. Cras
            pellentesque eros at mi condimentum, ac sodales nisi molestie. Morbi
            dignissim lacinia varius. Nulla sit amet ligula leo. Nulla imperdiet
            efficitur ipsum.
          </p>
        </div>
      </section>

      {/** Bottom call to action */}
      <header id="call_to_action" className="masthead text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 mx-auto">
              <h1 className="dropshadow mb-5">Ready to get the ACME App?</h1>
            </div>
          </div>
          <div className="mb-5 mx-auto">
            <img
              className="img-fluid rounded "
              src="assets/img/app_pure.png"
              alt="Answers shown."
            />
          </div>
          <a
            className="btn btn-primary btn-lg col-sm-6 col-md-5 col-lg-4 col-xl-4 mx-auto"
            href="#getting_started"
          >
            Get Started
          </a>
        </div>
      </header>
    </div>
  );
}

function StakeItem({ title, message, icon }) {
  return (
    <div className="col-sm-6">
      <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3 ">
        <div className="features-icons-icon d-flex mb-3">
          <i
            width="4rem"
            className={icon}
            style={{ fontSize: "4rem", color: "dodgerBlue", margin: "auto" }}
          ></i>
        </div>
        <h5>{title}</h5>
        <p className="lead font-weight-light mb-5">{message}</p>
      </div>
    </div>
  );
}

function ValueItem({ title, message, icon }) {
  return (
    <div className="col-sm-6">
      <div className="value mx-auto mb-5 ">
        <div className="features-icons-icon d-flex mb-3">
          <i
            width="4rem"
            className={icon}
            style={{ fontSize: "4rem", color: "dodgerBlue", margin: "auto" }}
          ></i>
        </div>
        <h5>{title}</h5>
        <p className="lead font-weight-light mb-0">{message}</p>
      </div>
    </div>
  );
}
