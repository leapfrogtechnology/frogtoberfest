import React, { Fragment, useEffect } from 'react';

import Icon1 from 'assets/images/icon-1.svg';
import Icon2 from 'assets/images/icon-2.svg';
import Icon3 from 'assets/images/icon-3.svg';
import Icon4 from 'assets/images/icon-4.svg';
import Icon5 from 'assets/images/icon-5.svg';
import Icon6 from 'assets/images/icon-6.svg';
import Icon7 from 'assets/images/icon-7.svg';
import Img1 from 'assets/images/logo-2024.png';
import Img2 from 'assets/images/img-2.jpg';
import Img3 from 'assets/images/img-3.jpg';
import Img4 from 'assets/images/img-4.jpg';
import Img5 from 'assets/images/img-5.jpg';
import Img6 from 'assets/images/img-6.png';
import Img7 from 'assets/images/img-7.png';
import Img8 from 'assets/images/img-8.png';
import Img9 from 'assets/images/img-9.png';
import LogoWhite from 'assets/images/leapfrog-opensource-logo.png';
import Link from 'assets/images/link.svg';
import SiteHeader from 'components/SiteHeader';
// import SiteTimer from 'components/SiteTimer';

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
    window.ml = function () {
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
        <section className="banner py-20 text-center text-lg-left">
          <div className="container">
            <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between lg:items-center">
              <div className="banner__image order-1 order-lg-2 flex-9 pr-lg-25x pt-5 pb-5 md:p-0">
                <img src={Img1} alt="Remaining Days" />
              </div>
              <div className="order-2 order-lg-1 flex-1">
                <h1 className='banner__title color-black--base fw-700 mb-6'>
                  Embracing Open Source
                </h1>
                <p className='mb-10x text-2xl md:text-3xl text-black mx-auto mx-lg-0x fw-550 leading-tighter'>
                  A month-long challenge to encourage you to contribute to open source projects.
                </p>

                {/* <SiteTimer /> */}

                <div className="d-flex flex-col md:flex-row gap-6x mt-6x m-lg-0x banner__buttons">
                  <a className='text-black' href="https://frog.ly/frogtoberfest-2024" target='_blank' rel="noopener noreferrer">
                    <button className='btn btn-primary'>Participate</button>
                  </a>
                  <a className='text-white' href="https://frogtoberfest-leaderboard.lftechnology.com/" target='_blank' rel="noopener noreferrer">
                    <button className='btn btn-link text-black'>Leaderboard</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='text-center py-16x py-md-20x bg-black--base'>
          <div className="container">
            <h2 className='mb-14x'>WHAT YOU NEED TO KNOW</h2>

            <div className="max-w-lg-985 mx-auto">
              <div className="row gutter-y-12x gutter-y-lg-0x">
                <div className="col-12 col-md-4">
                  <figure>
                    <img className='mb-4x' src={Icon1} alt="Open Source Hackathon for Leapfroggers and LeapNetwork" />
                    <figcaption className='max-w-300 mx-auto max-w-lg-auto'>
                      <h3 className='mb-2x color-white--base text-lg'>Who</h3>
                      <p>Open Source Hackathon for Leapfroggers and LeapNetwork</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-12 col-md-4">
                  <figure>
                    <img className='mb-4x' src={Icon2} alt="Create 8 pull requests (PR)" />
                    <figcaption className='max-w-300 mx-auto max-w-lg-auto'>
                      <h3 className='mb-2x color-white--base text-lg'>How</h3>
                      <p>Create 8 pull requests (PR)</p>
                    </figcaption>
                  </figure>
                </div>

                <div className="col-12 col-md-4">
                  <figure>
                    <img className='mb-4x' src={Icon3} alt="Any time between Oct 1 to Oct 31, 2024." />
                    <figcaption className='max-w-300 mx-auto max-w-lg-auto'>
                      <h3 className='mb-2x color-white--base text-lg'>When</h3>
                      <p>Any time between Oct 1 to Oct 31, 2024.</p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='participation' className='py-16x py-md-34x bg-grey-light-dark'>
          <div className="container">
            <h2 className='mb-8x'>Participation</h2>
            <p className='mb-6x'>The challenge is quite simple:</p>

            <div className="row gutter-y-6x gutter-x-lg-13x">
              <div className="col-12 col-md-6 col-lg-3">
                <div className="card participation-card">
                  <img className='mb-md-6x' src={Icon4} alt="Create 8 pull requests" />
                  <p className='leading-6 font-normal'>Create 8 pull requests (PRs) between Oct 1 to Oct 31, 2024.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card participation-card">
                  <img className='mb-md-6x' src={Icon5} alt="At least 5 PRs should be in repositories not owned by you." />
                  <p className='leading-6 font-normal'>At least 5 PRs should be in repositories not owned by you.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card participation-card">
                  <img className='mb-md-6x' src={Icon6} alt=" PRs can be made to any public repository on GitHub." />
                  <p className='leading-6 font-normal'> PRs can be made to any public repository on GitHub.</p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <div className="card participation-card">
                  <img className='mb-md-6x' src={Icon7} alt="PRs should not be labeled as ‘invalid." />
                  <p className='leading-6 font-normal'>PRs should not be labeled as ‘invalid.&apos;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='py-16x py-md-20x bg-black--base'>
          <div className="container">
            <h2 className='mb-8x'>Past Stats</h2>

            <div className="row align-items-center">
              <div className="col-lg-7 mb-6x mb-lg-0x">
                <div className="row gutter-5x">
                  <div className="col-12 col-md-6">
                    <div
                      className="stat-card p-10x radius-base h-100 d-flex align-items-center justify-content-center flex-column">
                      <div className="text-huge lh-normal">360+</div>
                      <p className='text-lg white-space-nowrap'>Participants</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    <div className="row gutter-4x stat-cards">
                      <div className="col-6">
                        <div className="stat-card p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl">1500+</div>
                          <div className="white-space-nowrap">Total PRs</div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="stat-card p-10x radius-base h-145 d-flex align-items-center justify-content-center flex-column">
                          <div className="text-xl">1200+</div>
                          <div className="white-space-nowrap">Merged PRs</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 pl-16 text-2xl">Frogtoberfest had more participants from 2019 to this year, ensuring its
                continued
                success
                for the next decade.</div>
            </div>
          </div>
        </section>

        <section className='py-16x py-md-34x bg-grey-light-dark'>
          <div className="container">
            <h2 className='mb-8x'>Leaps & Bonds</h2>
            <p className='mb-14x text-lg max-w-985 lh-120'>Whether it&apos;s your first time or the umpteenth, join the conversation
              as we
              discuss all
              things
              open-source.
              We&apos;re bringing in professionals who will share their experiences and tips on contributing to Frogtoberfest.
            </p>

            <div className="row flex-wrap gutter-8x">
              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className='img-full' src={Img2} alt="Leaps & Bonds" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className='img-full' src={Img3} alt=">Leaps & Bonds" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className='img-full' src={Img4} alt=">Leaps & Bonds" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure>
                  <img className='img-full' src={Img5} alt=">Leaps & Bonds" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id='swag' className='py-16x py-md-20x bg-black--base'>
          <div className="container">
            <div className="max-w-665 mb-8x">
              <h2 className='mb-8x'>SWAG for you</h2>
              <p className='text-lg mb-6x'>Frogtoberfest SWAG is waiting for you! Like every Frog-toberfest, we&apos;re hopping back
                with
                exclusive merch and
                ribbiting perks for all your contributions</p>
              <ul className='has-bullet'>
                <li>Top 20 contributors receive exclusive Frogtoberfest SWAG.</li>
                <li>All eligible participants receive a digital certificate of participation.</li>
                <li>Get featured on Leapfrog&apos;s social media and newsletters</li>
              </ul>
            </div>

            <div className="row flex-wrap gutter-8x">
              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img6} alt="SWAG for you" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img7} alt="SWAG for you" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img8} alt="SWAG for you" />
                </figure>
              </div>

              <div className="col-12 col-md-6 col-lg-3">
                <figure className='has-overlay'>
                  <img className='img-full' src={Img9} alt="SWAG for you" />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id='faq' className='py-16x py-md-34x bg-grey-light-dark'>
          <div className="container">
            <h2 className='mb-8x'>FAQs</h2>

            <div className="accordion">

              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    What is the purpose of Frogtoberfest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  Foster the open source contribution culture.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    Can a beginner participate in Frogtoberfest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  Yes, we encourage freshers as well as experts to participate in Frogtoberfest.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
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
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    What kind of projects can I work on during the Frogtoberfest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x mb-">
                  You have the flexibility to work on a wide range of projects. PRs can be made to any public repository on GitHub, allowing you to contribute to various open-source initiatives, from software development and documentation improvements to bug fixes and feature enhancements. Choose projects that align with your interests, skills, and goals to make a meaningful impact in the open-source community.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    How do I participate in the Frogtoberfest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  You have to fill up the registration form to be a verified participant for this challenge. In case you’ve not filled the form, you will not be included in the official leaderboard. As such, you you will not be eligible for the SWAG even if you pass the given criteria.</p>
              </div>

              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    How can I see my progress?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Check the leaderboard for your progress and top contributors. It can be accessed via official Frogtoberfest website.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    Do I only have to contribute to the company's open-source projects or can I contribute in other projects too?

                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Any contribution is accepted as long as they’re valid and pass the criteria.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    What are the judging criteria for the Frogtoberfest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  The judging criteria for Frogtober are primarily based on active contributions to the event.
                  <ol className='pl-10'>
                    <li>Create 8 pull requests on GitHub between October 1 and October 31, 2024</li>
                    <li>At least 5 pull requests should be in repositories not owned by you</li>
                    <li>Ensure all PRs are valid.</li>
                  </ol>

                  Note: The top 20 contributors who fulfill these requirements will become eligible to receive the coveted Frogtoberfest SWAG as a token of recognition for their valuable contributions.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    How do I win Frogtoberfest merch?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  The top 20 contributors in the leaderboard who fulfill the criteria will become eligible to receive the coveted Frogtoberfest SWAG as a token of recognition for their valuable contributions.
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    Will my contributions to Hacktoberfest also count as Frogtoberfest contributions?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Yes!
                </p>
              </div>
              <div className="accordion-content">
                <header className='d-flex gap-5x'>
                  <span className="accordion-content-title">
                    When and how I can attend this fest?
                  </span>
                  <i className="icon fa-solid fa-plus ml-auto"></i>
                </header>
                <p className="accordion-content-description mr-lg-15x">
                  Frogtoberfest challenge starts every year on October 1 and end on October 31.</p>
              </div>
            </div>
          </div>
        </section>
      </main >

      <footer className='pt-16x pt-md-20x pb-10x bg-black--base'>
        <div className="container">
          <div className="row gutter-x-md-11x">
            <div className="col-12 col-md-6 col-xl-7 mb-8x mb-md-0x">
              <div className="max-w-lg-665">
                <div className="career">
                  <h3 className='mb-4x'>JOIN OUR TEAM</h3>
                  <p>Join our thriving community of tech professionals!</p>
                  <p>
                    <a className="text-primary" href="https://career.lftechnology.com/o/leapnetwork" target='_blank' rel="noopener noreferrer">Visit our career page <img className="mt-2" src={Link} alt="Link" /></a>
                  </p>
                </div>
                <figure className='d-none d-md-block mt-10x'>
                  <img src={LogoWhite} alt="Frogtoberfest Logo" />
                </figure>

                <div className='mt-9x initiatives'>
                  <p>Initiative of <a href='https://www.lftechnology.com/' target='_blank' rel="noopener noreferrer" className='text-primary'>Leapfrog Technology</a></p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-5">
              <div className="">
                <div className="mt-8 md:mt-0">
                  <p className='mb-4x fw-300'>Follow us at our socials</p>
                  <ul className='social-icons d-flex gap-6x'>
                    <li><a href="https://www.facebook.com/lftechnology?mibextid=LQQJ4d" target='_blank' rel="noopener noreferrer">
                      <i className="fa-brands fa-facebook"></i>
                    </a></li>
                    <li><a href="https://x.com/lftechnology?s=21" target='_blank' rel="noopener noreferrer"> <i className="fa-brands fa-x-twitter"></i></a></li>
                    <li><a href="https://instagram.com/lftechnology?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noopener noreferrer"> <i className="fa-brands fa-instagram"></i></a></li>
                  </ul>
                </div>
                <figure className='block md:hidden mt-10'>
                  <img src={LogoWhite} alt="Frogtoberfest Logo" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="overlay"></div>
    </Fragment >
  );
};

export default Home;
