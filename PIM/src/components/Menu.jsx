import React, { useState } from 'react';
import Notif from '../assets/notif.svg';
import Coeur from '../assets/coeur.svg';
import Bonhomme from '../assets/bonhomme.svg';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container" style={{ overflowY: 'auto' }}>
      <style>{`
        .container {
          width: 360px; /* Dimensions du Samsung Galaxy 8 */
          overflow: hidden;
        }

        html, body {
          overflow-x: hidden;
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Varela Round', sans-serif;
        }

        .header {
          display: block;
          margin: 0 auto;
          width: 100%;
          max-width: 100%;
          box-shadow: none;
          background-color: #ADC798;
          position: fixed;
          height: 60px!important;
          overflow: hidden;
          z-index: 10;
          border-bottom: solid 1px;
        }

        .main {
          margin: 0 auto;
          display: block;
          height: 100%;
          margin-top: 60px;
        }

        .mainInner {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          text-align: center;
        }

        .mainInner div {
          font-size: 3em;
          font-weight: bold;
          letter-spacing: 1.25px;
        }

        #sidebarMenu {
          height: 100%;
          position: fixed;
          left: 0;
          width: 250px;
          margin-top: 60px;
          transform: translateX(-250px);
          transition: transform 250ms ease-in-out;
          background:#ADC798;
        }

        .sidebarMenuInner {
          margin: 0;
          padding: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.10);
        }

        .sidebarMenuInner li {
          list-style: none;
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          padding: 20px;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.10);
        }

        .sidebarMenuInner li span {
          display: block;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.50);
        }

        .sidebarMenuInner li a {
          color: #fff;
          text-transform: uppercase;
          font-weight: bold;
          cursor: pointer;
          text-decoration: none;
        }

        #sidebarMenu.open {
          transform: translateX(0);
        }

        input[type=checkbox] {
          transition: all 0.3s;
          box-sizing: border-box;
          display: none;
        }
        .hamburger{font:inherit;display:inline-block;overflow:visible;margin:0;padding:15px;cursor:pointer;transition-timing-function:linear;transition-duration:.15s;transition-property:opacity,filter;text-transform:none;color:inherit;border:0;background-color:transparent}.hamburger.is-active:hover,.hamburger:hover{opacity:.7}.hamburger.is-active .hamburger-inner,.hamburger.is-active .hamburger-inner:after,.hamburger.is-active .hamburger-inner:before{background-color:#000}.hamburger-box{position:relative;display:inline-block;width:40px;height:24px}.hamburger-inner{top:50%;display:block;margin-top:-2px}.hamburger-inner,.hamburger-inner:after,.hamburger-inner:before{position:absolute;width:40px;height:4px;transition-timing-function:ease;transition-duration:.15s;transition-property:transform;border-radius:4px;background-color:#000}.hamburger-inner:after,.hamburger-inner:before{display:block;content:""}.hamburger-inner:before{top:-10px}.hamburger-inner:after{bottom:-10px}.hamburger--3dx .hamburger-box{perspective:80px}.hamburger--3dx .hamburger-inner{transition:transform .15s cubic-bezier(.645,.045,.355,1),background-color 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dx .hamburger-inner:after,.hamburger--3dx .hamburger-inner:before{transition:transform 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dx.is-active .hamburger-inner{transform:rotateY(180deg);background-color:transparent!important}.hamburger--3dx.is-active .hamburger-inner:before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dx.is-active .hamburger-inner:after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dx-r .hamburger-box{perspective:80px}.hamburger--3dx-r .hamburger-inner{transition:transform .15s cubic-bezier(.645,.045,.355,1),background-color 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dx-r .hamburger-inner:after,.hamburger--3dx-r .hamburger-inner:before{transition:transform 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dx-r.is-active .hamburger-inner{transform:rotateY(-180deg);background-color:transparent!important}.hamburger--3dx-r.is-active .hamburger-inner:before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dx-r.is-active .hamburger-inner:after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dy .hamburger-box{perspective:80px}.hamburger--3dy .hamburger-inner{transition:transform .15s cubic-bezier(.645,.045,.355,1),background-color 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dy .hamburger-inner:after,.hamburger--3dy .hamburger-inner:before{transition:transform 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dy.is-active .hamburger-inner{transform:rotateX(-180deg);background-color:transparent!important}.hamburger--3dy.is-active .hamburger-inner:before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dy.is-active .hamburger-inner:after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dy-r .hamburger-box{perspective:80px}.hamburger--3dy-r .hamburger-inner{transition:transform .15s cubic-bezier(.645,.045,.355,1),background-color 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dy-r .hamburger-inner:after,.hamburger--3dy-r .hamburger-inner:before{transition:transform 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dy-r.is-active .hamburger-inner{transform:rotateX(180deg);background-color:transparent!important}.hamburger--3dy-r.is-active .hamburger-inner:before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dy-r.is-active .hamburger-inner:after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dxy .hamburger-box{perspective:80px}.hamburger--3dxy .hamburger-inner{transition:transform .15s cubic-bezier(.645,.045,.355,1),background-color 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dxy .hamburger-inner:after,.hamburger--3dxy .hamburger-inner:before{transition:transform 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dxy.is-active .hamburger-inner{transform:rotateX(180deg) rotateY(180deg);background-color:transparent!important}.hamburger--3dxy.is-active .hamburger-inner:before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dxy.is-active .hamburger-inner:after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--3dxy-r .hamburger-box{perspective:80px}.hamburger--3dxy-r .hamburger-inner{transition:transform .15s cubic-bezier(.645,.045,.355,1),background-color 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dxy-r .hamburger-inner:after,.hamburger--3dxy-r .hamburger-inner:before{transition:transform 0s cubic-bezier(.645,.045,.355,1) .1s}.hamburger--3dxy-r.is-active .hamburger-inner{transform:rotateX(180deg) rotateY(180deg) rotate(-180deg);background-color:transparent!important}.hamburger--3dxy-r.is-active .hamburger-inner:before{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--3dxy-r.is-active .hamburger-inner:after{transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--arrow.is-active .hamburger-inner:before{transform:translate3d(-8px,0,0) rotate(-45deg) scaleX(.7)}.hamburger--arrow.is-active .hamburger-inner:after{transform:translate3d(-8px,0,0) rotate(45deg) scaleX(.7)}.hamburger--arrow-r.is-active .hamburger-inner:before{transform:translate3d(8px,0,0) rotate(45deg) scaleX(.7)}.hamburger--arrow-r.is-active .hamburger-inner:after{transform:translate3d(8px,0,0) rotate(-45deg) scaleX(.7)}.hamburger--arrowalt .hamburger-inner:before{transition:top .1s ease .1s,transform .1s cubic-bezier(.165,.84,.44,1)}.hamburger--arrowalt .hamburger-inner:after{transition:bottom .1s ease .1s,transform .1s cubic-bezier(.165,.84,.44,1)}.hamburger--arrowalt.is-active .hamburger-inner:before{top:0;transition:top .1s ease,transform .1s cubic-bezier(.895,.03,.685,.22) .1s;transform:translate3d(-8px,-10px,0) rotate(-45deg) scaleX(.7)}.hamburger--arrowalt.is-active .hamburger-inner:after{bottom:0;transition:bottom .1s ease,transform .1s cubic-bezier(.895,.03,.685,.22) .1s;transform:translate3d(-8px,10px,0) rotate(45deg) scaleX(.7)}.hamburger--arrowalt-r .hamburger-inner:before{transition:top .1s ease .1s,transform .1s cubic-bezier(.165,.84,.44,1)}.hamburger--arrowalt-r .hamburger-inner:after{transition:bottom .1s ease .1s,transform .1s cubic-bezier(.165,.84,.44,1)}.hamburger--arrowalt-r.is-active .hamburger-inner:before{top:0;transition:top .1s ease,transform .1s cubic-bezier(.895,.03,.685,.22) .1s;transform:translate3d(8px,-10px,0) rotate(45deg) scaleX(.7)}.hamburger--arrowalt-r.is-active .hamburger-inner:after{bottom:0;transition:bottom .1s ease,transform .1s cubic-bezier(.895,.03,.685,.22) .1s;transform:translate3d(8px,10px,0) rotate(-45deg) scaleX(.7)}.hamburger--arrowturn.is-active .hamburger-inner{transform:rotate(-180deg)}.hamburger--arrowturn.is-active .hamburger-inner:before{transform:translate3d(8px,0,0) rotate(45deg) scaleX(.7)}.hamburger--arrowturn.is-active .hamburger-inner:after{transform:translate3d(8px,0,0) rotate(-45deg) scaleX(.7)}.hamburger--arrowturn-r.is-active .hamburger-inner{transform:rotate(-180deg)}.hamburger--arrowturn-r.is-active .hamburger-inner:before{transform:translate3d(-8px,0,0) rotate(-45deg) scaleX(.7)}.hamburger--arrowturn-r.is-active .hamburger-inner:after{transform:translate3d(-8px,0,0) rotate(45deg) scaleX(.7)}.hamburger--boring .hamburger-inner,.hamburger--boring .hamburger-inner:after,.hamburger--boring .hamburger-inner:before{transition-property:none}.hamburger--boring.is-active .hamburger-inner{transform:rotate(45deg)}.hamburger--boring.is-active .hamburger-inner:before{top:0;opacity:0}.hamburger--boring.is-active .hamburger-inner:after{bottom:0;transform:rotate(-90deg)}.hamburger--collapse .hamburger-inner{top:auto;bottom:0;transition-delay:.13s;transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.13s}.hamburger--collapse .hamburger-inner:after{top:-20px;transition:top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .1s linear}.hamburger--collapse .hamburger-inner:before{transition:top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse.is-active .hamburger-inner{transition-delay:.22s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--collapse.is-active .hamburger-inner:after{top:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s;opacity:0}.hamburger--collapse.is-active .hamburger-inner:before{top:0;transition:top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s;transform:rotate(-90deg)}.hamburger--collapse-r .hamburger-inner{top:auto;bottom:0;transition-delay:.13s;transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.13s}.hamburger--collapse-r .hamburger-inner:after{top:-20px;transition:top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .1s linear}.hamburger--collapse-r .hamburger-inner:before{transition:top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--collapse-r.is-active .hamburger-inner{transition-delay:.22s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translate3d(0,-10px,0) rotate(45deg)}.hamburger--collapse-r.is-active .hamburger-inner:after{top:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s;opacity:0}.hamburger--collapse-r.is-active .hamburger-inner:before{top:0;transition:top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s;transform:rotate(90deg)}.hamburger--elastic .hamburger-inner{top:2px;transition-timing-function:cubic-bezier(.68,-.55,.265,1.55);transition-duration:.275s}.hamburger--elastic .hamburger-inner:before{top:10px;transition:opacity .125s ease .275s}.hamburger--elastic .hamburger-inner:after{top:20px;transition:transform .275s cubic-bezier(.68,-.55,.265,1.55)}.hamburger--elastic.is-active .hamburger-inner{transition-delay:75ms;transform:translate3d(0,10px,0) rotate(135deg)}.hamburger--elastic.is-active .hamburger-inner:before{transition-delay:0s;opacity:0}.hamburger--elastic.is-active .hamburger-inner:after{transition-delay:75ms;transform:translate3d(0,-20px,0) rotate(-270deg)}.hamburger--elastic-r .hamburger-inner{top:2px;transition-timing-function:cubic-bezier(.68,-.55,.265,1.55);transition-duration:.275s}.hamburger--elastic-r .hamburger-inner:before{top:10px;transition:opacity .125s ease .275s}.hamburger--elastic-r .hamburger-inner:after{top:20px;transition:transform .275s cubic-bezier(.68,-.55,.265,1.55)}.hamburger--elastic-r.is-active .hamburger-inner{transition-delay:75ms;transform:translate3d(0,10px,0) rotate(-135deg)}.hamburger--elastic-r.is-active .hamburger-inner:before{transition-delay:0s;opacity:0}.hamburger--elastic-r.is-active .hamburger-inner:after{transition-delay:75ms;transform:translate3d(0,-20px,0) rotate(270deg)}.hamburger--emphatic{overflow:hidden}.hamburger--emphatic .hamburger-inner{transition:background-color .125s ease-in .175s}.hamburger--emphatic .hamburger-inner:before{left:0;transition:transform .125s cubic-bezier(.6,.04,.98,.335),top .05s linear .125s,left .125s ease-in .175s}.hamburger--emphatic .hamburger-inner:after{top:10px;right:0;transition:transform .125s cubic-bezier(.6,.04,.98,.335),top .05s linear .125s,right .125s ease-in .175s}.hamburger--emphatic.is-active .hamburger-inner{transition-delay:0s;transition-timing-function:ease-out;background-color:transparent!important}.hamburger--emphatic.is-active .hamburger-inner:before{top:-80px;left:-80px;transition:left .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;transform:translate3d(80px,80px,0) rotate(45deg)}.hamburger--emphatic.is-active .hamburger-inner:after{top:-80px;right:-80px;transition:right .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;transform:translate3d(-80px,80px,0) rotate(-45deg)}.hamburger--emphatic-r{overflow:hidden}.hamburger--emphatic-r .hamburger-inner{transition:background-color .125s ease-in .175s}.hamburger--emphatic-r .hamburger-inner:before{left:0;transition:transform .125s cubic-bezier(.6,.04,.98,.335),top .05s linear .125s,left .125s ease-in .175s}.hamburger--emphatic-r .hamburger-inner:after{top:10px;right:0;transition:transform .125s cubic-bezier(.6,.04,.98,.335),top .05s linear .125s,right .125s ease-in .175s}.hamburger--emphatic-r.is-active .hamburger-inner{transition-delay:0s;transition-timing-function:ease-out;background-color:transparent!important}.hamburger--emphatic-r.is-active .hamburger-inner:before{top:80px;left:-80px;transition:left .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;transform:translate3d(80px,-80px,0) rotate(-45deg)}.hamburger--emphatic-r.is-active .hamburger-inner:after{top:80px;right:-80px;transition:right .125s ease-out,top .05s linear .125s,transform .125s cubic-bezier(.075,.82,.165,1) .175s;transform:translate3d(-80px,-80px,0) rotate(45deg)}.hamburger--minus .hamburger-inner:after,.hamburger--minus .hamburger-inner:before{transition:bottom .08s ease-out 0s,top .08s ease-out 0s,opacity 0s linear}.hamburger--minus.is-active .hamburger-inner:after,.hamburger--minus.is-active .hamburger-inner:before{transition:bottom .08s ease-out,top .08s ease-out,opacity 0s linear .08s;opacity:0}.hamburger--minus.is-active .hamburger-inner:before{top:0}.hamburger--minus.is-active .hamburger-inner:after{bottom:0}.hamburger--slider .hamburger-inner{top:2px}.hamburger--slider .hamburger-inner:before{top:10px;transition-timing-function:ease;transition-duration:.15s;transition-property:transform,opacity}.hamburger--slider .hamburger-inner:after{top:20px}.hamburger--slider.is-active .hamburger-inner{transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--slider.is-active .hamburger-inner:before{transform:rotate(-45deg) translate3d(-5.71429px,-6px,0);opacity:0}.hamburger--slider.is-active .hamburger-inner:after{transform:translate3d(0,-20px,0) rotate(-90deg)}.hamburger--slider-r .hamburger-inner{top:2px}.hamburger--slider-r .hamburger-inner:before{top:10px;transition-timing-function:ease;transition-duration:.15s;transition-property:transform,opacity}.hamburger--slider-r .hamburger-inner:after{top:20px}.hamburger--slider-r.is-active .hamburger-inner{transform:translate3d(0,10px,0) rotate(-45deg)}.hamburger--slider-r.is-active .hamburger-inner:before{transform:rotate(45deg) translate3d(5.71429px,-6px,0);opacity:0}.hamburger--slider-r.is-active .hamburger-inner:after{transform:translate3d(0,-20px,0) rotate(90deg)}.hamburger--spin .hamburger-inner{transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.22s}.hamburger--spin .hamburger-inner:before{transition:top .1s ease-in .25s,opacity .1s ease-in}.hamburger--spin .hamburger-inner:after{transition:bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19)}.hamburger--spin.is-active .hamburger-inner{transition-delay:.12s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:rotate(225deg)}.hamburger--spin.is-active .hamburger-inner:before{top:0;transition:top .1s ease-out,opacity .1s ease-out .12s;opacity:0}.hamburger--spin.is-active .hamburger-inner:after{bottom:0;transition:bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;transform:rotate(-90deg)}.hamburger--spin-r .hamburger-inner{transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.22s}.hamburger--spin-r .hamburger-inner:before{transition:top .1s ease-in .25s,opacity .1s ease-in}.hamburger--spin-r .hamburger-inner:after{transition:bottom .1s ease-in .25s,transform .22s cubic-bezier(.55,.055,.675,.19)}.hamburger--spin-r.is-active .hamburger-inner{transition-delay:.12s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:rotate(-225deg)}.hamburger--spin-r.is-active .hamburger-inner:before{top:0;transition:top .1s ease-out,opacity .1s ease-out .12s;opacity:0}.hamburger--spin-r.is-active .hamburger-inner:after{bottom:0;transition:bottom .1s ease-out,transform .22s cubic-bezier(.215,.61,.355,1) .12s;transform:rotate(90deg)}.hamburger--spring .hamburger-inner{top:2px;transition:background-color 0s linear .13s}.hamburger--spring .hamburger-inner:before{top:10px;transition:top .1s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--spring .hamburger-inner:after{top:20px;transition:top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--spring.is-active .hamburger-inner{transition-delay:.22s;background-color:transparent!important}.hamburger--spring.is-active .hamburger-inner:before{top:0;transition:top .1s cubic-bezier(.33333,0,.66667,.33333) .15s,transform .13s cubic-bezier(.215,.61,.355,1) .22s;transform:translate3d(0,10px,0) rotate(45deg)}.hamburger--spring.is-active .hamburger-inner:after{top:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),transform .13s cubic-bezier(.215,.61,.355,1) .22s;transform:translate3d(0,10px,0) rotate(-45deg)}.hamburger--spring-r .hamburger-inner{top:auto;bottom:0;transition-delay:0s;transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:.13s}.hamburger--spring-r .hamburger-inner:after{top:-20px;transition:top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity 0s linear}.hamburger--spring-r .hamburger-inner:before{transition:top .1s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)}.hamburger--spring-r.is-active .hamburger-inner{transition-delay:.22s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:translate3d(0,-10px,0) rotate(-45deg)}.hamburger--spring-r.is-active .hamburger-inner:after{top:0;transition:top .2s cubic-bezier(.33333,0,.66667,.33333),opacity 0s linear .22s;opacity:0}.hamburger--spring-r.is-active .hamburger-inner:before{top:0;transition:top .1s cubic-bezier(.33333,0,.66667,.33333) .15s,transform .13s cubic-bezier(.215,.61,.355,1) .22s;transform:rotate(90deg)}.hamburger--stand .hamburger-inner{transition:transform 75ms cubic-bezier(.55,.055,.675,.19) .15s,background-color 0s linear 75ms}.hamburger--stand .hamburger-inner:before{transition:top 75ms ease-in 75ms,transform 75ms cubic-bezier(.55,.055,.675,.19) 0s}.hamburger--stand .hamburger-inner:after{transition:bottom 75ms ease-in 75ms,transform 75ms cubic-bezier(.55,.055,.675,.19) 0s}.hamburger--stand.is-active .hamburger-inner{transition:transform 75ms cubic-bezier(.215,.61,.355,1) 0s,background-color 0s linear .15s;transform:rotate(90deg);background-color:transparent!important}.hamburger--stand.is-active .hamburger-inner:before{top:0;transition:top 75ms ease-out .1s,transform 75ms cubic-bezier(.215,.61,.355,1) .15s;transform:rotate(-45deg)}.hamburger--stand.is-active .hamburger-inner:after{bottom:0;transition:bottom 75ms ease-out .1s,transform 75ms cubic-bezier(.215,.61,.355,1) .15s;transform:rotate(45deg)}.hamburger--stand-r .hamburger-inner{transition:transform 75ms cubic-bezier(.55,.055,.675,.19) .15s,background-color 0s linear 75ms}.hamburger--stand-r .hamburger-inner:before{transition:top 75ms ease-in 75ms,transform 75ms cubic-bezier(.55,.055,.675,.19) 0s}.hamburger--stand-r .hamburger-inner:after{transition:bottom 75ms ease-in 75ms,transform 75ms cubic-bezier(.55,.055,.675,.19) 0s}.hamburger--stand-r.is-active .hamburger-inner{transition:transform 75ms cubic-bezier(.215,.61,.355,1) 0s,background-color 0s linear .15s;transform:rotate(-90deg);background-color:transparent!important}.hamburger--stand-r.is-active .hamburger-inner:before{top:0;transition:top 75ms ease-out .1s,transform 75ms cubic-bezier(.215,.61,.355,1) .15s;transform:rotate(-45deg)}.hamburger--stand-r.is-active .hamburger-inner:after{bottom:0;transition:bottom 75ms ease-out .1s,transform 75ms cubic-bezier(.215,.61,.355,1) .15s;transform:rotate(45deg)}.hamburger--squeeze .hamburger-inner{transition-timing-function:cubic-bezier(.55,.055,.675,.19);transition-duration:75ms}.hamburger--squeeze .hamburger-inner:before{transition:top 75ms ease .12s,opacity 75ms ease}.hamburger--squeeze .hamburger-inner:after{transition:bottom 75ms ease .12s,transform 75ms cubic-bezier(.55,.055,.675,.19)}.hamburger--squeeze.is-active .hamburger-inner{transition-delay:.12s;transition-timing-function:cubic-bezier(.215,.61,.355,1);transform:rotate(45deg)}.hamburger--squeeze.is-active .hamburger-inner:before{top:0;transition:top 75ms ease,opacity 75ms ease .12s;opacity:0}.hamburger--squeeze.is-active .hamburger-inner:after{bottom:0;transition:bottom 75ms ease,transform 75ms cubic-bezier(.215,.61,.355,1) .12s;transform:rotate(-90deg)}.hamburger--vortex .hamburger-inner{transition-timing-function:cubic-bezier(.19,1,.22,1);transition-duration:.2s}.hamburger--vortex .hamburger-inner:after,.hamburger--vortex .hamburger-inner:before{transition-delay:.1s;transition-timing-function:linear;transition-duration:0s}.hamburger--vortex .hamburger-inner:before{transition-property:top,opacity}.hamburger--vortex .hamburger-inner:after{transition-property:bottom,transform}.hamburger--vortex.is-active .hamburger-inner{transition-timing-function:cubic-bezier(.19,1,.22,1);transform:rotate(765deg)}.hamburger--vortex.is-active .hamburger-inner:after,.hamburger--vortex.is-active .hamburger-inner:before{transition-delay:0s}.hamburger--vortex.is-active .hamburger-inner:before{top:0;opacity:0}.hamburger--vortex.is-active .hamburger-inner:after{bottom:0;transform:rotate(90deg)}.hamburger--vortex-r .hamburger-inner{transition-timing-function:cubic-bezier(.19,1,.22,1);transition-duration:.2s}.hamburger--vortex-r .hamburger-inner:after,.hamburger--vortex-r .hamburger-inner:before{transition-delay:.1s;transition-timing-function:linear;transition-duration:0s}.hamburger--vortex-r .hamburger-inner:before{transition-property:top,opacity}.hamburger--vortex-r .hamburger-inner:after{transition-property:bottom,transform}.hamburger--vortex-r.is-active .hamburger-inner{transition-timing-function:cubic-bezier(.19,1,.22,1);transform:rotate(-765deg)}.hamburger--vortex-r.is-active .hamburger-inner:after,.hamburger--vortex-r.is-active .hamburger-inner:before{transition-delay:0s}.hamburger--vortex-r.is-active .hamburger-inner:before{top:0;opacity:0}.hamburger--vortex-r.is-active .hamburger-inner:after{bottom:0;transform:rotate(-90deg)}

        .sidebarIconToggle {
          transition: all 0.3s;
          box-sizing: border-box;
          cursor: pointer;
          position: absolute;
          z-index: 99;
          height: 100%;
          top: 22px;
          left: 15px;
        }

        .spinner {
          transition: all 0.3s;
          box-sizing: border-box;
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: #fff;
        }

        .horizontal {
          transition: all 0.3s;
          box-sizing: border-box;
          position: relative;
          margin-top: 13px; /* Ajustez la valeur pour l'alignement vertical */
          width: 50px;
        }
        
        .diagonal.part-1 {
          position: relative;
          transition: all 0.3s;
          box-sizing: border-box;
          float: left;
          width: 50px;
        }
        
        .diagonal.part-2 {
          transition: all 0.3s;
          box-sizing: border-box;
          position: relative;
          float: left;
          margin-top: 13px; /* Ajustez la valeur pour l'alignement vertical */
          width: 50px;
          background-color: #1F330A,
        }

        input[type=checkbox]:checked ~ .sidebarIconToggle > .horizontal {
          transition: all 0.3s;
          box-sizing: border-box;
          opacity: 0;
        }

        input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-1 {
          transition: all 0.3s;
          box-sizing: border-box;
          transform: rotate(135deg);
          margin-top: 8px;
        }

        input[type=checkbox]:checked ~ .sidebarIconToggle > .diagonal.part-2 {
          transition: all 0.3s;
          box-sizing: border-box;
          transform: rotate(-135deg);
          margin-top:8px;

        }

        .icons-container {
          position: absolute;
          top: 50%; /* Ajustez si nécessaire */
          transform: translateY(-50%); /* Pour centrer verticalement */
          right: 10px; /* Ajustez pour l'espace entre les icônes et le bord droit */

        }
        
      `}</style>
      <div className="header">
        <div className="icons-container">
          {/* Utilisez Link pour relier chaque icône à une page */}
          <Link to="/Notifications">
            <img src={Notif} alt="Notifications" className="icon" />
          </Link>
          <Link to="/Favories">
            <img src={Coeur} alt="Favories" className="icon" />
          </Link>
          <Link to="/Profil">
            <img src={Bonhomme} alt="Profil" className="icon" />
          </Link>
        </div>
        
        <div>
          <button  className={sidebarOpen ? 'is-active hamburger hamburger--collapse' : 'hamburger hamburger--collapse'} type="button"  onClick={handleSidebarToggle}>
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>

      <div id="sidebarMenu" className={sidebarOpen ? 'open' : ''}>
        <ul className="sidebarMenuInner">
          <li><span>MENU</span></li>
          <li><a href="https://vanila.io" target="_blank" rel="noopener noreferrer">Refuge</a></li>
          <li><a href="https://instagram.com/plavookac" target="_blank" rel="noopener noreferrer">Cartes</a></li>
          <li><a href="https://twitter.com/plavookac" target="_blank" rel="noopener noreferrer">Animaux</a></li>
          <li><a href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg" target="_blank" rel="noopener noreferrer">Prendre rendez-vous</a></li>
          <li><a href="https://www.linkedin.com/in/plavookac/" target="_blank" rel="noopener noreferrer">Profil</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

