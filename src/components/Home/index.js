import React from 'react';
import { compose } from 'recompose';
import {Val} from '../../components/Cards';
import ChatBox from '../../components/ChatBox/ChatBox';
import { withAuthorization, withEmailVerification } from '../Session';

const week = [
    {
        id:"0",
        title:"MON",
        facts:"Positive fact about Mondays is that it is statistically the most likely day that the U.S. Stock Market will rise, rather than fall."
    },
    {
        id:"1",
        title:"TUE",
        facts:"According to a survey from Accountemps, almost half of the 150 executives that participated in a poll, identified Tuesday as the day that their employees were most productive."
    },
    {
        id:"2",
        title:"WED",
        facts:"The year 1800 is the only century year that began on a Wednesday in recorded history."
    },
    {
        id:"3",
        title:"THR",
        facts:"Many students call Thursdays ‘Thirsty Thursdays” due to a decreasing number of lessons students have on a Friday making it the day to start their weekend drinking."
    },
    {
        id:"4",
        title:"FRI",
        facts:"Friday is one of the most liked days of the week. Why? It is a day when all people break loose as they welcome the much anticipated weekend."
    },
    {
        id:"5",
        title:"SAT",
        facts:"End of the western work week, a day to sleep in—Saturday is special. ... That's the case with the days of the week"
    },
];

const HomePage = () => (
  <div>
      <ChatBox/>
    <section class="page-section portfolio" id="portfolio">
        <div class="container">
            <div class="text-center"> 
                <h2 class="page-section-heading text-secondary mb-0 d-inline-block">YOUR WEEK</h2>
            </div>
            <div class="divider-custom">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="row justify-content-center">
            { week.map( week => {
                return( 
                <div class="col-md-6 col-lg-4 mb-5" id={week}>
                    <div class="portfolio-item mx-auto" data-toggle="modal" data-target={`#${week.title}`}>
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">{week.title}</h5>
                                <p class="card-text">{week.facts}</p>
                                <div  class="btn btn-primary view-btn">view content</div>
                            </div>
                        </div>
                    </div>
                </div>)
              })} 
            </div>
        </div>
    </section>
    {week.map( (week) => {
        return (
            <div><Val data={week.title} /></div>
        )
    })}
    <section class="page-section bg-primary text-white mb-0" id="about">
        <div class="container">
            <div class="text-center">
                <h2 class="page-section-heading d-inline-block text-white">ABOUT</h2>
            </div>
            <div class="divider-custom divider-light">
                <div class="divider-custom-line"></div>
                <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                <div class="divider-custom-line"></div>
            </div>
            <div class="row">
                <div class="col-lg-4 ml-auto">
                    <p class="pre-wrap lead">A task performing website for the friends. Do make a plan and do it here.
Enjoy the procss.</p>
                </div>
                <div class="col-lg-4 mr-auto">
                    <p class="pre-wrap lead">create a post and work nice and do well guys. super work</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="page-section-heading text-secondary d-inline-block mb-0">CONTACT</h2>
                </div>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-4">
                        <div class="d-flex flex-column align-items-center">
                            <div class="icon-contact mb-3"><i class="fas fa-mobile-alt"></i></div>
                            <div class="text-muted">Phone</div>
                            <div class="lead font-weight-bold">96797-65721</div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="d-flex flex-column align-items-center">
                            <div class="icon-contact mb-3"><i class="far fa-envelope"></i></div>
                            <div class="text-muted">Email</div><a class="lead font-weight-bold" href="mailto:company@example.com">company@example.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
