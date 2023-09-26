import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import "assets/css/style.css"

import Logo from "assets/images/logo.svg"
import Img1 from "assets/images/img-1.png"
import Icon1 from "assets/images/icon-1.svg"
import Icon2 from "assets/images/icon-2.svg"
import Icon3 from "assets/images/icon-3.svg"
import Icon4 from "assets/images/icon-4.svg"
import Icon5 from "assets/images/icon-5.svg"
import Icon6 from "assets/images/icon-6.svg"
import Icon7 from "assets/images/icon-7.svg"
import Img2 from "assets/images/img-2.png"
import Img3 from "assets/images/img-3.png"
import Img4 from "assets/images/img-4.png"
import Img5 from "assets/images/img-5.png"
import Img6 from "assets/images/img-6.png"
import Img7 from "assets/images/img-7.png"
import Img8 from "assets/images/img-8.png"
import Img9 from "assets/images/img-9.png"

const Home = () => {
  let lastDate = new Date('2023-10-01');
  let todayDate = new Date();
  let dif = Math.abs(lastDate - todayDate) / 1000;

  const countDownClock = (number = 100, format = 'seconds') => {
    const d = document;
    const days1Element = d.querySelector('#day-1');
    const days2Element = d.querySelector('#day-2');
    const hour1Element = d.querySelector('#hour-1');
    const hour2Element = d.querySelector('#hour-2');
    const minute1Element = d.querySelector('#minute-1');
    const minute2Element = d.querySelector('#minute-2');
    let countdown;
    convertFormat(format);

    function convertFormat(format) {
      switch (format) {
        case 'seconds':
          return timer(number);
        case 'minutes':
          return timer(number * 60);
        case 'hours':
          return timer(number * 60 * 60);
        case 'days':
          return timer(number * 60 * 60 * 24);
      }
    }

    function timer(seconds) {
      const now = Date.now();
      const then = now + seconds * 1000;

      // For first render
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      displayTimeLeft(secondsLeft);

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        }

        displayTimeLeft(secondsLeft);
      }, 1000);
    }

    function displayTimeLeft(seconds) {
      const totalDaysRemaining = Math.floor(seconds / 86400);
      const totalHourRemaing = Math.floor((seconds % 86400) / 3600);
      const totalMinuteRemaing = Math.floor(((seconds % 86400) % 3600) / 60);

      days1Element.textContent = Math.floor(totalDaysRemaining / 10);
      days2Element.textContent = totalDaysRemaining % 10;
      hour1Element.textContent = Math.floor(totalHourRemaing / 10);
      hour2Element.textContent = totalHourRemaing % 10;
      minute1Element.textContent = Math.floor(totalMinuteRemaing / 10);
      minute2Element.textContent = totalMinuteRemaing % 10;
    }
  };

  useEffect(() => {
    const accordionContent = document.querySelectorAll('.accordion-content');

    accordionContent.forEach((item, index) => {
      let header = item.querySelector('header');
      header.addEventListener('click', () => {
        item.classList.toggle('is-open');

        let description = item.querySelector('.accordion-content-description');
        if (item.classList.contains('is-open')) {
          description.style.height = `${description.scrollHeight}px`;
          item.querySelector('i').classList.replace('fa-plus', 'fa-minus');
        } else {
          description.style.height = '0px';
          item.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
        removeOpenedContent(index);
      });
    });

    function removeOpenedContent(index) {
      accordionContent.forEach((item2, index2) => {
        if (index != index2) {
          item2.classList.remove('is-open');
          let descrip = item2.querySelector('.accordion-content-description');
          descrip.style.height = '0px';
          item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
      });
    }

    countDownClock(dif, 'seconds');
  }, [])

  return (
    <Fragment>
      <header className='header pt-6x pt-md-12x'>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">

            <div className="logo">
              <figure>
                <img src={Logo} alt="" />
              </figure>
            </div>
            <nav className='nav p-6x pt-10x p-md-0x'>
              <ul className='d-flex flex-column flex-md-row gap-x-md-12x gap-y-6x'>
                <li className='nav__item'><Link className='nav__link' to="/participation">Participation</Link></li>
                <li className='nav__item'><Link className='nav__link' to="/leaderboard">Leaderboard</Link></li>
                {/* <li className='nav__item'><a className='nav__link' href="/">Events</a></li> */}
                <li className='nav__item'><a className='nav__link' href="#swag">SWAG</a></li>
                <li className='nav__item'><a className='nav__link' href="#faq">FAQs</a></li>
              </ul>

              <button className="menu-close d-md-none">
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
            </nav>

            <button className="menu-toggle">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>


          </div>
        </div>
      </header>

      <main>
        <section className="banner pt-10x text-center text-lg-left">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
              <div className="pr-lg-25x order-2 order-lg-1">
                <h1 className='banner__title color-white--base fw-300'>CELEBRATING <span className='color-primary--base'>5</span>
                  YEARS
                </h1>
                <p className='mb-12x text-base text-md-lg max-w-500 mx-auto mx-lg-0x'>Open Source Hackathon for Leapfroggers and
                  LeapNetwork</p>

                <div className="d-flex gap-6x mt-6x m-lg-0x banner__buttons">
                  <button className='btn btn-primary'><Link className='text-black' to="/participation">Participate</Link></button>
                  <button className='btn btn-link'><Link className='text-white' to="/leaderboard">Leaderboard</Link></button>
                </div>
              </div>

              <div className="banner__image order-1 order-lg-2">
                <img src={Img1} alt="" />

                <div className="mb-2x text-center text-sm">Remaining</div>
                <div className="d-flex gap-6x text-center">
                  <div className="">
                    <div className="days d-flex gap-1x">
                      <span className='number' id='day-1'></span>
                      <span className='number' id='day-2'></span>
                    </div>
                    <div className="time-label">days</div>
                  </div>

                  <div className="hours-container">
                    <div className="hours d-flex gap-1x">
                      <span className='number' id='hour-1'></span>
                      <span className='number' id='hour-2'></span>
                    </div>
                    <div className="time-label">hours</div>
                  </div>

                  <div className="minutes-container">
                    <div className="minutes d-flex gap-1x">
                      <span className='number' id='minute-1'></span>
                      <span className='number' id='minute-2'></span>
                    </div>
                    <div className="time-label">minutes</div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>

        <section className='text-center py-16x py-md-20x bg-grey--base'>
          <div className="container">
            <h2 className='mb-14x'>WHAT YOU NEED TO KNOW</h2>

            <div className="max-w-lg-985 mx-auto">
              <div className="row gutter-y-12x gutter-y-lg-0x">
                <div className="col-12 col-md-4">
                  <figure>
                    <img className='mb-4x' src={Icon1} alt="" />
                    <figcaption className='max-w-300 mx-auto max-w-lg-auto'>
                      <h3 className='mb-2x font-figtree color-white--base'>Who</h3>
                      <p>Open Source Hackathon for Leapfroggers and LeapNetwork</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-12 col-md-4">
                  <figure>
                    <img className='mb-4x' src={Icon2} alt="" />
                    <figcaption className='max-w-300 mx-auto max-w-lg-auto'>
                      <h3 className='mb-2x font-figtree color-white--base'>How</h3>
                      <p>Create 8 pull requests (PR)</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-12 col-md-4">
                  <figure>
                    <img className='mb-4x' src={Icon3} alt="" />
                    <figcaption className='max-w-300 mx-auto max-w-lg-auto'>
                      <h3 className='mb-2x font-figtree color-white--base'>When</h3>
                      <p>Any time between Oct 1 to Oct 31, 2023.</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='participation' className='py-16x py-md-34x'>
          <div className="container">
            <h2 className='mb-8x'>Participation</h2>
            <p className='mb-6x'>The challenge is quite simple:</p>

            <div className="row gutter-y-6x gutter-x-lg-13x">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className='mb-md-6x' src={Icon4} alt="" />
                  <p>Create 8 pull requests (PRs) between Oct 1 to Oct 31, 2023.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className='mb-md-6x' src={Icon5} alt="" />
                  <p>At least 5 PRs should be in repositories not owned by you.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className='mb-md-6x' src={Icon6} alt="" />
                  <p>PRs can be made to any public repository on GitHub.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className='mb-md-6x' src={Icon7} alt="" />
                  <p>PRs should not be labeled as ‘invalid.’</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16x py-md-20x bg-grey--base'>
          <div className="container">
            <h2 className='mb-8x'>Past Stats</h2>

            <div className="row align-items-center">
              <div className="col-lg-7 mb-6x mb-lg-0x">
                <div className="row gutter-5x">
                  <div className="col-12 col-md-6">
                    <div
                      className="bg-grey--light p-10x radius-base h-100 d-flex align-items-center justify-content-center flex-column">
                      <div className="font-antonio text-huge lh-normal">100+</div>
                      <p className='text-lg white-space-nowrap'>Participants</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row gutter-4x flex-wrap">
                      <div className="col-6">
                        <div
                          className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-antonio">500+</div>
                          <div className="white-space-nowrap">Total PR</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div
                          className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-antonio">200+</div>
                          <div className="white-space-nowrap">Merge PR</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div
                          className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-antonio">100+</div>
                          <div className="white-space-nowrap">Goodies</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div
                          className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-antonio">71</div>
                          <div className="white-space-nowrap">Participants</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 pl-lg-22x">Frogtoberfest had more participants from 2019 to this year, ensuring its
                continued
                success
                for the next decade.</div>
            </div>
          </div>
        </section>

        <section className='py-16x py-md-34x'>
          <div className="container">
            <h2 className='mb-8x'>Leaps & Bonds</h2>
            <p className='mb-14x text-lg max-w-985 lh-120'>Whether it’s your first time or the umpteenth, join the conversation
              as we
              discuss all
              things
              open-source.
              We’re bringing in professionals who will share their experiences and tips on contributing to Frogtoberfest.
            </p>

            <div className="row flex-wrap gutter-8x">
              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img2} alt="" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img3} alt="" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img4} alt="" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img5} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id='swag' className='py-16x py-md-20x bg-grey--base'>
          <div className="container">
            <div className="max-w-665 mb-8x">
              <h2 className='mb-8x'>SWAG for you</h2>
              <p className='text-lg mb-6x'>Frogtoberfest SWAG is waiting for you! Like every Frog-tober, we’re hopping back
                with
                exclusive merch and
                ribbiting perks for all your contributions</p>
              <ul className='has-bullet'>
                <li>Top 15 contributors receive exclusive Frogtoberfest SWAG.</li>
                <li>All eligible participants receive a digital certificate of participation.</li>
                <li>Get featured on Leapfrog's social media and newsletters</li>
              </ul>
            </div>

            <div className="row flex-wrap gutter-8x">
              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img6} alt="" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img7} alt="" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img8} alt="" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img9} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id='faq' className='py-16x py-md-34x'>
          <div className="container">
            <h2 className='mb-8x'>FAQs</h2>

            <div className="accordion">
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    What kind of projects can I work on during the hackathon?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quidem nihil expedita inventore incidunt
                  minima, modi error voluptatem molestias fugiat at iure provident ipsam totam nam eveniet tenetur. Odio
                  autem eaque eum ea velit nam quod placeat architecto aut dolore, nemo voluptas aliquam modi atque,
                  recusandae delectus adipisci blanditiis qui?
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    How do I participate in the hackathon?

                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas sint, earum iure eveniet, tempore
                  officiis voluptatem voluptates ipsum excepturi asperiores quaerat? Sed ratione necessitatibus voluptatem
                  perspiciatis dolore facilis libero qui impedit eos atque alias suscipit explicabo in officia doloribus
                  facere hic deserunt inventore eveniet repudiandae, eum praesentium optio. Nam, dolores quam voluptatem
                  beatae, rerum natus enim magni quasi explicabo nesciunt possimus praesentium cum repellat. Est saepe
                  doloribus culpa ipsa sapiente odio modi mollitia qui nam, fuga enim rem maxime nulla. Dolorem, sit
                  laborum. Voluptates deleniti distinctio vel tempore fugit! Voluptatum aliquam reiciendis consequatur
                  labore eius illo quia tempora nesciunt cum!
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    What are the judging criteria and prizes for the hackathon?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vitae vel ea quae laborum nemo
                  laboriosam impedit, atque cupiditate nam rerum, rem repellendus totam mollitia et explicabo aut quo, error
                  placeat maxime! Qui harum eos porro vitae quis, ipsam iste quidem dignissimos nobis voluptatibus tempora,
                  ullam veritatis optio similique odit!
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    What are the judging criteria and prizes for the hackathon?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia sint unde, dolores quod omnis ut,
                  eligendi deleniti sit vero possimus optio, eveniet dolor quae rerum similique sunt repellendus quasi hic.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='pt-16x pt-md-20x pb-10x bg-primary--light'>
        <div className="container">
          <div className="row gutter-x-md-11x">
            <div className="col-12 col-md-6 col-xl-7 mb-10x mb-md-0x">
              <div className="max-w-lg-665">
                <div className="">
                  <h3 className='mb-4x'>Subscribe to our newsletter</h3>
                  <p>Join our newsletter community to receive fresh insights, special offers, and exciting updates right
                    in
                    your inbox. Don't miss out – subscribe now!</p>
                </div>

                <figure className='d-none d-md-block mt-10x'>
                  <img src={Logo} alt="" />
                </figure>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="">
                <form className='form-subscribe mb-10x' action="">
                  <input className='form-control' type="email" placeholder='Enter you email here' />
                  <input className='form-submit' type="submit" value="Subscribe" />
                </form>

                <div className="">
                  <p className='mb-4x fw-300'>Follow us at our socials</p>
                  <ul className='social-icons d-flex gap-6x'>
                    <li><a href="/">
                      <i className="fa-brands fa-facebook"></i>
                    </a></li>
                    <li><a href="/"> <i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="/"> <i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>

                <figure className='d-block d-md-none mt-10x hide-sm'>
                  <img src={Logo} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="overlay"></div>
    </Fragment >
  )
};

export default Home;
