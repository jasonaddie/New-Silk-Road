import React, { Component } from 'react'

import { Meta, SocialLinks } from '../../components'
import './style.css'

class AboutOrganizers extends Component {
  render () {
    return (
      <div className='main-content'>
        <Meta {...this.props} title='About Organizers' bodyClass='about-organizers' />
        <SocialLinks {...this.props} key='sociallinks' title='About Organizers' />

        <h1>About Organizers</h1>

        <h2><a href="https://www.aku.edu/ismc/Pages/home.aspx" target="_blank">Aga Khan University</a></h2>

        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nibh tristique, morbi inceptos tempor a elementum fusce placerat facilisis ut eget, ante quis quam cubilia mauris leo enim suspendisse. Conubia sociis mi hendrerit metus cubilia risus nulla, porta nostra sociosqu libero elementum ligula lacus, bibendum malesuada curae pharetra varius erat. Lobortis libero ut cubilia pretium cras eget senectus euismod, parturient tempus convallis magna facilisis dictum accumsan, duis quis praesent nascetur eleifend ridiculus phasellus.</p>
        <p>Commodo tellus felis condimentum a vestibulum lectus egestas feugiat nascetur, ac neque cursus diam duis justo facilisis ullamcorper. Facilisis nisl litora neque penatibus curae at semper nostra pellentesque, varius rhoncus justo tempus eleifend mattis pharetra aliquet, hendrerit convallis tincidunt habitant aliquam primis magnis eget. Torquent ullamcorper risus orci aenean donec scelerisque dis, enim condimentum tempor lacus vel ad taciti tincidunt, in morbi per facilisi commodo class. Litora quis condimentum vivamus nec accumsan tincidunt pharetra sem, proin ultricies dignissim lobortis suscipit eu molestie, volutpat euismod interdum bibendum egestas commodo aenean.</p>
        <div className='embed-container'>
          <iframe src='https://player.vimeo.com/video/253616577?color=ff000d' frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <p>Consequat imperdiet ligula orci pharetra aenean sed litora aliquam elementum dis, maecenas accumsan in primis felis vitae platea condimentum et. Vestibulum tempus euismod nostra praesent morbi sollicitudin sagittis convallis vivamus ante magna porta, ut tempor venenatis proin nam facilisi lacus fames accumsan iaculis libero, nunc fermentum vehicula per non ridiculus mus sodales primis mattis mollis. Cum nulla lacus phasellus egestas erat quis posuere, malesuada arcu sed non dapibus netus, tempus felis torquent nullam class gravida.</p>

        <h3><a href="https://www.eurasianet.org/" target="_blank">eurasianet</a></h3>

        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nibh tristique, morbi inceptos tempor a elementum fusce placerat facilisis ut eget, ante quis quam cubilia mauris leo enim suspendisse. Conubia sociis mi hendrerit metus cubilia risus nulla, porta nostra sociosqu libero elementum ligula lacus, bibendum malesuada curae pharetra varius erat. Lobortis libero ut cubilia pretium cras eget senectus euismod, parturient tempus convallis magna facilisis dictum accumsan, duis quis praesent nascetur eleifend ridiculus phasellus.</p>
      </div>
    )
  }
}

export default AboutOrganizers