import React, { Fragment, useEffect } from 'react';

import Icon1 from 'assets/images/icon-1.svg';
import Icon2 from 'assets/images/icon-2.svg';
import Icon3 from 'assets/images/icon-3.svg';
import Icon4 from 'assets/images/icon-4.svg';
import Icon5 from 'assets/images/icon-5.svg';
import Icon6 from 'assets/images/icon-6.svg';
import Icon7 from 'assets/images/icon-7.svg';
import Img1 from 'assets/images/img-1.png';
import Img2 from 'assets/images/img-2.jpg';
import Img3 from 'assets/images/img-3.jpg';
import Img4 from 'assets/images/img-4.jpg';
import Img5 from 'assets/images/img-5.jpg';
import Img6 from 'assets/images/img-6.png';
import Img7 from 'assets/images/img-7.png';
import Img8 from 'assets/images/img-8.png';
import Img9 from 'assets/images/img-9.png';
import Logo from 'assets/images/logo.svg';
import SiteHeader from 'components/SiteHeader';
import SiteTimer from 'components/SiteTimer';

const Home = () => {
  useEffect(() => {
    const accordionContent = document.querySelectorAll('.accordion-content');

    accordionContent.forEach((item, index) => {
      const header = item.querySelector('header');

      header.addEventListener('click', () => {
        item.classList.toggle('is-open');

        const description = item.querySelector('.accordion-content-description');

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
        if (index !== index2) {
          item2.classList.remove('is-open');
          const descrip = item2.querySelector('.accordion-content-description');

          descrip.style.height = '0px';
          item2.querySelector('i').classList.replace('fa-minus', 'fa-plus');
        }
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Create a new script element
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://static.mailerlite.com/js/universal.js';

    // Add attributes to the script element
    script.setAttribute('data-uid', '738785');
    script.setAttribute('data-dm', 'd6l2h0j5t4');

    // Insert the script element into the DOM
    document.head.appendChild(script);

    // Define the ml_account variable and initialize it
    window.ml = function() {
      (window.ml.q = window.ml.q || []).push(arguments);
    };
    window.ml('accounts', '738785', 'd6l2h0j5t4', 'load');

    // Cleanup: remove the script element when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <SiteHeader></SiteHeader>
      <main>
        <section className="banner pt-10x text-center text-lg-left">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between lg:items-center">
              <div className="banner__image order-1 order-lg-2 pr-lg-25x ">
                <img src={Img1} alt="Remaining Days" />
              </div>
              <div className="order-2 order-lg-1">
                <h1 className="banner__title color-white--base fw-300 font-racing">
                  CELEBRATING <span className="color-primary--base font-chakra">5</span>
                  YEARS
                </h1>
                <p className="mb-10x text-base text-md-sm mx-auto mx-lg-0x banner_text">
                  Open Source Hackathon for Leapfroggers and LeapNetwork
                </p>

                <SiteTimer type="Ending in" />

                <div className="d-flex gap-6x mt-6x m-lg-0x banner__buttons">
                  <button className="btn btn-primary">
                    <a
                      className="text-black"
                      href="https://frog.ly/frogtoberfest2023"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Participate
                    </a>
                  </button>
                  <button className="btn btn-link">
                    <a
                      className="text-white"
                      href="https://frogtoberfest-leaderboard.lftechnology.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leaderboard
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-16x py-md-20x bg-grey--base">
          <div className="container">
            <h2 className="mb-14x font-racing">WHAT YOU NEED TO KNOW</h2>

            <div className="max-w-lg-985 mx-auto">
              <div className="row gutter-y-12x gutter-y-lg-0x">
                <div className="col-12 col-md-4">
                  <figure>
                    <img className="mb-4x" src={Icon1} alt="Open Source Hackathon for Leapfroggers and LeapNetwork" />
                    <figcaption className="max-w-300 mx-auto max-w-lg-auto">
                      <h3 className="mb-2x font-figtree color-white--base text-lg">Who</h3>
                      <p>Open Source Hackathon for Leapfroggers and LeapNetwork</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-12 col-md-4">
                  <figure>
                    <img className="mb-4x" src={Icon2} alt="Create 8 pull requests (PR)" />
                    <figcaption className="max-w-300 mx-auto max-w-lg-auto">
                      <h3 className="mb-2x font-figtree color-white--base text-lg">How</h3>
                      <p>Create 8 pull requests (PR)</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-12 col-md-4">
                  <figure>
                    <img className="mb-4x" src={Icon3} alt="Any time between Oct 1 to Oct 31, 2023." />
                    <figcaption className="max-w-300 mx-auto max-w-lg-auto">
                      <h3 className="mb-2x font-figtree color-white--base text-lg">When</h3>
                      <p>Any time between Oct 1 to Oct 31, 2023.</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="participation" className="py-16x py-md-34x">
          <div className="container">
            <h2 className="mb-8x font-racing">Participation</h2>
            <p className="mb-6x">The challenge is quite simple:</p>

            <div className="row gutter-y-6x gutter-x-lg-13x">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className="mb-md-6x" src={Icon4} alt="Create 8 pull requests" />
                  <p className="leading-6 font-normal">Create 8 pull requests (PRs) between Oct 1 to Oct 31, 2023.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img
                    className="mb-md-6x"
                    src={Icon5}
                    alt="At least 5 PRs should be in repositories not owned by you."
                  />
                  <p className="leading-6 font-normal">At least 5 PRs should be in repositories not owned by you.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className="mb-md-6x" src={Icon6} alt=" PRs can be made to any public repository on GitHub." />
                  <p className="leading-6 font-normal"> PRs can be made to any public repository on GitHub.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card">
                  <img className="mb-md-6x" src={Icon7} alt="PRs should not be labeled as ‘invalid." />
                  <p className="leading-6 font-normal">PRs should not be labeled as ‘invalid.&apos;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16x py-md-20x bg-grey--base">
          <div className="container">
            <h2 className="mb-8x font-racing">Past Stats</h2>

            <div className="row align-items-center">
              <div className="col-lg-7 mb-6x mb-lg-0x">
                <div className="row gutter-5x">
                  <div className="col-12 col-md-6">
                    <div className="bg-grey--light p-10x radius-base h-100 d-flex align-items-center justify-content-center flex-column">
                      <div className="font-antonio text-huge lh-normal font-chakra">200+</div>
                      <p className="text-lg white-space-nowrap font-chakra">Participants</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row gutter-4x flex-wrap">
                      <div className="col-6">
                        <div className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-chakra">632</div>
                          <div className="white-space-nowrap font-chakra">Total PR</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-chakra">500+</div>
                          <div className="white-space-nowrap font-chakra">Merge PR</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-chakra">71</div>
                          <div className="white-space-nowrap font-chakra font-chakra-peth">Goodies</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-grey--light p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl font-chakra">5</div>
                          <div className="white-space-nowrap font-chakra">Events</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 pl-lg-22x">
                Frogtoberfest had more participants from 2019 to this year, ensuring its continued success for the next
                decade.
              </div>
            </div>
          </div>
        </section>

        <section className="py-16x py-md-34x">
          <div className="container">
            <h2 className="mb-8x font-racing">Leaps & Bonds</h2>
            <p className="mb-14x text-lg max-w-985 lh-120">
              Whether it&apos;s your first time or the umpteenth, join the conversation as we discuss all things
              open-source. We&apos;re bringing in professionals who will share their experiences and tips on
              contributing to Frogtoberfest.
            </p>

            <div className="row flex-wrap gutter-8x">
              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className="img-full" src={Img2} alt="Leaps & Bonds" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className="img-full" src={Img3} alt=">Leaps & Bonds" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className="img-full" src={Img4} alt=">Leaps & Bonds" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className="img-full" src={Img5} alt=">Leaps & Bonds" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="swag" className="py-16x py-md-20x bg-grey--base">
          <div className="container">
            <div className="max-w-665 mb-8x">
              <h2 className="mb-8x font-racing">SWAG for you</h2>
              <p className="text-lg mb-6x">
                Frogtoberfest SWAG is waiting for you! Like every Frog-toberfest, we&apos;re hopping back with exclusive
                merch and ribbiting perks for all your contributions
              </p>
              <ul className="has-bullet">
                <li>Top 15 contributors receive exclusive Frogtoberfest SWAG.</li>
                <li>All eligible participants receive a digital certificate of participation.</li>
                <li>Get featured on Leapfrog&apos;s social media and newsletters</li>
              </ul>
            </div>

            <div className="row flex-wrap gutter-8x">
              <div className="col-12 col-md-6 col-lg-3">
                <figure className="has-overlay">
                  <img className="img-full" src={Img6} alt="SWAG for you" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className="has-overlay">
                  <img className="img-full" src={Img7} alt="SWAG for you" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className="has-overlay">
                  <img className="img-full" src={Img8} alt="SWAG for you" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className="has-overlay">
                  <img className="img-full" src={Img9} alt="SWAG for you" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-16x py-md-34x">
          <div className="container">
            <h2 className="mb-8x">FAQs</h2>

            <div className="accordion">
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">What is the purpose of Frogtoberfest?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  Foster the open source contribution culture.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">Can a beginner participate in Frogtoberfest?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  Yes, we encourage freshers as well as experts to participate in Frogtoberfest.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">
                    Are there any particular programming languages that are preferred?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  Feel free to use any programming language of your choice.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">
                    What kind of projects can I work on during the Frogtoberfest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  You have the flexibility to work on a wide range of projects. PRs can be made to any public repository
                  on GitHub, allowing you to contribute to various open-source initiatives, from software development
                  and documentation improvements to bug fixes and feature enhancements. Choose projects that align with
                  your interests, skills, and goals to make a meaningful impact in the open-source community.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">How do I participate in the Frogtoberfest?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  You have to fill up the registration form to be a verified participant for this challenge. In case
                  you’ve not filled the form, you will not be included in the official leaderboard. As such, you you
                  will not be eligible for the SWAG even if you pass the given criteria.
                </p>
              </div>

              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">How can I see my progress?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Check the leaderboard for your progress and top contributors. It can be accessed via official
                  Frogtoberfest website.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">
                    Do I only have to contribute to the company's open-source projects or can I contribute in other
                    projects too?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Any contribution is accepted as long as they’re valid and pass the criteria.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">What are the judging criteria for the Frogtoberfest?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  The judging criteria for Frogtober are primarily based on active contributions to the event.
                  <ol className="pl-10">
                    <li>Create 8 pull requests on GitHub between October 1 and October 31, 2023</li>
                    <li>At least 5 pull requests should be in repositories not owned by you</li>
                    <li>Ensure all PRs are valid.</li>
                  </ol>
                  Note: The top 15 contributors who fulfill these requirements will become eligible to receive the
                  coveted Frogtoberfest SWAG as a token of recognition for their valuable contributions.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">How do I win Frogtoberfest merch?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  The top 15 contributors and 10 Leapfroggers in the leaderboard who fulfill the criteria will become
                  eligible to receive the coveted Frogtoberfest SWAG as a token of recognition for their valuable
                  contributions.
                </p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">
                    Will my contributions to Hacktoberfest also count as Frogtoberfest contributions?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">Yes!</p>
              </div>
              <div className="accordion-content">
                <header className="d-flex gap-5x">
                  <span className="accordion-content-title">When and how I can attend this fest?</span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Frogtoberfest challenge starts every year on October 1 and end on October 31.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="antenna">
        <svg width="130" height="41" viewBox="0 0 130 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.5645 35.5L88.9418 8.78516H116.873" stroke="#544406" stroke-width="3.0009" />
          <circle
            cx="5.78414"
            cy="5.78414"
            r="7.28458"
            transform="matrix(-1 0 0 1 126.766 3)"
            fill="url(#paint0_linear_1945_76)"
            stroke="#544406"
            stroke-width="3.0009"
          />
          <path d="M103.564 35.5L41.3883 8.78516H13.457" stroke="#544406" stroke-width="3.0009" />
          <circle
            cx="9.34859"
            cy="8.78414"
            r="7.28458"
            fill="url(#paint1_linear_1945_76)"
            stroke="#544406"
            stroke-width="3.0009"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1945_76"
              x1="5.78414"
              y1="0"
              x2="5.78414"
              y2="11.5683"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F2CC25" />
              <stop offset="1" stop-color="#B8732D" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1945_76"
              x1="9.34859"
              y1="3"
              x2="9.34859"
              y2="14.5683"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F2CC25" />
              <stop offset="1" stop-color="#B8732D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <footer className="pt-16x pt-md-20x pb-10x bg-primary--light">
        <div className="container">
          <div className="row gutter-x-md-11x">
            <div className="col-12 col-md-6 col-xl-7 mb-8x mb-md-0x">
              <div className="max-w-lg-665">
                <div className="">
                  <h3 className="mb-4x font-racing">Subscribe to our newsletter</h3>
                  <p>
                    Join our newsletter community to receive fresh insights, special offers, and exciting updates right
                    in your inbox. Don&apos;t miss out – subscribe now!
                  </p>
                </div>

                <figure className="d-none d-md-block mt-10x">
                  <img src={Logo} alt="Frogtoberfest Logo" />
                </figure>

                <div className="mt-9x initiatives">
                  <p>
                    Initiative of{' '}
                    <a
                      href="https://www.lftechnology.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Leapfrog Technology
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="">
                <div className="ml-form-embed" data-account="738785:d6l2h0j5t4" data-form="5983064:r5a2f4"></div>
                {/* <form className='form-subscribe mb-10x' action="">
                  <input className='form-control' type="email" placeholder='Enter you email here' />
                  <input className='form-submit' type="submit" value="Subscribe" />
                </form> */}

                <div className="">
                  <p className="mb-4x fw-300">Follow us at our socials</p>
                  <ul className="social-icons d-flex gap-6x">
                    <li>
                      <a
                        href="https://www.facebook.com/lftechnology?mibextid=LQQJ4d"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/lftechnology?s=21" target="_blank" rel="noopener noreferrer">
                        {' '}
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/lftechnology?igshid=MzRlODBiNWFlZA=="
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {' '}
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <figure className="d-block d-md-none mt-10x hide-sm">
                  <img src={Logo} alt="Frogtoberfest Logo" />
                </figure>
                <div className="mt-9x initiatives initiatives--mobile-view">
                  <p>
                    Initiative of{' '}
                    <a
                      href="https://www.lftechnology.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary"
                    >
                      Leapfrog Technology
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="overlay"></div>
    </Fragment>
  );
};

export default Home;
