import React from "react";
import { FaSpotify, FaInstagram, FaYoutube, FaItunesNote } from "react-icons/fa";

class Footer extends React.Component {

  render() {
    return (
      <footer>
        <div className="linkGroup">
          <a href="https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr" className="link">
            <FaSpotify href="https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr" className="linkIcon" />
          </a>
          <a href="https://www.youtube.com/channel/UCyBIq1-kF6LL4wGLCgYWzrg" className="link">
            <FaYoutube href="https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr" className="linkIcon" />
          </a>
          <a href="https://music.apple.com/br/artist/whyme/1491270726?l=en" className="link">
            <FaItunesNote href="https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr" className="linkIcon" />
          </a>
          <a href="https://www.instagram.com/whyme.music/" className="link">
            <FaInstagram href="https://open.spotify.com/artist/6TCy6SzS0fARjG3Y637lpr" className="linkIcon" />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
